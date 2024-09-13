---
pubDatetime: 2018-07-30T08:00:00Z
title: Week 8 - OpenAI Project
postSlug: rl_gail
featured: false
draft: false
tags:
  - OpenAI
  - ReinforcementLearning
  - GAIL
ogImage: "/assets/Humanoid-unnormalized-deterministic-scores.png"
description: Generative Adversarial Imitation Learning (GAIL)
---

## Generative Adversarial Imitation Learning (GAIL)

Imitation Learning or learning from expert trajectories can be implemented two different ways:

- Behavioral Cloning
  - a supervised learning problem that maps state/action pairs to policy
  - requires a large number of expert trajectories
  - copies actions exactly, even if they are of no importance to the task
- Inverse RL
  - learns the reward function from expert trajectories, then derives the optimal policy
  - expensive to run
  - indirectly learns optimal policy from the reward function

## GAIL

GAIL is not exactly Inverse Reinforcement Learning because it’s learns the policy, not the reward function, directly from the data. Yet, it’s better than Behavioral Cloning and sometimes better than the experts, because it’s doing Reinforcement Learning and it’s not constrained to always be close to the expert.

GAIL, similar to a Generative Adversarial Networks, is composed of two neural networks. The Policy (Generator) network pi-theta is trained using TRPO and the discriminator network D is a supervised learning problem trained with an ADAM gradient step on expert trajectories. Both networks have two hidden layers of 100 units each with a tanh activation.

The goal is to find a policy pi-theta such that the discriminator cannot distinguish between states following the pi-theta as opposed to those from pi-expert.

## Steps to train GAIL

1. Sample the expert trajectories
2. Optimize the Policy pi-theta
3. Optimize the Discriminator D

I used OpenAI’s Baseline GAIL code to train on MuJoCo: [https://github.com/hollygrimm/gail-mujoco](https://github.com/hollygrimm/gail-mujoco)

## Results

I ran GAIL and Behaviorial Cloning on the following MuJoCo environments: Humanoid, HumanoidStandup, and Hopper. With five expert trajectories on Humanoid, GAIL was able to get better than "expert" results. These tests were run with only one seed, I would need to run many more seeds to make a conclusive statement.

![Humanoid Scores](/assets/Humanoid-unnormalized-deterministic-scores.png)

HumanoidStandup Trained on GAIL

<video controls=""><source src="https://raw.githubusercontent.com/hollygrimm/gail-mujoco/master/result/HumanoidStandup-gail-5.mp4" type="video/mp4"></source> Your browser does not support the video tag.</video>

## References

1. Sergey Levine. “CS294 Inverse reinforcement learning”. [Video](https://www.youtube.com/watch?v=-3BcZwgmZLk&t=0s&list=PLkFD6_40KJIznC9CDbVTjAF2oyt8_VAe3&index=14) | [Slides](http://rail.eecs.berkeley.edu/deeprlcourse-fa17/f17docs/lecture_12_irl.pdf)
2. Ng et al. “Algorithms for Inverse Reinforcement Learning”. [PDF](http://ai.stanford.edu/~ang/papers/icml00-irl.pdf).
3. Fu et al. “Learning Robust Rewards with Adversarial Inverse Reinforcement Learning”. [PDF](https://arxiv.org/abs/1710.11248).
4. Ziebart et al. “Maximum Entropy Inverse Reinforcement Learning”. [PDF](http://www.aaai.org/Papers/AAAI/2008/AAAI08-227.pdf).
5. Wulfmeier et al. “Maximum Entropy Deep Inverse Reinforcement Learning”. [PDF](https://arxiv.org/pdf/1507.04888.pdf).
6. Finn et al. “Guided Cost Learning: Deep Inverse Optimal Control via Policy Optimization”. [PDF](https://arxiv.org/pdf/1603.00448.pdf).
7. Ho et al. “Generative Adversarial Imitation Learning”. [PDF](https://arxiv.org/pdf/1606.03476.pdf).
