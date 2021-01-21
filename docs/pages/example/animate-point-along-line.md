---
title: Animate a point
description: Animate the position of a point by updating a GeoJSON source on each frame.
topics:
  - Layers
  - Sources
thumbnail: animate-point-along-line
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './animate-point-along-line.html';"
---

This example animates the position of a point by updating a GeoJSON source on each frame.

It first defines the animation as a GeoJSON object. Then it adds a [GeoJSON source](/mapbox-gl-js/style-spec/sources/#geojson) referring to that GeoJSON, and adds a [circle layer](/mapbox-gl-js/style-spec/layers/#circle) that uses that source. Finally, it starts the animation to continuously update the GeoJSON object, resulting in a moving circle on the map.

{{ <Example html={html} {...this.props} /> }}
