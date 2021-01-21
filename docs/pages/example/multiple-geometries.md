---
title: Add multiple geometries from one GeoJSON source
description: Add a polygon and circle layer from the same GeoJSON source.
topics:
  - Layers
thumbnail: multiple-geometries
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './multiple-geometries.html';"
---

This example uses [`addSource`](/mapbox-gl-js/api/map/#map#addsource) to add one GeoJSON source to a map. The source contains both polygon and point features.

Then it uses [`addLayer`](/mapbox-gl-js/api/map/#map#addlayer) to add one `fill` layer, which will render the polygons, and one `circle` layer, which will render the points, to the map.

{{ <Example html={html} {...this.props} /> }}
