---
title: Draw GeoJSON points
description: Draw points from a GeoJSON collection to a map.
topics:
  - Layers
thumbnail: geojson-markers
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './geojson-markers.html';"
---

This example draws points from a GeoJSON collection to a map.

Upon loading, the map uses [`loadImage`](/mapbox-gl-js/api/map/#map#loadimage) to add an image to the application, [`addSource`](/mapbox-gl-js/api/map/#map#addsource) to add a collection of points to the application, and then [`addLayer`](/mapbox-gl-js/api/map/#map#addlayer) to draw the image on the map at each point location.

{{ <Example html={html} {...this.props} /> }}
