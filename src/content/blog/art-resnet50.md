---
pubDatetime: 2018-08-12T19:43:00Z
title: Week 10 - OpenAI Project
postSlug: art-resnet50
featured: false
draft: false
tags:
  - OpenAI
  - ResNet50
  - GenerativeArt
  - ArtCompositionAttributesNetwork
ogImage: "/sites/default/files/inline-images/resnet50block_merge.png"
description:
  Finetuning ResNet50 for Art Composition Attributes
---
## Finetuning ResNet50 for Art Composition Attributes

My Deep CNN for learning painting composition attributes is based on the paper, [_Learning Photography Aesthetics with Deep CNNs_](https://arxiv.org/pdf/1707.03981.pdf) by Malu et al. For photography, they are training on the aesthetics and attribute database (AADB) which has the following attributes: Balancing Element, Content, Color Harmony, Depth of Field, Light, Object Emphasis, Rule of Thirds, and Vivid Color. The photography principles are quite different from the painting attributes that I proposed [last week](/gen-art/attributes).

The AADB database was assembled by Kong et al. for their paper, [_Photo aesthetics ranking network with attributes and content adaptation_](https://arxiv.org/abs/1606.01621). You can find the dataset on their [project webpage](https://www.ics.uci.edu/~skong2/aesthetics.html).

## ResNet50

Malu et al’s model fine-tunes a [ResNet50](https://arxiv.org/pdf/1512.03385.pdf) pretrained on the ImageNet dataset. ResNet50 is a fifty-layer deep residual network. There are 16 residual blocks. Each block has three convolution layers, followed by batch normalization, then an activation layer. Here is one block:

![ResNet50 Block](/sites/default/files/inline-images/resnet50block.png)

## ResNet50 + Merge Layer

For this model, Global Average Pooling (GAP) is applied to the ReLU output from each of the sixteen ResNet block activations, called the rectified convolution maps. e.g. “activation_46” in the graph below is used to create an “activation_46_normalization” layer:

![ResNet50 GAP](/sites/default/files/inline-images/resnet50block_merge.png)

Then, the sixteen “activation_x_normalization” outputs are concatenated and L2 normalization is applied to create a merge layer:

![ResNet50 merge activations](/sites/default/files/inline-images/resnet50block_merge_activations.png)

From the merge layer, there are seven outputs, one for each of the attributes:

![ResNet50 Merge Attributes](/sites/default/files/inline-images/resnet50block_merge_attrs.png)

## Attribute Activation Mapping

Malu et al’s paper also outlines how to perform attribute activation mapping by using the rectified convolution maps to apply a heat map which highlights elements that were activated by each attribute. I’ve haven’t yet implemented this part, although I believe that it will be extremely useful.

Here is a great article by Alexis Cook on [Global Average Pooling Layers for Object Localization](https://alexisbcook.github.io/2017/global-average-pooling-layers-for-object-localization/).

## Next Week

I’ll continue to label the WikiArt dataset with the painting attributes. I’ll post my code and some initial results from training.