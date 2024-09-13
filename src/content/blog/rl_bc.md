---
pubDatetime: 2018-06-22T08:00:00Z
title: Week 3 - OpenAI Project
postSlug: rl_bc
featured: false
draft: false
tags:
  - OpenAI
  - ReinforcementLearning
  - ImitationLearning
  - Mujoco
ogImage: "/sites/default/files/styles/large/public/2018-07/walk2d_frame_125.png"
description: Imitation Learning and Mujoco
---

## Imitation Learning and Mujoco

![Walk 2d](/sites/default/files/styles/large/public/2018-07/walk2d_frame_125.png)

This week I worked on _Homework 1: Imitation Learning_ from the Fall 2017 CS294 course at Berkeley. Professor Levine is an amazing lecturer and the information he covers in [one lecture](https://www.youtube.com/watch?v=C_LGsoe36I8&index=3&list=PLkFD6_40KJIznC9CDbVTjAF2oyt8_VAe3&t=0s) is quite dense.

Imitation Learning is a form of Supervised machine learning for behavior. For this exercise, we were supplied with expert policies for six different OpenAI Gym Mujoco environments. Each environment has different observation and action spaces:

| Environment | Observations | Actions | Video                                                                                                                                                                                                                     |
| ----------- | ------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ant         | 11           | 8       | <video controls=""><source src="https://raw.githubusercontent.com/hollygrimm/cs294-homework/master/hw1/images/ant_expert_250.mp4" type="video/mp4"></source> Your browser does not support the video tag.</video>         |
| HalfCheetah | 17           | 6       | <video controls=""><source src="https://raw.githubusercontent.com/hollygrimm/cs294-homework/master/hw1/images/halfcheetah_expert_250.mp4" type="video/mp4"></source> Your browser does not support the video tag.</video> |
| Hopper      | 11           | 3       | <video controls=""><source src="https://raw.githubusercontent.com/hollygrimm/cs294-homework/master/hw1/images/hopper_expert_250.mp4" type="video/mp4"></source> Your browser does not support the video tag.</video>      |
| Humanoid    | 376          | 17      | <video controls=""><source src="https://raw.githubusercontent.com/hollygrimm/cs294-homework/master/hw1/images/humanoid_expert_250.mp4" type="video/mp4"></source> Your browser does not support the video tag.</video>    |
| Reacher     | 11           | 2       | <video controls=""><source src="https://raw.githubusercontent.com/hollygrimm/cs294-homework/master/hw1/images/reacher_expert_250.mp4" type="video/mp4"></source> Your browser does not support the video tag.</video>     |
| Walker2d    | 11           | 2       | <video controls=""><source src="https://raw.githubusercontent.com/hollygrimm/cs294-homework/master/hw1/images/walker_expert_250.mp4" type="video/mp4"></source> Your browser does not support the video tag.</video>      |

The task was to train a Neural Network on these expert policies (Behavioral Cloning), compare it to the expert results, and, lastly, enhance the Neural Network with an additional aggregation step (DAgger).

A simple Neural Network with non-linear activations is typically used, although a RNN can be deployed for non-Markovian tasks where behavior is dependent on all previous observations, instead of just the current observation.

The input to the network is an observation and the output is an action. Loss is calculated using the mean squared error between the predicted actions and expert actions.

The DAgger algorithm adds an additional step, where observations are generated from the trained policy, then passed to the expert policy for labeling with actions. This new experience is then aggregated into the dataset.

![DAgger algorithm](/sites/default/files/inline-images/DAgger_algo_600.png)

[Above diagram from Sergey Levine’s CS294 Lecture 2: Supervised Learning of Behaviors](http://rail.eecs.berkeley.edu/deeprlcourse-fa17/f17docs/lecture_2_behavior_cloning.pdf)

## Code

My code can be found here:

[https://github.com/hollygrimm/cs294-homework/tree/master/hw1](https://github.com/hollygrimm/cs294-homework/tree/master/hw1)

Here are the dependencies:

- Mujoco version 1.3.1
- mujoco-py version 0.5.7
- OpenAI Gym commit 5f8d1fc1c6ea8a7dab44fcdab8a4ac1c24ba6759

## Generate Rollout Data

Before training, roll-out data must be generated from the expert policy files. A single roll-out is the result of a single episode executed until done or maximum timesteps are reached.

```python
import run_expert
run_expert.generate_all_rollout_data()
```

## Model

The network has two fully-connected layers with 50 units per layer, followed by a ReLU non-linearity. The observation data is normalized before training. I used a batch size of 32 and learning rate of .001. For behavioral cloning, I trained for 100 epochs and for DAgger, 40 epochs.

![TF Graph](/assets/hw1-graph.png)

To train the model, run:

```bash
python bc.py
```

## Training Results

| Environment    | Roll-outs | Expert Rewards | BC Rewards  | DAgger Rewards |
| -------------- | --------- | -------------- | ----------- | -------------- |
| Ant-v1         | 250       | 4747 (459)     | 905 (1)     | 896 (2)        |
| HalfCheetah-v1 | 10        | 4161 (69)      | 4197 (76)   | 4139 (57)      |
| Hopper-v1      | 10        | 3780 (1)       | 3581 (598)  | 3775 (2)       |
| Humanoid-v1    | 250       | 10402 (107)    | 354 (7)     | 385 (24)       |
| Reacher-v1     | 10        | -3.8 (1)       | -14 (5)     | -12 (3)        |
| Walker2d-v1    | 250       | 5513 (49)      | 4993 (1058) | 5460 (132)     |

The standard deviation of the rewards is in parenthesis. I was able to get good results on HalfCheetah, Hopper, and Walker2d. Below shows the validation loss comparison between DAgger and Behavioral Cloning (BC). DAgger was able to train faster and better in 40 epochs than BC in 100 epochs on Walker2d.

![Walker2D Validation Loss](/assets/walker_val_loss.png)

Behavioral Cloning:

<video controls=""><source src="https://raw.githubusercontent.com/hollygrimm/cs294-homework/master/hw1/images/walker_bc.mp4" type="video/mp4"> Your browser does not support the video tag.</video>

DAgger:

<video controls=""><source src="https://github.com/hollygrimm/cs294-homework/blob/master/hw1/images/walker_da.mp4?raw=true" type="video/mp4"> Your browser does not support the video tag.</video>

The Walker2d video of the DAgger version looks a little smoother than the BC version.

## Tensorboard

To view loss charts after training execution, run:

```bash
tensorboard --logdir=results
```

## Next Week:

Policy Gradients!
