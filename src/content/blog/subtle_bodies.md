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
description:
  Translation from landscape paintings to figurative watercolors using U-GAT-IT
---
## _Translation from landscape paintings to figurative watercolors using U-GAT-IT_

"Subtle Bodies" is a series of AI-generated artworks that mimic my figurative watercolors. The figures were generated from my landscape paintings using image-to-image translation, thus finding the subtle body within the landscape.

My [previous work](/acan_final) with image-to-image translation involved modifying textures and art attributes, but lacked form modification. My [paper](https://arxiv.org/abs/1812.07710) on this work was selected for poster presentation in the NeurIPS Machine Learning for Creativity and Design Workshop in 2018. Those works were shown in a solo show in Santa Fe December 2018 and online at [http://www.aiartonline.com/art/holly-grimm/](http://www.aiartonline.com/art/holly-grimm/).

By using a new framework, U-GAT-IT, the model was able to make geometric changes to the form, such that the original landscape was unrecognizable in the new image. [U-GAT-IT](https://github.com/taki0112/UGATIT) by J. Kim et al (2019), is a modification of a GAN (Generative Adversarial Network) for image-to-image translation on shapes as well as textures within the same model. It adds another layer from a CNN which weights the importance of each feature map.

I trained U-GAT-IT on two datasets: my abstract landscape paintings and watercolor life drawings. The resulting model was able to "extract" a figure from a landscape painting and apply a watercolor style.

AI Disclaimer: Although these images were created by an AI, the above text was wholly human sourced and does not necessarily reflect the AI's opinion.

Here are six samples of input paintings and output figurative watercolors:

|Magma Plume|Jungle Theorem|Loretto Morning|Rose Garden|SF Train Station|Perseus Rumble|
|--- |--- |--- |--- |--- |--- |
|![magma plume](/sites/default/files/inline-images/painting_2017-08-12_magma_plume_768.jpg)|![Jungle Theorem](/sites/default/files/inline-images/pa_2016-11-19_jungletheorem.jpg)|![Loretto Morning](/sites/default/files/inline-images/pa_2016-05-13_loretto_morning.jpg)|![Rose Garden](/sites/default/files/inline-images/pa_2017-06-27_rosegarden.jpg)|![SF Train Station](/sites/default/files/inline-images/pa_2016-06-04_sf_train_station.jpg)|![Perseus Rumble](/sites/default/files/inline-images/painting_2017-07-25_Perseus_Rumble.jpg)|
|![magma plume 305001](/sites/default/files/styles/large/public/2019-09/painting_2017-08-12_magma_plume_305001.jpg)|![power surge 305001](/sites/default/files/styles/large/public/2019-09/pa_2016-11-19_jungletheorem_305001.jpg)|![power surge 305001](/sites/default/files/styles/large/public/2019-09/pa_2016-05-13_loretto_morning_305001.jpg)|![power surge 305001](/sites/default/files/styles/large/public/2019-09/pa_2017-06-27_rosegarden_305001.jpg)|![power surge 305001](/sites/default/files/styles/large/public/2019-09/pa_2016-06-04_sf_train_station_305001.jpg)|![perseus rumble 305001](/sites/default/files/styles/large/public/2019-09/painting_2017-07-25_Perseus_Rumble_305001.jpg)|

Full results:

![Untitled (Green) - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/untitled_green_2014-01-25_305001.jpg?itok=oOe-zUoH)

![Untitled (Blue) - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/untitled_blue_2014-01-14_305001.jpg?itok=qFS9xqo5)

![Untitled (2014-10-28) - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/untitled_2014-10-28_305001.jpg?itok=U2jDx0D3)

![Untitled (2014-03-29) - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/untitled_2014-03-29_v2_305001.jpg?itok=pvYki9m6)

![Splash - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/splash_2015-04-22_1_305001.jpg?itok=dADrF1Jz)

![Rail Buster - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/painting_railbuster_305001.jpg?itok=ucmQZnib)

![Nymph's Choice - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/painting_nymphschoice_305001.jpg?itok=EZRZ9BP6)

![Lazy Hero - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/painting_lazyhero_305001.jpg?itok=FKWDdb1i)

![Kinch Motor - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/painting_kinchmotor_305001.jpg?itok=ZcoRayEh)

![Sonder Phase - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/painting_2018-18-10_sonderphase_305001.jpg?itok=GUrJH2r2)

![Power Surge - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/painting_2017-09-26_powersurge_305001.jpg?itok=OH3pATJ2)

![Magma Plume - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/painting_2017-08-12_magma_plume_305001.jpg?itok=jJoE86hy)

![Perseus Rumble - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/painting_2017-07-25_Perseus_Rumble_305001.jpg?itok=LQhND8OR)

![Nimble Tau - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/painting_2017-07-25_Nimble_Tau_305001.jpg?itok=mFHcvzZe)

![Cochabamba Bazaar - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/painting_2017-04-29_cochabambabazaar_305001.jpg?itok=60VhabSn)

![Great Barrier Niche - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/painting_2017-04-27_greatbarrierniche_305001.jpg?itok=XlsOIk8A)

![Japanese Garden - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/painting_2016-11-21_japanesegarden_305001.jpg?itok=F3fm0X9M)

![Van Allen Effect - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/painting_2016-11-20_vanalleneffect_305001.jpg?itok=RlTseGR8)

![Sparrow's Delight - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/painting_2016-11-18_sparrowsdelight_305001.jpg?itok=ZwHkvxuR)

![Monstrodome - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/painting_2016-07-01_monstrodome_305001.jpg?itok=uj44z17t)

![Chenrezig - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/pa_chenrezig_2016-11-28_305001.jpg?itok=ZXIYdA7I)

![Rose Garden - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/pa_2017-06-27_rosegarden_305001.jpg?itok=LDHnRUhd)

![Aspen Vista - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/pa_2017-03-01_aspenvista_305001.jpg?itok=GlfOWhXw)

![Jungle Theorem - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/pa_2016-11-19_jungletheorem_305001.jpg?itok=Ae88B_9m)

![June Virga - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/pa_2016-06-09_june%20virga_305001.jpg?itok=FJ0D60Xe)

![SF Train Station - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/pa_2016-06-04_sf_train_station_305001.jpg?itok=_-fi1vzy)

![Loretto Morning - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/pa_2016-05-13_loretto_morning_305001.jpg?itok=n73urJ8I)

![La Fonda - AI Generated- 305001](/sites/default/files/styles/large/public/2019-09/pa_2016-05-10_lafonda_305001.jpg?itok=C6xcwZxe)

![Pilar - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/pa_2016-04-10_pilar_305001.jpg?itok=mG90zQ8R)

![Silvia Sunset - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/pa_2016-04-02_silviasunset_305001.jpg?itok=OTAzXEA5)

![Nambe - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/pa_2016-01-23_nambe_305001.jpg?itok=w1ESNqoD)

![SF Canyon Preserve - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/pa_2014-09-04_sf_canyon_preserve_305001.jpg?itok=wMFpeNNu)

![Big Tesuque 2 - AI Generated - 305001](/sites/default/files/styles/large/public/2019-09/pa_2014-06-26_big_tesuque_2_305001.jpg?itok=VaMEooCx)
