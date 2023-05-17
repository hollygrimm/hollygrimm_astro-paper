---
pubDatetime: 2021-05-08T09:27:00Z
title: GeoMorphs Generative Art Project
postSlug: geomorphs
featured: false
draft: false
tags:
  - GenerativeAdversarialNetworks
  - StyleGAN2
  - GenerativeArt
ogImage: "/sites/default/files/inline-images/seed0727.png"
description:
  Planet Artist in Residence
---
## GeoMorphs

![GeoMorph](/sites/default/files/inline-images/seed0727.png)

GeoMorphs is a generative art project built during a [2021 Artist in Residence at Planet [medium.com]](https://medium.com/planet-stories/meet-planets-first-artist-in-residence-of-2021-holly-grimm-ab227ebdc2dd). It's a generative adversarial network (GAN) trained on [Planet [planet.com]](https://planet.com) satellite images.

My residency started with some amazing virtual interactions with the scientists and technologists at Planet. Dr. Tanya Harrison and I talked about possible art projects and her work with Mars missions. I chatted with Rob Simmon on how to take data that is difficult to understand and present it in a form that an audience can appreciate. Andrew Zolli and I discussed deforestation, planetary ethics, land stewardship, and indigenous guardianship. Ash Hoover showed me how to use machine learning to analyze floods, deforestation, wildfires, methane, ships, and building construction. Işıl Demir talked about mission control, smart automation, and ground stations. Sara Safavi showed me how to search and access Planet imagery. Orestis Herodotou talked about machine learning and art, including a work he showed at Gray Area. Dr. Ariel Zajdband showed me how to calculate different vegetation indices for determining crop health, estimating production, and precision agriculture in tropical areas. I appreciate that so many Planeteers were able to take time out of their busy schedule to meet with me.

If you are interested, I would highly recommend applying to their [Artist in Residence Program [planet.com]](https://www.planet.com/company/art/).

## Dataset

After I trained an initial model with a few thousand satellite images, I showed the Planeteers my results. Dr. Joe Kington then provided me with 190,000 Planet satellite images that were 1024x1024 in size. Planet runs a classifier originally written by [Kat Scott [twitter.com]](https://twitter.com/kscottz) on every scene they ingest. Categories are then applied to each scene based on histogram and color derived features. He selected scenes with the "interesting" class defined by scenes that were liked/favorited using Planet's internal tools. Here are some sample images:

![Planet Labs Dataset](/sites/default/files/inline-images/geomorphs_orig_ds.jpg)
*Sample images from Planet's 1024x1024 Dataset*

## Stylegan2-ada Results

![Results from StyleGAN2-ada](/sites/default/files/inline-images/stylegan2-ada_1024.jpg)
*StyleGAN2-ada Generations*

The state-of-the-art model for ["Training Generative Adversarial Networks with Limited Data [arxiv.org]"](https://arxiv.org/pdf/2006.06676v2.pdf) is [StyleGAN2-ada [github.com]](https://github.com/NVlabs/stylegan2-ada-pytorch) by Tero Karras et al. presented at NeurIPS Conference in 2020. The model trained quickly and captured complex coloration and textures. Unfortunately, it provided very little variation of form. In the image above, you can see there is a consistent diagonal from the upper right to the lower left.

I reviewed the curated example images provided by the developers of the StyleGAN2-ada model. There was only one dataset that was not aligned to facial landmarks, the BreCaHAD model. It also had a limited variation of form where the same diagonal from upper right to lower left appears:

![Results from StyleGAN2-ada BreCaHAD](/sites/default/files/inline-images/brecahad.jpg)
*StyleGAN2-ada BreCaHAD Generations*

Justin Pinkney had a [twitter post](https://twitter.com/Buntworthy/status/1353822215712759808/photo/1) discussing this issue on a StyleGAN2 model. He found that the generated flowers for his model all had "two blobs at the top and a smaller one between them". His solution is to [modify the noise tensor [twitter.com]](https://twitter.com/Buntworthy/status/1353822201858957312) in addition to the z latents.

This definitely helped the form, but I still believed the StyleGAN2-ada model was flawed as non-aligned datasets like horses and cars were not trained or highlighted by StyleGAN2-ada. Instead, I decided to train a StyleGAN2 (non-ada) model from scratch to see if I could get a wider variety of image forms.

## Final Model - StyleGAN2

![Results from StyleGAN2](/sites/default/files/inline-images/stylegan2-3497_1024.jpg)
*StyleGAN2 Generations*

I was very pleased with the variation of color, texture, and form in the [StyleGAN2 [github.com]](https://github.com/NVlabs/stylegan2) model by Tero Karras et al. trained from scratch.

Using Principal Component Analysis (PCA), you can begin to explore latent space of a model. I used [GANSpace [github.com]](https://github.com/harskish/ganspace) built by Erik Härkönen et al. to look at the different components. Here are results of adjusting component #0 for five images:

![Component 0](/sites/default/files/inline-images/c0_ipca.png)

Here are results of adjusting component #1 for five images:

![Component 1](/sites/default/files/inline-images/c1_ipca.png)

## SampleRNN

I also trained an audio model to generate low bass sounds using a [SampleRNN [github.com]](https://github.com/Unisound/SampleRNN) model designed by Mehri et al. and built by Unisound. I trained on wind, ocean, and hydrothermal recordings.

## Final Works

The final piece will be an audio reactive piece that uses the generated sound to walk through latent space. I'm using code written by Hans Brouwer for his paper [Audio-reactive Latent Interpolations with StyleGAN [github.com]](https://github.com/JCBrouwer/maua-stylegan2).

Here are the onsets from the sound I generated:

![GeoMorphs Onsets](/sites/default/files/inline-images/geomorphs_onsets_default.png)

And the chroma:

![GeoMorphs Chroma](/sites/default/files/inline-images/geomorphs_onsets_default_chroma.png)

Here is a sample of what was generated:

<div align="center" class="embed-responsive embed-responsive-16by9">
<video class="embed-responsive-item" controls="" loop=""><source src="https://arweave.net/EtFDXnfrD-Z0K4KEXE-UPSlfO5myFrrzvHLM9kXcvMQ" type="video/mp4"></source> Your browser does not support the video tag.</video></div>

I'm still working with Planet on how best to show the work in their space. Stay tuned!

## Acknowledgements

I would like to thank Orestis Herodotou, Dr. Tanya Harrison, Andrew Zolli, Joe Kington, Rob Simmon, Ash Hoover, Claire Bentley, Julie Kuschke, Sara Safavi, Işıl Demir, and Dr. Ariel Zajdband at Planet for their support on this project.