---
pubDatetime: 2018-07-13T08:00:00Z
title: Week 6 - OpenAI Project
postSlug: rl_modelbased
featured: false
draft: false
tags:
  - OpenAI
  - ReinforcementLearning
  - Model-based-RL
ogImage: "/sites/default/files/styles/large/public/2018-07/halfcheetah_0.png"
description: Model-based RL
---

## Model-based RL

![Half Cheetah](/sites/default/files/styles/large/public/2018-07/halfcheetah_0.png)

This week I learned about Model-based RL where a model of the dynamics of the environment is used to make predictions. Previous algorithms that I’ve studied have been model-free where a policy or value function is being optimized. Instead, Model-based RL predicts what the environment looks like, and it can create a model that is independent of the task you are trying to achieve. The dynamics model can be implemented using a Gaussian Process, a Neural Network, or other methods.

One advantage of model-based RL is that they require fewer samples to train compared to model-free. According to Sergey Levine [4], model-based RL requires 1000 times fewer samples than a model-free learner like A3C.

## Code

I implemented the CS294 Homework 4 [7] to understand the interaction between the Neural Network, Model Predictive Control, and data aggregation. The environment was a MuJoCo HalfCheetah simulation in OpenAI Gym.

[GitHub Code](https://github.com/hollygrimm/cs294-homework/tree/master/hw4)

## Results

![HalfCheetah Average Return](/assets/halfcheetah_averagereturn_n15.png)

An average return of 1430 was reached after 15 iterations.

Final Video:

<video controls><source src="https://raw.githubusercontent.com/hollygrimm/cs294-homework/master/hw4/assets/halfcheetah_13iterations.mp4" type="video/mp4"> Your browser does not support the video tag.</video>

## Modified HalfCheetahEnv

The homework code included a modified version of HalfCheetah, but it wasn’t compatible with OpenAI Gym’s wrappers. I wanted to use wrappers.Monitor to record video, so I had to rewrite the code to define a custom environment. I extended the HalfCheetahEnv, modified the frame skip from 5 to 1, and added an additional observation, self.get_body_com("torso").flat, to the \_get_obs function:

```
class HalfCheetahTorsoEnv(HalfCheetahEnv, utils.EzPickle):
    def __init__(self, **kwargs):
        mujoco_env.MujocoEnv.__init__(self, kwargs["model_path"], 1)
        utils.EzPickle.__init__(self)

    def _get_obs(self):
        obs = np.concatenate([
            HalfCheetahEnv._get_obs(self),
            self.get_body_com("torso").flat,
        ])
        return obs
```

The new class adds the position of the HalfCheetah’s torso to the observation data.

I registered the class inline, so I could adjust the max_episode_steps with a command line argument:

```
    register(
        id='HalfCheetahTorso-v1',
        entry_point='cheetah_env2:HalfCheetahTorsoEnv',
        reward_threshold=4800.0,
        max_episode_steps=args.ep_len,
        kwargs= dict(model_path=os.path.dirname(gym.envs.mujoco.__file__) + "/assets/half_cheetah.xml")
    )
```

## Collect Base Data

The first step is to initialize a dataset of trajectories by running a random policy. Here is a video of the HalfCheetah while the data is being collected:

Video:

<video controls><source src="https://raw.githubusercontent.com/hollygrimm/cs294-homework/master/hw4/assets/halfcheetah_random.mp4" type="video/mp4"> Your browser does not support the video tag.</video>

## Neural Network Dynamics Model

The paper [1] uses a neural network for the dynamics model with two fully-connected layers of 500 units each and a ReLU activation. When fitting the dynamics model, normalized state and action pairs are input, and the state differences (or deltas) between the input state and next state are output. By predicting a change in state, rather than just the next state, the dynamics model can predict over several timesteps instead of just one timestep.

The mean squared error between the predicted and expected state deltas is minimized during training with the Adam optimizer.

## Reward Function

The reward function was provided in the homework code, and was a combination of the location of the HalfCheetah’s leg, shin, and foot position.

## Model Predictive Controller

The Model Predictive Controller(MPC) selects an action for a particular state by first generating ten simulated paths each with a horizon of five actions into the future. The next state is predicted using the dynamics model. The candidate paths are evaluated using the reward function and the best performing trajectory is selected. The first action of that trajectory is then performed.

When ten samples are completed with the MPC, the new data is then aggregated into the dataset. This completes the first iteration. For the next iteration, the dynamics model is refitted to the new data, and new samples are again generated using the MPC.

## References

1. Anusha Nagabandi et al. “Neural Network Dynamics for Model-Based Deep Reinforcement Learning with Model-Free Fine-Tuning”. [PDF](https://arxiv.org/abs/1708.02596)
2. Chelsea Finn. “Deep RL Bootcamp Core Lecture 9 Model-based RL”. [Video](https://youtu.be/iC2a7M9voYU) | [Slides](https://drive.google.com/open?id=0BxXI_RttTZAhRTBqQmc5R0pGQlE)
3. Sergey Levine. “CS294 Learning dynamical systems from data”. [Video](https://www.youtube.com/watch?v=yap_g0d7iBQ&list=PLkFD6_40KJIznC9CDbVTjAF2oyt8_VAe3&index=10&t=0s) | [Slides](http://rail.eecs.berkeley.edu/deeprlcourse-fa17/f17docs/lecture_9_model_based_rl.pdf)
4. Sergey Levine. “CS294 Learning policies by imitating optimal controllers”. [Video](https://www.youtube.com/watch?v=AwdauFLan7M&list=PLkFD6_40KJIznC9CDbVTjAF2oyt8_VAe3&index=11&t=0s) | [Slides](http://rail.eecs.berkeley.edu/deeprlcourse-fa17/f17docs/lecture_10_imitating_optimal_control.pdf)
5. Chelsea Finn. “CS294 Advanced model learning and images” [Video](https://www.youtube.com/watch?v=vRkIwM4GktE&list=PLkFD6_40KJIznC9CDbVTjAF2oyt8_VAe3&index=12&t=0s) | [Slides](http://rail.eecs.berkeley.edu/deeprlcourse-fa17/f17docs/advanced_model_learning.pdf)
6. Sergey Levine. “CS294 Connection between inference and control” [Video](https://www.youtube.com/watch?v=iOYiPhu5GEk&list=PLkFD6_40KJIznC9CDbVTjAF2oyt8_VAe3&index=13&t=0s) | [Slides](http://rail.eecs.berkeley.edu/deeprlcourse-fa17/f17docs/lecture_11_control_and_inference.pdf)
7. CS294 [Model Based RL Project](http://rail.eecs.berkeley.edu/deeprlcourse-fa17/f17docs/hw4.pdf)
