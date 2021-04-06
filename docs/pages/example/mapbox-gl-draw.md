---
title: Draw a polygon and calculate its area
description: Use mapbox-gl-draw to draw a polygon and Turf.js to calculate its area in square meters.
topics:
  - Controls and overlays
thumbnail: mapbox-gl-draw
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './mapbox-gl-draw.html?code';"
- "import iframe from './mapbox-gl-draw.html?iframe';"
---

Click the map to begin drawing a polygon. As you add vertices to your polygon, its total area will appear in the lower left of the map. Double-click when you draw the final vertex to complete the polygon. This examples uses [mapbox-gl-draw](https://github.com/mapbox/mapbox-gl-draw) to draw the polygon and [Turf.js](http://turfjs.org/) to calculate its area in square meters.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
