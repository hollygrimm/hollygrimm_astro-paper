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
ogImage: "/sites/default/files/inline-images/triadic.png"
description: Final Project Proposal and Dataset Attributes - Generative Art with Domain Knowledge
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

Barnett Newman’s _Who’s Afraid of Red, Yellow and Blue II_ has very little texture:

![Barnett Newman Who’s Afraid of Red, Yellow and Blue II](/sites/default/files/inline-images/Barnett_Newman_Whos_Afraid_of_Red_Yellow_and_Blue_II.jpg)

Whereas Konstantin Korovin’s _Paris Seine_ has a lot of texture:

![Konstantin Korovin Paris.Seine](/sites/default/files/inline-images/Konstantin_Korovin_Paris.Seine_.jpg)

### Variety of Shape (values 1-10)

Lucio Fontana’s _Concept Spatiale_ has only a few shapes:

![Lucio Fontana Concept Spatiale](/sites/default/files/inline-images/Lucio_Fontana_Concept_Spatiale.jpg)

Jean Fouquet’s _Funerals_ has a variety of different shapes:

![Jean Fouquet Funerals](/sites/default/files/inline-images/Jean_Fouquet_Funerals.jpg)

### Variety of Size (value 1-10)

Patrick Henry Bruce’s _Composition I_ has shapes that are all about same size:

![Patrick Henry Bruce Composition I](/sites/default/files/inline-images/Patrick_Henry_Bruce_Composition_I.jpg)

Volodymyr Orlovsky’s _Reaping. Hiok._ has many different sizes of shapes:

![Volodymyr Orlovsky Reaping. Hiok](/sites/default/files/inline-images/Volodymyr_Orlovsky_Reaping._Hiok.jpg)

### Contrast (value 1-10)

Tosa Mitsuoki’s _Night March of a Hundred Demons (left half)_ has low contrast:

![Tosa Mitsuoki Night March of a Hundred Demons (left half)](/sites/default/files/inline-images/Tosa_Mitsuoki_Night_March_of_a_Hundred_Demons_left_half.jpg)

Samuel Peploe’s _Still Life with Roses in a Chinese Vase_ has high contrast:

![Samuel Peploe Still Life with Roses in a Chinese Vase](/sites/default/files/inline-images/Samuel_Peploe_Still_Life_with_Roses_in_a_Chinese_Vase.jpg)

### Repetition (value 1-10)

Gene Davis’ _Homage to Dubuffet I_ has only very little repetition of shape:

![Gene Davis Homage to Dubuffet I](/sites/default/files/inline-images/Gene_Davis_Homage_to_Dubuffet_I.jpg)

Josef Albers’ _Frontal_ has a lot of repetition of shape:

![Josef Albers Frontal](/sites/default/files/inline-images/Josef_Albers_Frontal.jpg)

### Color

The primary color is selected using the Magenta, Cyan, and Yellow color chart which includes the following values: Magenta, Red-Magenta, Red, Orange, Yellow, Yellow-Green, Green, Green-Cyan, Cyan, Blue-Cyan, Blue, and Blue-Magenta.

The harmony feature can be one of six: monochromatic, analogous, complementary, split complementary, triadic, tetradic.

Hiroshige’s _Small Bird on a Branch of Kaidozakura_ is Orange/Split Complementary:

![Hiroshige Small Bird on a Branch of Kaidozakura](/sites/default/files/inline-images/Hiroshige_Small_Bird_on_a_Branch_of_Kaidozakura.jpg)

Franz Richard Unterberger's _Procession in Naples_ is Orange/Complementary:

![Franz Richard Unterberger's Procession in Naples](/sites/default/files/inline-images/Franz_Richard_Unterbergers_Procession_in_Naples.jpg)

Francisco Goya’s _Bildzyklus_ is Orange/Analogous

![Francisco Goya Bildzyklus](/sites/default/files/inline-images/Francisco_Goya_Bildzyklus.jpg)

Josef Albers’ _Frontal_ is Orange/Monochromatic:

![Josef Albers Frontal](/sites/default/files/inline-images/Josef_Albers_Frontal_0.jpg)

## Next Week

I’ll continue to label the WikiArt dataset and start training my first discriminator.
