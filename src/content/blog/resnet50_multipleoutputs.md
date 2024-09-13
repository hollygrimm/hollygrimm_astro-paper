---
pubDatetime: 2018-08-24T15:03:00Z
title: Week 11 - OpenAI Project
postSlug: resnet50_multipleoutputs
featured: false
draft: false
tags:
  - OpenAI
  - ResNet50
  - Keras
  - GenerativeArt
  - ArtCompositionAttributesNetwork
ogImage: "/sites/default/files/inline-images/tetradic.png"
description: Tuning ResNet50 Code and Multilabel Attributes
---

## Tuning ResNet50 Code and Multilabel Attributes

As detailed last week, I’m fine tuning ResNet50 for art attributes. Here is the Keras code: [https://github.com/hollygrimm/art-composition-cnn](https://github.com/hollygrimm/art-composition-cnn).

### Data Generator with Multiple Outputs

The most difficult part was creating a Keras Data Generator that could handle multiple outputs of target (label) data for the model.fit-generator() call. The Keras documentation describes the y argument to the fit-generator as a “list of Numpy arrays (if the model has multiple outputs)”

Here is the code for a custom data generator that takes in a batch of image filenames and attributes. It reads and resizes the images and places them in the X numpy array. Then it takes the list of Y attributes, transposes them and returns a list of Numpy arrays for each column.

<script src="https://gist.github.com/hollygrimm/8b14882dba5c37ad850c0da9f8c4ed61.js"></script>

### Fine-tuning ResNet50 with Multiple Outputs

The model uses the ResNet50 pretrained on imagenet. To output the art composition attributes, I created a Global Average Pooling (GAP) layer for the activation layer at the end of each ResNet block. These GAP values are concatenated and then normalized using the L2 norm. From this normalized output, a dense layer (one unit with a tanh activation) is created for each of the art composition attributes.

<script src="https://gist.github.com/hollygrimm/e99a92f73ff6baf87bab6d1a342a2812.js"></script>

### Training on Color Attributes

So far, I’ve just trained on attributes that have values 1-10. I’d also like to add two color classification attributes: color harmony (monochromatic, analogous, complementary, split complementary, triadic, tetradic) and primary color (Magenta, Red-Magenta, Red, Orange, Yellow, Yellow-Green, Green, Green-Cyan, Cyan, Blue-Cyan, Blue, and Blue-Magenta).

Color harmony will be treated as a standard classification problem using one-hot encoding.

Primary color is not so simple. Although I could treat it as a standard classification problem with twelve color classes, the colors are related. If the model chooses red for a primary color, and the actual label is red-magenta, then the model is closer than if it chose green.

Instead of a single class output, I’d like to represent each color as a 10-dimensional embedding vector. This should allow the CNN to learn associations between colors on the color wheel....in theory.
