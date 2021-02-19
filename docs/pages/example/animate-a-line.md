---
title: Animate a line
description: Animate a line by updating a GeoJSON source on each frame.
topics:
  - Layers
  - Sources
thumbnail: animate-a-line
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './animate-a-line.html?code';"
- "import iframe from './animate-a-line.html?iframe';"
---

This example animates a line by updating a GeoJSON source on each frame.

It uses [`addSource`](/mapbox-gl-js/api/map/#map#addsource) to add a `GeoJSON` source and uses [`addLayer`](/mapbox-gl-js/api/map/#map#addlayer) to add a [`line` layer](/mapbox-gl-js/style-spec/layers/#line) to the map.

When the animation begins, the data in the GeoJSON object changes, and the line appears animated on the map.

The example [Update a feature in realtime](/mapbox-gl-js/example/live-update-feature/) uses a similar approach to create an animation.


{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
