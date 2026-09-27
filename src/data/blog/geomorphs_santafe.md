---
pubDatetime: 2026-09-26T12:00:00-06:00
title: "GeoMorphs: Santa Fe"
postSlug: geomorphs_santafe
featured: false
draft: false
tags:
  - GeoMorphs
  - StyleGAN2
  - GenerativeArt
  - Planet
  - Projection
  - LightInMind
  - SantaFe
ogImage: "../../assets/geomorphs_santafe/santafe_walk_frame_30s.jpg"
description: "Returning satellite imagery of Santa Fe to a Santa Fe wall: a five-year-old StyleGAN2 trained on Planet Labs imagery, revived and pointed at the ground it will be projected onto, for Light in Mind at the Midtown Campus on October 1."
---

<video controls loop muted playsinline preload="metadata">
  <source src="/video/geomorphs_santafe_lpf_1280x720_web.mp4" type="video/mp4">
</video>

In 2021, I trained a StyleGAN2 on 190,000 satellite images flagged as _interesting_ by Planet Labs' classifier, then walked its latent space to a soundtrack generated from wind and hydrothermal recordings. The plan was to project the piece at Planet in San Francisco, but Covid ended that. You can read the [original write-up](/posts/geomorphs/).

On October 1, the piece finally goes on a physical wall, for the [Light in Mind](https://www.sciartsantafe.org/) exhibition at the Midtown Campus in Santa Fe. The venue changed what the piece needed to be. A wall in the high desert is not a gallery monitor, and projecting a random stretch of Earth onto it seemed wrong. Instead, I pointed the model at the exact ground it will be standing on.

## The Earth, returned to itself

Planet photographs the entire planet daily. In February 2021, while the initial collaboration was still active, I ordered two scenes: one covering Santa Fe and the Midtown Campus, one covering Tesuque and the foothills north of town. They sat on a hard drive for five years.

![Planet tiles of Santa Fe, February 2021](../../assets/geomorphs_santafe/santafe_planet_tiles_contact.png)

I cut these scenes into 1024-pixel tiles to match the model's training scale, selecting twelve locations in all: the campus itself, the Plaza, the foothills east of town, the high Sangre de Cristo ridges, Tesuque, and the arroyos north of the pueblo. Then I inverted each tile into the model's latent space, which means searching for the latent vector whose generated image most closely matches the real photograph.

![Real tiles and their inversions](../../assets/geomorphs_santafe/santafe_real_vs_inverted.png)

The inversions are not perfect copies. The model retains the general layout, forest masses, road corridors, and drainage, but it forgets the fine detail. The Plaza's street grid, which the model has no vocabulary for, dissolves into texture. This is the core of the piece: the real place, half-remembered by a machine that has only ever seen the Earth from orbit.

## A palette for adobe

Santa Fe was under snow the week the imagery was captured, and the campus walls where the projection will live are red. Under a projector, snow, green forest, and blue water all die on red stucco because the wall reflects almost none of that light. Only desert tones survive.

StyleGAN2 separates _what_ is in an image from _how it is colored_ across its neural layers. By keeping the Santa Fe layouts in the early layers and borrowing color layers from desert seeds, I gave the twelve locations a palette the physical wall can actually hold.

![Style mixing: Santa Fe layouts in desert colour](../../assets/geomorphs_santafe/santafe_inversion_stylemix.png)

The latent walk visits the twelve locations in a loop around the city: the campus, the east edge, the foothills, the mountains, north through Tesuque and the arroyos, and back down through the Plaza and the east mesa. The model interpolates between them, resulting in two minutes of landscapes that never existed, anchored every ten seconds by one that does.

![The twelve anchors](../../assets/geomorphs_santafe/santafe_walk_anchors_contact.png)

## Notes for the wall

Because the outdoor installation is silent, the soundtrack that drove the original piece is gone. However, its shape remains: the low-frequency envelope of the 2021 wind recordings still dictates the pacing of the visual walk.

Terrain only reads as terrain at its true aspect ratio. The shading that makes a ridge look like a ridge relies on a specific ratio of light to dark across a slope. Stretching the image to fit a wide surface breaks this illusion, turning mountains into what looks like wood grain. To solve this, the render acts as a 16:9 window panning slowly down and back up across the original square image over the two minutes, never stretched, never mirrored.

For the live part of the evening, I'll be running a small custom corner-pin mapper I wrote in Godot, since standard projection mapping software rarely supports Linux desktop environments. The mapper pins the video to any four corners, grades the color live for the wall, and saves presets. I'll share more on that build in a later post.

## Credits

Imagery: [Planet Labs PBC](https://www.planet.com), PlanetScope, 17 February 2021, used with permission for the original project. Model: StyleGAN2 (Karras et al.), trained 2021. Latent walk: built on Hans Brouwer's [maua-stylegan2](https://github.com/JCBrouwer/maua-stylegan2). Sound model (2021): SampleRNN on wind, ocean and hydrothermal recordings. Light in Mind is organized by SciArt Santa Fe, aweStruct / Brett Phares, and Morgan Bernard, who also leads the workshop.
