---
pubDatetime: 2018-04-02T08:00:00Z
title: Single Voice Training and Synthesizing using WaveNet
postSlug: wavenet_plath
featured: false
draft: false
tags:
  - WaveNet
  - DeepLearning
  - NeuralNetwork
  - Audio
  - Audacity
ogImage: "/sites/default/files/styles/large/public/2018-04/sylvia_plath_generated_waveform_0.png"
description: Synthesizing Sylvia Plath's voice
---

![Sylvia Plath Generated Waveform](/sites/default/files/styles/large/public/2018-04/sylvia_plath_generated_waveform_0.png)

Using WaveNet, a deep neural network, I was able to synthesize a ten second clip of Sylvia Plath's voice. WaveNet was trained without text sequences, so the generated speech is gibberish:

<audio controls="" src="https://raw.githubusercontent.com/hollygrimm/wavenet-plath/master/synthesis_52900_2018-03-29.mp3"> </audio>

## Dataset

The network was trained on 1000+ audio clips from 80 minutes of poetry spoken by Sylvia Plath. Here is an example of one of the clips:

<audio controls="" https:="" install="" src="https://raw.githubusercontent.com/hollygrimm/wavenet-plath/master/plath1-443.mp3"> </audio>

To create the clips, I used Audacity to break up the ~30 minute MP3 files into smaller clips using "Sound Finder":

<video controls="" height="540" width="960"><source src="https://raw.githubusercontent.com/hollygrimm/wavenet-plath/master/split_mp3_clips.mp4" type="video/mp4"></source> Your browser does not support the video tag.</video>

I then listened to clips below 30k in file size, and deleted any clips that are silent.

## Training

The batch size was set to 2 for a 2GB GPU. There was a lot of jitter, but the loss continued to descend after 500k steps:

![Loss chart after 529000 steps of training](/assets/chart_loss_52900_2018-03-29.png)

## The Generated Waveform

<video controls="" height="540" width="960"><source src="https://raw.githubusercontent.com/hollygrimm/wavenet-plath/master/synthesis_52900_2018-03-29.mp4" type="video/mp4"></source> Your browser does not support the video tag.</video>

## The Code

[Github Repository](https://github.com/hollygrimm/wavenet-plath)

### References:

1. [WaveNet: A Generative Model for Raw Audio (Blog Post) [deepmind.org]](https://deepmind.com/blog/wavenet-generative-model-raw-audio/)
2. [WaveNet: A Generative Model for Raw Audio (Paper) [arxiv.org]](https://arxiv.org/abs/1609.03499)
3. [Fast Wavenet Generation Algorithm (Paper) [arxiv.org]](https://arxiv.org/abs/1611.09482)
