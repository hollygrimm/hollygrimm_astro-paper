---
pubDatetime: 2018-08-31T16:12:00Z
title: Training on Art Composition Attributes to Augment CycleGAN Art Generation
postSlug: acan_final
featured: false
draft: false
tags:
  - OpenAI
  - ArtCompositionAttributesNetwork
  - CycleGAN
  - ResNet50
  - GenerativeArt
ogImage: "/sites/default/files/inline-images/variety_texture_1_600.jpg"
description: OpenAI Scholars Final Project
---

![ACAN Final](/sites/default/files/inline-images/variety_texture_1_600.jpg)

**Abstract:** I consider how to influence CycleGAN, image-to-image translation, by using additional constraints from a neural network trained on art composition attributes. I show how I trained the the Art Composition Attributes Network (ACAN) by incorporating domain knowledge based on the rules of art evaluation and the results of applying each art composition attribute to apple2orange image translation. Finally, I show how this network may be used to generate art by applying the CycleGAN + ACAN to one of my paintings.

## 1 Introduction

CycleGAN’s image-to-image translation [[1]](#references) takes one of set of images and tries to make it look like another set of images. The training data is un-paired, meaning there doesn’t need to be an exact one-to-one match between images in the dataset. This Generative Adversarial Network has been used successfully to make horses look like zebras and apples look like oranges.

For my project, I’m augmenting the standard generator and discriminator losses of the CycleGAN with additional loss terms from a convolutional neural network trained with art composition attributes. During training of the CycleGAN, the user specifies values for each of the art composition attributes. For instance, if a target _contrast_ value of 10 is specified, the generator should output images with more contrast than if the target _contrast_ value is 1.

### 1.1 Art Composition Attributes

My art teacher, Sherry Rosevear, taught me a comprehensive method of evaluating the composition of artworks. I’ve selected eight art attributes from her technique and labeled 500 images from the WikiArt dataset [[2]](#references):

- Variety of Texture (1-10): a value of 1 for paintings with a single texture, 10 for many different textures
- Variety of Shape (1-10): a value of 1 for paintings with only a few shapes, 10 for a variety of different shapes
- Variety of Size (1-10): a value of 1 for paintings that have shapes that are all about the same size, 10 for many different sizes of shapes
- Variety of Color (1-10): a value of 1 for paintings that are monochromatic, 10 for including all the colors in the color wheel
- Contrast (1-10): a value of 1 for low contrast, 10 for high contrast
- Repetition (1-10): a value of 1 for very little repetition of shape and color, 10 for a lot of repetition of shape and color
- Primary Color (black, magenta, red-magenta, red, orange, yellow, yellow-green, green, green-cyan, cyan, blue-cyan, blue, and blue-magenta)
- Color Harmony (monochromatic, analogous, complementary, split complementary, triadic, tetradic)

Here are some examples of low and high values of each attribute in WikiArt dataset:

| Texture:1&nbsp;&nbsp;&nbsp;                                                                                                                             | Shape:1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                      | Size:1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                       | Color:1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                      | Contrast:1&nbsp;&nbsp;                                                                                                                                         | Repetition:1                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| ![Barnett Newman Whos Afraid of Red, Yellow and Blue II](/sites/default/files/inline-images/Barnett_Newman_Whos_Afraid_of_Red_Yellow_and_Blue_II_0.jpg) | ![Lucio Fontana Concept Spatiale](/sites/default/files/inline-images/Lucio_Fontana_Concept_Spatiale_0.jpg) | ![Patrick Henry Bruce Composition I](/sites/default/files/inline-images/Patrick_Henry_Bruce_Composition_I_0.jpg) | ![Variety Color 1](/sites/default/files/inline-images/variety_color_1.jpg) | ![Tosa Mitsuoki Night March of a Hundred Demons (left half)](/sites/default/files/inline-images/Tosa_Mitsuoki_Night_March_of_a_Hundred_Demons_left_half_0.jpg) | ![Gene Davis Homage to Dubuffet I](/sites/default/files/inline-images/Gene_Davis_Homage_to_Dubuffet_I_0.jpg) |

| Texture:10&nbsp;&nbsp;&nbsp;                                                                                | Shape:10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                   | Size:10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                     | Color:10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                       | Contrast:10&nbsp;&nbsp;                                                                                                                                   | Repetition:10                                                                          |
| ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| ![Konstantin Korovin Paris.Seine](/sites/default/files/inline-images/Konstantin_Korovin_Paris.Seine__0.jpg) | ![Jean Fouquet Funerals](/sites/default/files/inline-images/Jean_Fouquet_Funerals_0.jpg) | ![Patrick Henry Bruce Composition I](/sites/default/files/inline-images/Volodymyr_Orlovsky_Reaping._Hiok_0.jpg) | ![Variety Color 10](/sites/default/files/inline-images/variety_color_10.jpg) | ![Samuel Peploe Still Life with Roses in a Chinese Vase"](/sites/default/files/inline-images/Samuel_Peploe_Still_Life_with_Roses_in_a_Chinese_Vase_0.jpg) | ![Josef Albers Frontal](/sites/default/files/inline-images/Josef_Albers_Frontal_1.jpg) |

### 1.2 Primary Color

When I select colors for my paintings, I prefer to use the cyan, magenta, and yellow (CMY) color wheel instead of the one with red, blue, and yellow primary colors. I like that the CMY color wheel includes more modern colors like magenta and cyan. Also, it aligns better with most printer color models.

![Color Wheel](/sites/default/files/inline-images/color_wheel.png)

Here are some images from the WikiArt dataset labeled with the primary color in each painting:

| Red&nbsp;&nbsp;&nbsp;                                    | Orange                                                         | Yellow                                                         | Green-Yellow                                                               | Green&nbsp;                                                  | Green-Cyan                                                             |
| -------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------- |
| ![Red](/sites/default/files/inline-images/color_red.jpg) | ![Orange](/sites/default/files/inline-images/color_orange.jpg) | ![Yellow](/sites/default/files/inline-images/color_yellow.jpg) | ![Green Yellow](/sites/default/files/inline-images/color_green-yellow.jpg) | ![Green](/sites/default/files/inline-images/color_green.jpg) | ![Green-Cyan](/sites/default/files/inline-images/color_green-cyan.jpg) |

| Cyan&nbsp;&nbsp;&nbsp;                                     | Cyan-Blue&nbsp;&nbsp;&nbsp;                                          | Blue&nbsp;&nbsp;&nbsp;                                     | Blue-Magenta                                                               | Magenta                                                          | Red-Magenta                                                              |
| ---------------------------------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------ |
| ![Cyan](/sites/default/files/inline-images/color_cyan.jpg) | ![cyan-blue](/sites/default/files/inline-images/color_blue-cyan.jpg) | ![Blue](/sites/default/files/inline-images/color_blue.jpg) | ![Blue Magenta](/sites/default/files/inline-images/color_blue-magenta.jpg) | ![Magenta](/sites/default/files/inline-images/color_magenta.jpg) | ![Red-magenta](/sites/default/files/inline-images/color_red-magenta.jpg) |

### 1.3 Color Harmony

Here are examples from the WikiArt dataset for each color harmony with orange as the primary color:

| Monochromatic                                                                                                                                                      | Analogous&nbsp;&nbsp;&nbsp;&nbsp;                                                                                                                                    | Complementary                                                                                                                                                                                                            | Split Comp.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                                                                                                                          | Triadic&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                                       | Tetradic&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| ![Monochromatic](/sites/default/files/inline-images/monochromatic.png)<br />![Josef Albers Frontal](/sites/default/files/inline-images/Josef_Albers_Frontal_2.jpg) | ![Analogous](/sites/default/files/inline-images/analogous.png)<br />![Francisco Goya Bildzyklus](/sites/default/files/inline-images/Francisco_Goya_Bildzyklus_0.jpg) | ![Complementary](/sites/default/files/inline-images/complementary.png)<br />![Hiroshige Small Bird on a Branch of Kaidozakura](/sites/default/files/inline-images/Franz_Richard_Unterbergers_Procession_in_Naples_0.jpg) | ![Split-Complementary](/sites/default/files/inline-images/split-complementary.png)<br />![Hiroshige Small Bird on a Branch of Kaidozakura](/sites/default/files/inline-images/Hiroshige_Small_Bird_on_a_Branch_of_Kaidozakura_0.jpg) | ![Triadic](/sites/default/files/inline-images/triadic.png)<br />![Triadic](/sites/default/files/inline-images/orange-triadic.jpg) | ![Tetradic](/sites/default/files/inline-images/tetradic.png)<br />![Tetradic](/sites/default/files/inline-images/orange-tetradic.jpg) |

More details about art composition attributes can be found on my [Week 9 blog post](/gen-art/attributes).

## 2 Related Work

### 2.1 Perceptual Loss Functions

Using different loss functions in art generation was done in the paper by Johnson et al, _Perceptual Losses for Real-Time Style Transfer and Super-Resolution_ [[4](#references)].

In the paper, Johnson et al replaced the standard per-pixel loss function in a style transfer model with perceptual loss functions. These loss functions were based on the high-level image features extracted from pre-trained CNNs. The perceptual information had already been encoded in these networks and they were used to create high-quality images.

### 2.2 Learning Photography Aesthetics with Deep CNNs

My deep CNN for learning painting composition attributes is based on the paper, _Learning Photography Aesthetics with Deep CNNs_ by Malu et al [[5](#references)]. For photography, they are training on the aesthetics and attribute database (AADB) which has the following attributes: Balancing Element, Content, Color Harmony, Depth of Field, Light, Object Emphasis, Rule of Thirds, and Vivid Color. The photography principles are quite different from the painting attributes that I’m training on.

## 3 Method

### 3.1 Art Composition Attributes Network (ACAN)

**Code.** I have made my code for this network publicly available here: [https://github.com/hollygrimm/art-composition-cnn](https://github.com/hollygrimm/art-composition-cnn). Details on how I added multiple outputs to a Keras ResNet50 model can be found in my [Week 11 blog post](/resnet50_multipleoutputs)

**Inputs.** Five hundred WikiArt 256x256x3 pixel images labeled with eight attributes. Six of the attributes, _variety of texture_, _variety of shape_, _variety of size_, _variety of color_, _contrast_, and _repetition_, have numerical values between 1 and 10. The other two attributes are _primary color_ composed of 13 classes and _color harmony_ which has 6 classes.

**Model.** Fine tuning of a ResNet50 [[3](#references)] pretrained on the ImageNet dataset. ResNet50 is a fifty-layer deep residual network. There are 16 residual blocks. Each block has three convolution layers, followed by batch normalization, then an activation layer.

Global Average Pooling (GAP) is applied to the ReLU output from each of the sixteen ResNet block activations, called the rectified convolution maps.

The sixteen GAP outputs are concatenated and L2 normalization is applied to create a merge layer. From the merge layer, there are eight outputs, one for each of the attributes.

![ResNet50 ACAN](/sites/default/files/inline-images/resnet50_acan.png)

More details about how I added Globabl Average Pooling to ResNet50 can be found on my [Week 10 blog post](/art-resnet50).

**Loss Weights.** I’m training on a total of eight art attributes. The six numerical values use mean squared error to calculate loss, while the two categorical attributes use categorical cross-entropy.

My first training run found that the model was not learning the _repetition_ value after 200 epochs. It’s validation loss was steadily increasing, although I was able to get some good training results from the other art attributes: _variety in size_, _variety in shape_, and _variety in texture_.

After doing some research, I read that losses from categorical cross-entropy are often higher than those from mean squared error. To remedy this, you can modify the loss weights across the different attribute types and thus help balance contributions of each of the losses.

After my initial training, I found that losses from categorical cross-entropy (_color harmony_ and _primary color_) were typically seven times higher than those from mean squared error. As a result, I retrained with several categorical attribute loss weights lambda_categorical = [.85, .7, .5, .3] leaving the numerical attribute loss weights the same at 1.0.

By lowering the categorical weights to .7 and training for 1000 epochs, validation losses on the _repetition_ attribute were very good. _Primary color_ losses were better than the .5 loss weights, but not as good as the original 1.0 loss weights.

Training loss charts for _repetition_ and _primary color_ can be found on my [Week 12 blog post](/resnet50_lossweights).

### 3.2 CycleGAN + ACAN

**Code.** I have made my code for this network publicly available here: [https://github.com/hollygrimm/cyclegan-keras-art-attrs](https://github.com/hollygrimm/cyclegan-keras-art-attrs)

**Inputs.** Two sets of images for image-to-image translation, I provide a download script for the standard CycleGAN image sets (apple2orange, summer2winter_yosemite, horse2zebra, monet2photo, etc.)

In addition, target values are selected for each of the art composition attributes.

**Discriminator Loss.** If the discriminator is passed a fake image, it should output a 0. The discriminator loss is the difference between the output of the discriminator and the actual label of the image. I used a discriminator loss weight of 1.0.

![Discriminator Loss](/sites/default/files/inline-images/discriminator_loss.png)

**Cycle-Consistency Loss.** Cycle-Consistency Loss is the difference between the real apple image and the reconstructed apple image after it’s been transformed by the apple2orange generator, then the orange2apple generator. For this loss, I used a loss weight of 1.0.

![Cycle-Consistency Loss](/sites/default/files/inline-images/cycle-consistency_loss.png)

**Identity Loss.** Identity loss is calculated by running a real orange image through the apple2orange generator and seeing how close the output is to the input. I used a loss weight of .1 for this loss.

![Identity Loss](/sites/default/files/inline-images/identityloss.png)

**Art Composition Attributes Network (ACAN) Loss.** A series of eight losses are generated when the translated image is passed through the ACAN with eight target values. The difference between these target values and the values output by the network are the attribute losses. In the examples below, the loss weight is 10.0.

![ACAN Loss](/sites/default/files/inline-images/artattributesloss.png)

## 4 Results

Below are the results of running the CycleGAN training with the ACAN. Each art composition attribute below was run with a loss weight of 10.0, along with a low value of 1 or a high value of 10. The output image is either the translated or reconstructed version from the CycleGAN:

![cyclegan](/sites/default/files/inline-images/CycleGAN.png)

### 4.1 Variety of Texture

| This pair is an example of setting _variety of texture_ to the lowest value of 1. The texture of the reconstructed version (right) has very soft texture, like an oil painting. | ![Original Apple](/sites/default/files/inline-images/apple-fruit-healthy-8208_600.jpg) | ![Variety of Texture Low](/sites/default/files/inline-images/variety_texture_1_600.jpg) |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |

| The reconstructed image here was generated with a value 10 for a high _variety of texture_. As a result, the texture of the apple skin has been enhanced. | ![Original Apple](/sites/default/files/inline-images/apple-fruit-healthy-8208_600.jpg) | ![Variety of Texture High](/sites/default/files/inline-images/variety_texture_10_600.jpg) |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |

### 4.2 Variety of Shape

| By setting the _variety of shape_ to the lowest value of 1, the network has abstracted the reconstructed version (right) into some flat orange shapes. | ![Original Orange](/sites/default/files/inline-images/beverage-citrus-close-up-1536869_600.jpg) | ![Variety of Shape Low](/sites/default/files/inline-images/variety_shape_1_600.jpg) |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |

| Setting the value of _variety of shape_ to a high value of 10, the reconstructed version has highlighted many distinct shapes within the image. | ![Original Orange](/sites/default/files/inline-images/beverage-citrus-close-up-1536869_600.jpg) | ![Variety of Shape High](/sites/default/files/inline-images/variety_shape_10_600.jpg) |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |

### 4.3 Variety of Size

| With a low value for _variety of size_, the reconstructed version has limited the size of shapes to only a few. | ![Original Apples](/sites/default/files/inline-images/apple-branch-crop-635705_600.jpg) | ![Variety of Size Low](/sites/default/files/inline-images/variety_size_1_600.jpg) |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |

| The translated version, set to a high _variety of size_, has found some smaller details to highlight, in addition to the larger shapes. | ![Original Apple Image](/sites/default/files/inline-images/apple-branch-crop-635705_600_0.jpg) | ![Variety of Size High](/sites/default/files/inline-images/variety_size_10_600.jpg) |
| --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |

### 4.4 Variety of Color

| When setting _variety of color_ to a low value, the reconstructed version has been transformed into a monochromatic image with all reds. | ![Original Apple](/sites/default/files/inline-images/apple-fruit-healthy-8208_600.jpg) | ![Variety of Color 1](/sites/default/files/inline-images/variety_color_1_600.jpg) |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |

| The translated image, with a setting for a high _variety of color_, has included bright blues, reds and yellow-greens. | ![Original Apple](/sites/default/files/inline-images/apple-fruit-healthy-8208_600.jpg) | ![Variety of Color 10](/sites/default/files/inline-images/variety_color_10_2_600.jpg) |
| ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |

### 4.5 Contrast

| Training on low _contrast_, the reconstructed version has flattened the background and lightened the entire apple. | ![Original Apple](/sites/default/files/inline-images/apple-fruit-healthy-8208_600.jpg) | ![Contrast 1](/sites/default/files/inline-images/contrast_1_600.jpg) |
| ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |

| Training on high _contrast_, the reconstructed version has darkened the shadows and highlighted parts of the apple and background. | ![Original Apple](/sites/default/files/inline-images/apple-fruit-healthy-8208_600.jpg) | ![Contrast 10](/sites/default/files/inline-images/contrast_10_600_0.jpg) |
| ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |

### 4.6 Repetition

| The reconstructed image on the right is an example of training with low _repetition_ of form, color, and texture where these attributes have been abstracted. | ![Original Apple](/sites/default/files/inline-images/apple-fruit-healthy-8208_600.jpg) | ![Repetition 1](/sites/default/files/inline-images/repetition_1_600.jpg) |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |

| The reconstructed image here was trained with a high value for _repetition_ of form, color, and texture. The same textures, colors, and forms have been repeated throughout the whole image. | ![Original Apple](/sites/default/files/inline-images/apple-fruit-healthy-8208_600.jpg) | ![Repetition 10](/sites/default/files/inline-images/repetition_10_600.jpg) |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |

### 4.7 Primary Color

| The reconstructed image has added some areas of the target color, blue cyan. | ![Original Orange Image](/sites/default/files/inline-images/beverage-citrus-close-up-1536869_600_0.jpg) | ![Blue Cyan](/sites/default/files/inline-images/blue_cyan_600.jpg) |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| Here, the reconstructed image was changed to the target color of yellow.     | ![Original Apple Image](/sites/default/files/inline-images/apple-fruit-healthy-8208_600.jpg)            | ![Yellow](/sites/default/files/inline-images/yellow_600.jpg)       |

### 4.8 Color Harmony

| The translated image, with a _primary color_ of orange, has included the analogous colors of yellow, red, and green-yellow. | ![Original Apple Image](/sites/default/files/inline-images/apple-fruit-healthy-8208_600.jpg) | ![Analogous Color Harmony](/sites/default/files/inline-images/analogous_600_0.jpg)       |
| --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| The translated image, also with a _primary color_ of orange, has a patch of the complementary color of blue-cyan.           | ![Original Apple Image](/sites/default/files/inline-images/apple-fruit-healthy-8208_600.jpg) | ![Complementary Color Harmony](/sites/default/files/inline-images/complementary_600.jpg) |
| The translated image is now almost all one color, red.                                                                      | ![Original Apple Image](/sites/default/files/inline-images/apple-fruit-healthy-8208_600.jpg) | ![Monochromatic Color Harmony](/sites/default/files/inline-images/monochromatic_600.jpg) |

### 4.9 Art Generation

Below is the result of using the CycleGAN + ACAN. I input CelebA [[6](#references)] images for one dataset, and my paintings for the second dataset. All the art composition attributes were set to value 5, primary color to orange, and color harmony to analogous:

![Face 2 Painting](/sites/default/files/inline-images/face2painting.png)

## 5 Conclusion

Even with a small sample size of 500 images, the CycleGAN with help from the ACAN appears to have been able to distinguish between eight art compositional attributes.

## 6 Next Steps

I will run some additional experiments by transforming my paintings though CycleGAN + ACAN with different settings.

### 6.1 Attribute Activation Mapping

Malu et al’s paper [[5](#references)] outlines how to perform attribute activation mapping by using the rectified convolution maps to apply a heat map which highlights elements that were activated by each attribute. It will be extremely useful to see what the network “sees” for these attributes.

### 6.2 Color and Color Harmony Embeddings

Primary color and color harmony have associations between their classes. If the model chooses red for a primary color, and the actual label is red-magenta, then the model is closer than if it chose green. I’d like to represent each color and color harmony as a 10-dimensional embedding vector. This should allow the CNN to learn associations between colors on the color wheel.

## Thank you!

Thank you to OpenAI for allowing me to jump-start my career in Machine Learning with the OpenAI Scholars program. I was very appreciative of the weekly support I received from my mentor, Christy Dennison from OpenAI. Larissa Schiavo, the program manager at OpenAI, was great in providing us the tools needed to be successful during the program.

I'd also like to thank my fellow Scholars, Christine Payne, Dolapo Martins, Hannah Davis, Ifu Aniemeka, Munashe Shumba, Nadja Rhodes, and Sophia Arakelyan for their inspiring projects and helpful suggestions.

Thank you to Josh Achiam, OpenAI, for reviewing my final project and providing suggestions and Jack Clark, OpenAI, for help on writing tools.

## References

1. Zhu et al, _Unpaired Image-to-Image Translation using Cycle-Consistent Adversarial Networks_ [https://arxiv.org/pdf/1703.10593.pdf](https://arxiv.org/pdf/1703.10593.pdf)
2. Kaggle’s WikiArt "Painter by Numbers" dataset [https://www.kaggle.com/c/painter-by-numbers/data](https://www.kaggle.com/c/painter-by-numbers/data)
3. He et al, _Deep Residual Learning for Image Recognition_ [https://arxiv.org/pdf/1512.03385.pdf](https://arxiv.org/pdf/1512.03385.pdf)
4. Johnson et al, _Perceptual Losses for Real-Time Style Transfer and Super-Resolution_ [https://arxiv.org/pdf/1603.08155.pdf](https://arxiv.org/pdf/1603.08155.pdf)
5. Malu et al, _Learning Photography Aesthetics with Deep CNNs_ [https://arxiv.org/pdf/1707.03981.pdf](https://arxiv.org/pdf/1707.03981.pdf)
6. CelebA Dataset [http://mmlab.ie.cuhk.edu.hk/projects/CelebA.html](http://mmlab.ie.cuhk.edu.hk/projects/CelebA.html)
