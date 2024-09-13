---
pubDatetime: 2019-09-01T16:12:00Z
title: Subtle Bodies
postSlug: subtle_bodies
featured: false
draft: false
tags:
  - GAN
  - GenerativeArt
ogImage: "/sites/default/files/styles/large/public/2019-09/untitled_green_2014-01-25_305001.jpg"
description: Translation from landscape paintings to figurative watercolors using U-GAT-IT
---

## Translation from landscape paintings to figurative watercolors using U-GAT-IT

"Subtle Bodies" is a series of AI-generated artworks that mimic my figurative watercolors. The figures were generated from my landscape paintings using image-to-image translation, thus finding the subtle body within the landscape.

My [previous work](/acan_final) with image-to-image translation involved modifying textures and art attributes, but lacked form modification. My [paper](https://arxiv.org/abs/1812.07710) on this work was selected for poster presentation in the NeurIPS Machine Learning for Creativity and Design Workshop in 2018. Those works were shown in a solo show in Santa Fe December 2018 and online at [http://www.aiartonline.com/art/holly-grimm/](http://www.aiartonline.com/art/holly-grimm/).

By using a new framework, U-GAT-IT, the model was able to make geometric changes to the form, such that the original landscape was unrecognizable in the new image. [U-GAT-IT](https://github.com/taki0112/UGATIT) by J. Kim et al (2019), is a modification of a GAN (Generative Adversarial Network) for image-to-image translation on shapes as well as textures within the same model. It adds another layer from a CNN which weights the importance of each feature map.

I trained U-GAT-IT on two datasets: my abstract landscape paintings and watercolor life drawings. The resulting model was able to "extract" a figure from a landscape painting and apply a watercolor style.

AI Disclaimer: Although these images were created by an AI, the above text was wholly human sourced and does not necessarily reflect the AI's opinion.

Here are six samples of input paintings and output figurative watercolors:

| Magma Plume&nbsp;&nbsp;                                                                                            | Jungle Theorem                                                                                                 | Loretto Morning                                                                                                  | Rose Garden&nbsp;                                                                                           | SF Train Station                                                                                                  | Perseus Rumble                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| ![magma plume](/sites/default/files/inline-images/painting_2017-08-12_magma_plume_768.jpg)                         | ![Jungle Theorem](/sites/default/files/inline-images/pa_2016-11-19_jungletheorem.jpg)                          | ![Loretto Morning](/sites/default/files/inline-images/pa_2016-05-13_loretto_morning.jpg)                         | ![Rose Garden](/sites/default/files/inline-images/pa_2017-06-27_rosegarden.jpg)                             | ![SF Train Station](/sites/default/files/inline-images/pa_2016-06-04_sf_train_station.jpg)                        | ![Perseus Rumble](/sites/default/files/inline-images/painting_2017-07-25_Perseus_Rumble.jpg)                             |
| ![magma plume 305001](/sites/default/files/styles/large/public/2019-09/painting_2017-08-12_magma_plume_305001.jpg) | ![power surge 305001](/sites/default/files/styles/large/public/2019-09/pa_2016-11-19_jungletheorem_305001.jpg) | ![power surge 305001](/sites/default/files/styles/large/public/2019-09/pa_2016-05-13_loretto_morning_305001.jpg) | ![power surge 305001](/sites/default/files/styles/large/public/2019-09/pa_2017-06-27_rosegarden_305001.jpg) | ![power surge 305001](/sites/default/files/styles/large/public/2019-09/pa_2016-06-04_sf_train_station_305001.jpg) | ![perseus rumble 305001](/sites/default/files/styles/large/public/2019-09/painting_2017-07-25_Perseus_Rumble_305001.jpg) |

Full results:

![Untitled (Green) - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/untitled_green_2014-01-25_305001.jpg)

![Untitled (Blue) - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/untitled_blue_2014-01-14_305001.jpg)

![Untitled (2014-10-28) - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/untitled_2014-10-28_305001.jpg)

![Untitled (2014-03-29) - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/untitled_2014-03-29_v2_305001.jpg)

![Splash - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/splash_2015-04-22_1_305001.jpg)

![Rail Buster - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/painting_railbuster_305001.jpg)

![Nymph's Choice - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/painting_nymphschoice_305001.jpg)

![Lazy Hero - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/painting_lazyhero_305001.jpg)

![Kinch Motor - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/painting_kinchmotor_305001.jpg)

![Sonder Phase - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/painting_2018-18-10_sonderphase_305001.jpg)

![Power Surge - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/painting_2017-09-26_powersurge_305001.jpg)

![Magma Plume - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/painting_2017-08-12_magma_plume_305001.jpg)

![Perseus Rumble - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/painting_2017-07-25_Perseus_Rumble_305001.jpg)

![Nimble Tau - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/painting_2017-07-25_Nimble_Tau_305001.jpg)

![Cochabamba Bazaar - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/painting_2017-04-29_cochabambabazaar_305001.jpg)

![Great Barrier Niche - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/painting_2017-04-27_greatbarrierniche_305001.jpg)

![Japanese Garden - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/painting_2016-11-21_japanesegarden_305001.jpg)

![Van Allen Effect - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/painting_2016-11-20_vanalleneffect_305001.jpg)

![Sparrow's Delight - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/painting_2016-11-18_sparrowsdelight_305001.jpg)

![Monstrodome - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/painting_2016-07-01_monstrodome_305001.jpg)

![Chenrezig - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/pa_chenrezig_2016-11-28_305001.jpg)

![Rose Garden - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/pa_2017-06-27_rosegarden_305001.jpg)

![Aspen Vista - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/pa_2017-03-01_aspenvista_305001.jpg)

![Jungle Theorem - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/pa_2016-11-19_jungletheorem_305001.jpg)

![June Virga - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/pa_2016-06-09_june_virga_305001.jpg)

![SF Train Station - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/pa_2016-06-04_sf_train_station_305001.jpg)

![Loretto Morning - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/pa_2016-05-13_loretto_morning_305001.jpg)

![La Fonda - AI Generated- 305001](/sites/default/files/styles/large/public/2019-09/pa_2016-05-10_lafonda_305001.jpg)

![Pilar - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/pa_2016-04-10_pilar_305001.jpg)

![Silvia Sunset - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/pa_2016-04-02_silviasunset_305001.jpg)

![Nambe - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/pa_2016-01-23_nambe_305001.jpg)

![SF Canyon Preserve - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/pa_2014-09-04_sf_canyon_preserve_305001.jpg)

![Big Tesuque 2 - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/pa_2014-06-26_big_tesuque_2_305001.jpg)
