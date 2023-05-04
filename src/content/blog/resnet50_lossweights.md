---
pubDatetime: 2018-08-24T15:03:00Z
title: Week 12 - OpenAI Project
postSlug: resnet50_lossweights
featured: false
draft: false
tags:
  - OpenAI
  - GenerativeArt
  - LossWeights
  - ArtCompositionAttributesNetwork
ogImage: "/sites/default/files/inline-images/validation_loss_repetition_1_.7_.5_0.png"
description:
  Training Art Composition Attributes
---
## Training Art Composition Attributes

I’m training on eight art attributes, six of the attributes have numerical values between 1 and 10. The other two attributes are primary color composed of 13 classes and color harmony which has 6 classes. Mean squared error is used on the numerical values to calculate loss, and categorical cross-entropy on the categorical attributes.

My first training run found that the model was not learning the repetition value after 200 epochs (orange line in graph below). It’s validation loss was steadily increasing, although I was able to get some good training results from the other art attributes: variety in size, variety in shape, and variety in texture.

After doing some research, I read that losses from categorical cross-entropy are often higher than those from mean squared error. To remedy this, you can modify the loss weights across the different attribute types and thus help balance contributions of each of the losses.

After my initial training, I found that losses from categorical cross-entropy (color harmony and primary color) were typically seven times higher than those from mean squared error. As a result, I adjusted the categorical attribute loss weights from 1 to .5 and retrained with the numerical attribute loss weights staying the same at 1. The green line shows much better learning on the repetition attribute after 300 epochs, but now learning on primary color was stalled (second chart below).

![Validation Loss on Repetition](/sites/default/files/inline-images/validation_loss_repetition_1_.7_.5_0.png)

![Validation Loss for Primary Color](/sites/default/files/inline-images/validation_loss_pri_color_1_.7_.5.png)

On my third training run (gray lines above), I adjusted the categorical attribute loss weights from 1.0 to .7. Again, the numerical attribute loss weights stayed the same at 1.0. With these weights, validation losses on the repetition attribute were very good. Primary color losses were better than the .5 loss weights, but not as good as the original 1 loss weights.

This week, I’ll try a longer training run of 1000 epochs with .7 categorical loss weights. In addition, I’ll try another run with .85 categorical loss weights.