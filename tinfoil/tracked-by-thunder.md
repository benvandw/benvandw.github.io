---
layout: post
title: "Tinfoil Files #001 — Tracked by Thunder"
date: 2026-08-11
description: Your livestream microphone may be recording a surprisingly useful location signal.
categories:
  - tinfoil-files
tags:
  - geolocation
  - osint
  - acoustics
  - lightning
  - side-channels
---


**TL;DR:** A thunderstorm can accidentally give away more location information than you might expect.

If you're watching a livestream during a storm, the microphone may be recording something the streamer never intended to publish as a location signal: **thunder**. Public Lightning strike data and some data analysis can figure out more than you think.

# The basic idea

Lightning is already a remarkably well-observed phenomenon.

Lightning-location networks can determine when and where electrical discharges occurred by measuring the radio-frequency signals produced by lightning at multiple receivers. Systems such as Blitzortung make lightning observations available through distributed receiver networks, while the World Wide Lightning Location Network (WWLLN) has operated a global lightning detection network since 2004.

At the same time, thunder is not simply random noise.

Researchers have demonstrated that acoustic arrays can locate thunder sources from the timing and direction of the sound. One study of triggered lightning used acoustic measurements between 3.3 and 500 Hz and compared the resulting thunder locations against a Lightning Mapping Array. For nearby sources, the researchers achieved sub-kilometre-scale localization.

So we have two things:

1. **A database that knows where lightning happened.**
2. **A recording that contains the sound produced by that lightning.**

That is where this gets interesting.

## This is reality

The underlying science is well established.

Acoustic localization of thunder has been demonstrated experimentally. In 2011, researchers used acoustic arrays to locate thunder produced by triggered lightning and compared the results with a Lightning Mapping Array.

More recently, researchers demonstrated three-dimensional thunder-source localization using distributed acoustic sensing on a 7.7 km telecommunications fibre cable, treating thousands of points along the fibre as sensors.

Lightning itself is also routinely geolocated. Distributed lightning networks measure the electromagnetic signatures produced by lightning and use timing and direction information to determine where discharges occurred.

Just the other day Youtuber Colsto published a video where they put this idea into practice, This was what inspired me to do this writeup

<p align="center"><img src="/assets/img/Colsto-Thunder1.jpg" alt="Colsto(YT)'s Video excerpt geolocating thunder'" class="footer-img"></p>

The interesting question is:

> **"How much location information can an ordinary recording leak when its environmental audio is correlated with external datasets?"**

That's the Tinfoil Files question.

## The important caveat

I would **not** claim that every livestream can simply be dropped into a lightning database and instantly geolocated.

Real-world accuracy depends on things such as:

- microphone quality,
- compression,
- background noise,
- whether the thunder is actually audible,
- the distance to the lightning,
- timing accuracy,
- how many independent events are available.

## Tinfoil rating

**4/5 — Uncomfortable**

The individual components are established scientific techniques.

The interesting security leap is combining them.
Sometimes the information you leak is something that happened around you.

Check out the original video from Colsto where they unpack a bit more of the science and did the Mahi to establish a proof of concept

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
  <iframe
    src="https://www.youtube.com/embed/SnbkIm56TfI?si=MbNvduV7XXMeeNdj"
    title="YouTube video player"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

## Further Reading 
For more unbeliveable things people on the internet have done, check in for the next episode or have a look at these famous examples 
[The time 4Chan found a flag using Aircraft trails in the sky](https://brobible.com/life/article/shia-labeouf-he-will-not-divide-us-flag-4chan/) 
[HDMI Cables radiating whats on your screen](https://www.pcworld.com/article/2413156/hackers-can-wirelessly-watch-your-screen-via-hdmi-radiation.html)
- Arechiga, R. O., Johnson, J. B., Edens, H. E., Thomas, R. J., & Rison, W. (2011). *Acoustic localization of triggered lightning*. Journal of Geophysical Research: Atmospheres. https://doi.org/10.1029/2010JD015248
- Hong, H., Wang, B., Lu, G., Li, X., et al. (2024). *Tracking Lightning Through 3D Thunder Source Location With Distributed Acoustic Sensing*. Journal of Geophysical Research: Atmospheres. https://doi.org/10.1029/2023JD038882
- Blitzortung / LightningMaps documentation: https://docs.lightningmaps.org/general/
- NASA World Wide Lightning Location Network dataset: https://catalog.data.gov/dataset/world-wide-lightning-location-network-wwlln-monthly-thunder-hour-data

## Disclaimer 
I am not affiliated  with any of the researchers or linked sites published here,
This research was done late at night and while highly caffinated, 
Do not attempt to reproduce or exploit vulnerbilities like this outside of controlled environments 
Please Follow your local laws (please)

