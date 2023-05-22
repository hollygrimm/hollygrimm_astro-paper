---
pubDatetime: 2018-06-08T08:00:00Z
title: Syllabus - OpenAI Project
postSlug: syllabus_rl
featured: false
draft: false
tags:
  - OpenAI
  - ReinforcementLearning
ogImage: "/assets/avg_return_cartpole_lgbatch_5000.png"
description: OpenAI Scholars 2018 Reinforcement Learning Syllabus
---

## OpenAI Scholars 2018 Reinforcement Learning Syllabus

## Primary Resources

- [Reinforcement Learning: An Introduction, Sutton and Barto](http://incompleteideas.net/book/the-book.html)
- [Algorithms for Reinforcement Learning, Csaba Szepesvári](https://sites.ualberta.ca/~szepesva/RLBook.html)
- [Deep RL Bootcamp 2017](https://sites.google.com/view/deep-rl-bootcamp/lectures)
- [CS294 Fall 2017 UC Berkeley](http://rail.eecs.berkeley.edu/deeprlcourse-fa17/)

## Week 1, Jun 4: Markov Decision Processes

Topics: Dynamic Programming (Value iteration, Policy iteration, and Q-learning)

- Sutton Chapter 3: Markov Decision Processes and Chapter 4: Dynamic Programming
- Deep RL Bootcamp Core Lecture 1 Intro to MDPs and Exact Solution Methods -- Pieter Abbeel [Video](https://www.youtube.com/watch?v=qaMdN6LS9rA) | [Slides](https://drive.google.com/open?id=0BxXI_RttTZAhVXBlMUVkQ1BVVDQ)
- Deep RL Bootcamp Core Lecture 2 Sample-based Approximations and Fitted Learning -- Rocky Duan [Video](https://www.youtube.com/watch?v=qO-HUo0LsO4) | [Slides](https://drive.google.com/open?id=0BxXI_RttTZAhREJKRGhDT25OOTA)
- Deep RL Bootcamp Lab 1: Markov Decision Processes. You will implement value iteration, policy iteration, and tabular Q-learning and apply these algorithms to simple environments including tabular maze navigation (FrozenLake) and controlling a simple crawler robot.
- CS294 Reinforcement learning introduction -- Sergey Levine [Video](https://www.youtube.com/watch?v=PTbxa6GsTWc&index=4&list=PLkFD6_40KJIznC9CDbVTjAF2oyt8_VAe3&t=0s) | [Slides](http://rail.eecs.berkeley.edu/deeprlcourse-fa17/f17docs/lecture_3_rl_intro.pdf)
- CS294 Value functions introduction -- Sergey Levine [Video](https://www.youtube.com/watch?v=k1vNh4rNYec&list=PLkFD6_40KJIznC9CDbVTjAF2oyt8_VAe3&index=7&t=0s) | [Slides](http://rail.eecs.berkeley.edu/deeprlcourse-fa17/f17docs/lecture_6_value_functions.pdf)
- Introduction to Reinforcement Learning -- Joshua Achiam [Slides](https://github.com/jachiam/rl-intro/blob/master/Presentation/rl_intro.pdf)

## Week 2, Jun 11 Monte Carlo Methods

Topics: Use Blackjack to implement first-visit or every-visit MC prediction

- Sutton, Chapter 5.3: Monte Carlo Methods
- CS294 Optimal control and planning -- Sergey Levine [Video](https://www.youtube.com/watch?v=EfgC7v5V608&list=PLkFD6_40KJIznC9CDbVTjAF2oyt8_VAe3&index=9&t=0s) | [Slides](http://rail.eecs.berkeley.edu/deeprlcourse-fa17/f17docs/lecture_8_model_based_planning.pdf)

## Week 3, Jun 18 Imitation Learning with Mujoco

- Supervised learning and imitation (Levine) [Video](https://www.youtube.com/watch?v=C_LGsoe36I8&index=3&list=PLkFD6_40KJIznC9CDbVTjAF2oyt8_VAe3&t=0s) | [Slides](http://rail.eecs.berkeley.edu/deeprlcourse-fa17/f17docs/lecture_2_behavior_cloning.pdf)
- CS294 [Imitation Learning Project](http://rail.eecs.berkeley.edu/deeprlcourse-fa17/f17docs/hw1fall2017.pdf)

## Week 4, Jun 25 Policy Gradients

Topics: TD (Temporal Difference), use Cartpole and Humanoid for Policy Gradients

- Sutton Chapter 6: Temporal-Difference Learning
- Deep RL Bootcamp Core Lecture 4a Policy Gradients and Actor Critic -- Pieter Abbeel [Video](https://www.youtube.com/watch?v=S_gwYj1Q-44) | [Slides](https://drive.google.com/open?id=0BxXI_RttTZAhY216RTMtanBpUnc)
- Deep RL Bootcamp Core Lecture 4b Pong from Pixels -- Andrej Karpathy [Video](https://www.youtube.com/watch?v=tqrcjHuNdmQ) | [Slides](https://drive.google.com/open?id=0BxXI_RttTZAhTUpqUFdEZ3BXNFE)
- CS294 Policy gradients introduction -- Sergey Levine [Video](https://www.youtube.com/watch?v=tWNpiNzWuO8&index=5&list=PLkFD6_40KJIznC9CDbVTjAF2oyt8_VAe3&t=0s) | [Slides](http://rail.eecs.berkeley.edu/deeprlcourse-fa17/f17docs/lecture_4_policy_gradient.pdf) | [Policy Gradients Project](http://rail.eecs.berkeley.edu/deeprlcourse-fa17/f17docs/hw2_final.pdf)
- Policy Gradient Algorithms -- Lilian Weng [Blog](https://lilianweng.github.io/lil-log/2018/04/08/policy-gradient-algorithms.html)
- Sutton Chapter 13.5: Actor-Critic Methods
- CS294 Actor-critic introduction -- Sergey Levine [Video](https://www.youtube.com/watch?v=PpVhtJn-iZI&index=6&list=PLkFD6_40KJIznC9CDbVTjAF2oyt8_VAe3&t=0s) | [Slides](http://rail.eecs.berkeley.edu/deeprlcourse-fa17/f17docs/lecture_5_actor_critic_pdf.pdf)

## Week 5, Jul 2 Deep Q Learning, DQN, Rainbow

- Sutton Chapter 16.5: DQN
- Deep RL Bootcamp Core Lecture 3 DQN + Variants -- Vlad Mnih [Video](https://www.youtube.com/watch?v=fevMOp5TDQs) | [Slides](https://drive.google.com/open?id=0BxXI_RttTZAhVUhpbDhiSUFFNjg)
- Deep RL Bootcamp Lab 3: Deep Q-Learning. You will implement the DQN algorithm and apply it to Atari games.
- CS294 Neural networks review (Achiam) Video | [Slides](http://rail.eecs.berkeley.edu/deeprlcourse-fa17/f17docs/tf_review_session.pdf)
- CS294 Advanced Q-learning algorithms -- Sergey Levine [Video](https://www.youtube.com/watch?v=nZXC5OdDfs4&list=PLkFD6_40KJIznC9CDbVTjAF2oyt8_VAe3&index=8&t=0s) | [Slides](http://rail.eecs.berkeley.edu/deeprlcourse-fa17/f17docs/lecture_7_advanced_q_learning.pdf) | [DQN Project](http://rail.eecs.berkeley.edu/deeprlcourse-fa17/f17docs/hw3.pdf)

## Week 6, Jul 9 Model-based RL

- Deep RL Bootcamp Core Lecture 9 Model-based RL -- Chelsea Finn [Video](https://youtu.be/iC2a7M9voYU) | [Slides](https://drive.google.com/open?id=0BxXI_RttTZAhRTBqQmc5R0pGQlE)
- CS294 Learning dynamical systems from data -- Sergey Levine [Video](https://www.youtube.com/watch?v=yap_g0d7iBQ&list=PLkFD6_40KJIznC9CDbVTjAF2oyt8_VAe3&index=10&t=0s) | [Slides](http://rail.eecs.berkeley.edu/deeprlcourse-fa17/f17docs/lecture_9_model_based_rl.pdf)
- CS294 Learning policies by imitating optimal controllers -- Sergey Levine [Video](https://www.youtube.com/watch?v=AwdauFLan7M&list=PLkFD6_40KJIznC9CDbVTjAF2oyt8_VAe3&index=11&t=0s) | [Slides](http://rail.eecs.berkeley.edu/deeprlcourse-fa17/f17docs/lecture_10_imitating_optimal_control.pdf)
- CS294 Advanced model learning and images -- Chelsea Finn [Video](https://www.youtube.com/watch?v=vRkIwM4GktE&list=PLkFD6_40KJIznC9CDbVTjAF2oyt8_VAe3&index=12&t=0s) | [Slides](http://rail.eecs.berkeley.edu/deeprlcourse-fa17/f17docs/advanced_model_learning.pdf)
- CS294 Connection between inference and control -- Sergey Levine [Video](https://www.youtube.com/watch?v=iOYiPhu5GEk&list=PLkFD6_40KJIznC9CDbVTjAF2oyt8_VAe3&index=13&t=0s) | [Slides](http://rail.eecs.berkeley.edu/deeprlcourse-fa17/f17docs/lecture_11_control_and_inference.pdf)
- CS294 [Model Based RL Project](http://rail.eecs.berkeley.edu/deeprlcourse-fa17/f17docs/hw4.pdf)

## Week 7, Jul 16 Advanced Policy Gradients

Topics: Advanced Policy Gradients: Natural Policy, PPO (Use Roboschool instead of Mujoco license)

- Deep RL Bootcamp Core Lecture 5 Natural Policy Gradients, TRPO, and PPO -- John Schulman [Video](https://www.youtube.com/watch?v=xvRrgxcpaHY) | [Slides](https://drive.google.com/open?id=0BxXI_RttTZAhMVhsNk5VSXU0U3c)
- Deep RL Bootcamp Lab 4: Policy Optimization Algorithms. You will implement various policy optimization algorithms, including policy gradient, natural policy gradient, trust-region policy optimization (TRPO), and asynchronous advantage actor-critic (A3C). You will apply these algorithms to classic control tasks, Atari games, and roboschool locomotion environments.
- CS294 Learning policies by imitating optimal controllers -- Sergey Levine [Video](https://www.youtube.com/watch?v=AwdauFLan7M&list=PLkFD6_40KJIznC9CDbVTjAF2oyt8_VAe3&index=11&t=0s) | [Slides](http://rail.eecs.berkeley.edu/deeprlcourse-fa17/f17docs/lecture_10_imitating_optimal_control.pdf)

## Week 8, Jul 23 Inverse RL

Topics: GAIL

- CS294 Inverse reinforcement learning -- Sergey Levine [Video](https://www.youtube.com/watch?v=-3BcZwgmZLk&t=0s&list=PLkFD6_40KJIznC9CDbVTjAF2oyt8_VAe3&index=14) | [Slides](http://rail.eecs.berkeley.edu/deeprlcourse-fa17/f17docs/lecture_12_irl.pdf)
- Algorithms for Inverse Reinforcement Learning [PDF](http://ai.stanford.edu/~ang/papers/icml00-irl.pdf)
- Learning Robust Rewards with Adversarial Inverse Reinforcement Learning [PDF](https://arxiv.org/abs/1710.11248)
- Maximum Entropy Inverse Reinforcement Learning [PDF](http://www.aaai.org/Papers/AAAI/2008/AAAI08-227.pdf)
- Maximum Entropy Deep Inverse Reinforcement Learning [PDF](https://arxiv.org/pdf/1507.04888.pdf)
- Guided Cost Learning: Deep Inverse Optimal Control via Policy Optimization [PDF](https://arxiv.org/pdf/1603.00448.pdf)
- Generative Adversarial Imitation Learning [PDF](https://arxiv.org/pdf/1606.03476.pdf)
