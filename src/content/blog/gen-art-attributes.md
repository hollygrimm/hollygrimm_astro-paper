---
pubDatetime: 2018-08-06T09:00:00Z
title: Week 9 - OpenAI Project
postSlug: gen-art-attributes
featured: false
draft: false
tags:
  - OpenAI
  - GenerativeArt
  - ArtCompositionAttributesNetwork
  - GenerativeAdversarialNetworks
  - Discriminators
description:
  Final Project Proposal and Dataset Attributes - Generative Art with Domain Knowledge
---
## Final Project Proposal and Dataset Attributes - Generative Art with Domain Knowledge

## Introduction

As a painter and software developer interested in Machine Learning, I have trained several models on my paintings, creating complex and interesting artistic outputs from CycleGAN and Mixture Density Networks (modeling distributions of data). For my final project, I would like to expand on my generative art projects by incorporating domain knowledge based on the rules of art evaluation.

## Generative Adversarial Networks (GAN) with Multiple Discriminators

I will be using a machine learning algorithm, like CycleGAN, with multiple discriminators, to generate unique works of art. Each discriminator will consider some of the following art attributes:

- Technical Merit
- Composition
- Color
- Style

I learned this method of evaluating artworks from my fantastic art teacher in high school, Sherry Rosevear. She had us memorize three acronyms: DATE, ACT, and VCRUB. DATE means to **D**escribe, **A**nalyze, **T**ranslate, and **E**valuate. **A**nalyze is broken into **C**omposition and **T**echnical Merit. Finally, **C**omposition includes **V**ariety, **C**ontrast, **R**epetition, **U**nity, and **B**alance. I will go into more detail about these terms below.

## Dataset

The GAN dataset will be composed of my paintings and drawings.

For the specific discriminators, I will be training on Kaggle’s WikiArt "[Painter by Numbers](https://www.kaggle.com/c/painter-by-numbers/data)" dataset. All the images are protected by copyright and can be utilized only for the purposes of data mining, which constitutes a form of fair use. This week I started to label each of the WikiArt images with art attributes. I need to complete this project in four weeks by the end of August 2018, so I’ll only be able to label a subset of the 100,000 images in the dataset.

The “Style” attribute has already been captured in the WikiArt dataset, with each artwork labeled with one of 27 styles:

- Abstract_Expressionism
- Action_painting
- Analytical_Cubism
- Art_Nouveau
- Baroque
- Color_Field_Painting
- Contemporary_Realism
- Cubism
- Early_Renaissance
- Expressionism
- Fauvism
- High_Renaissance
- Impressionism
- Mannerism_Late_Renaissance
- Minimalism
- Naive_Art_Primitivism
- New_Realism
- Northern_Renaissance
- Pointillism
- Pop_Art
- Post_Impressionism
- Realism
- Rococo
- Romanticism
- Symbolism
- Synthetic_Cubism
- Ukiyo_e

Technical merit ranges from 1-10. In my opinion, most of the artworks in the WikiArt dataset have a technical merit of 10. Unity, or the elements that force you to look at the center of interest, has also been 10 for all the artworks thus far. Finally, I found most of them to be Balanced. Since the WikiArt dataset doesn’t have a wide range of values for these attributes, I’ll have to wait until I have a different dataset to train discriminators on these features.

## Attributes for Training

### Variety of Texture (values 1-10)

Barnett Newman’s *Who’s Afraid of Red, Yellow and Blue II* has very little texture:

![Barnett Newman Who’s Afraid of Red, Yellow and Blue II](/sites/default/files/inline-images/Barnett%20Newman%20Whos%20Afraid%20of%20Red%2C%20Yellow%20and%20Blue%20II.jpg)

Whereas Konstantin Korovin’s *Paris Seine* has a lot of texture:

![Konstantin Korovin Paris.Seine](/sites/default/files/inline-images/Konstantin%20Korovin%20Paris.Seine_.jpg)

### Variety of Shape (values 1-10)

Lucio Fontana’s *Concept Spatiale* has only a few shapes:

![Lucio Fontana Concept Spatiale](/sites/default/files/inline-images/Lucio%20Fontana%20Concept%20Spatiale.jpg)

Jean Fouquet’s *Funerals* has a variety of different shapes:

![Jean Fouquet Funerals](/sites/default/files/inline-images/Jean%20Fouquet%20Funerals.jpg)

### Variety of Size (value 1-10)

Patrick Henry Bruce’s *Composition I* has shapes that are all about same size:

![Patrick Henry Bruce Composition I](/sites/default/files/inline-images/Patrick%20Henry%20Bruce%20Composition%20I.jpg)

Volodymyr Orlovsky’s *Reaping. Hiok.* has many different sizes of shapes:

![Volodymyr Orlovsky Reaping. Hiok](/sites/default/files/inline-images/Volodymyr%20Orlovsky%20Reaping.%20Hiok.jpg)

### Contrast (value 1-10)

Tosa Mitsuoki’s *Night March of a Hundred Demons (left half)* has low contrast:

![Tosa Mitsuoki Night March of a Hundred Demons (left half)](/sites/default/files/inline-images/Tosa%20Mitsuoki%20Night%20March%20of%20a%20Hundred%20Demons%20%28left%20half%29.jpg)

Samuel Peploe’s *Still Life with Roses in a Chinese Vase* has high contrast:

![Samuel Peploe Still Life with Roses in a Chinese Vase](/sites/default/files/inline-images/Samuel%20Peploe%20Still%20Life%20with%20Roses%20in%20a%20Chinese%20Vase.jpg)

### Repetition (value 1-10)

Gene Davis’ *Homage to Dubuffet I* has only very little repetition of shape:

![Gene Davis Homage to Dubuffet I](/sites/default/files/inline-images/Gene%20Davis%20Homage%20to%20Dubuffet%20I.jpg)

Josef Albers’ *Frontal* has a lot of repetition of shape:

![Josef Albers Frontal](/sites/default/files/inline-images/Josef%20Albers%20Frontal.jpg)

### Color

The primary color is selected using the Magenta, Cyan, and Yellow color chart which includes the following values: Magenta, Red-Magenta, Red, Orange, Yellow, Yellow-Green, Green, Green-Cyan, Cyan, Blue-Cyan, Blue, and Blue-Magenta.

The harmony feature can be one of six: monochromatic, analogous, complementary, split complementary, triadic, tetradic.

Hiroshige’s *Small Bird on a Branch of Kaidozakura* is Orange/Split Complementary:

![Hiroshige Small Bird on a Branch of Kaidozakura](/sites/default/files/inline-images/Hiroshige%20Small%20Bird%20on%20a%20Branch%20of%20Kaidozakura.jpg)

Franz Richard Unterberger's *Procession in Naples* is Orange/Complementary:

![Franz Richard Unterberger's Procession in Naples](/sites/default/files/inline-images/Franz%20Richard%20Unterberger%27s%20Procession%20in%20Naples.jpg)

Francisco Goya’s *Bildzyklus* is Orange/Analogous

![Francisco Goya Bildzyklus](/sites/default/files/inline-images/Francisco%20Goya%20Bildzyklus.jpg)

Josef Albers’ *Frontal* is Orange/Monochromatic:

![Josef Albers Frontal](/sites/default/files/inline-images/Josef%20Albers%20Frontal_0.jpg)

## Next Week

I’ll continue to label the WikiArt dataset and start training my first discriminator.
