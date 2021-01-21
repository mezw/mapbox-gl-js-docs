---
title: Display HTML clusters with custom properties
description: Extend clustering with HTML markers and custom property expressions. 
topics:
  - Layers
thumbnail: cluster-html
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './cluster-html.html';"
---

This advanced example uses Mapbox GL JS [clustering](/mapbox-gl-js/style-spec/sources/#geojson-cluster) with HTML [markers](/mapbox-gl-js/api/markers/#marker) and the custom property [expressions](/mapbox-gl-js/style-spec/expressions/) `number-format`, `get`, `!=`, `>`, `>=`, `all`, and `case`. 

You can use HTML or SVG for clusters in place of a Mapbox GL layer by manually synchronizing the clustered source with a pool of marker objects that updates continuously while the map view changes.

{{ <Example html={html} {...this.props} /> }}
