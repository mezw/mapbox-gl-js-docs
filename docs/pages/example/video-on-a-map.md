---
title: Add a video
description: Display a video on top of a satellite raster baselayer.
topics:
  - Sources
  - Layers
thumbnail: video-on-a-map
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './video-on-a-map.html?code';"
- "import iframe from './video-on-a-map.html?iframe';"
---

This example adds a georeferenced video on top of a map layer with satellite imagery.

It adds a [`raster` source](/mapbox-gl-js/style-spec/sources/#raster) for the satellite imagery and a [`video` source](/mapbox-gl-js/style-spec/sources/#video) for the video, then adds [`raster` layers](/mapbox-gl-js/style-spec/layers/#raster) for each of those sources.

Then it adds user interactivity by using the [`click`](/mapbox-gl-js/api/map/#map.event:click) event to enable pause and play video controls.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
