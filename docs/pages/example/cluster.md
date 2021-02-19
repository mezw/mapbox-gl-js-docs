---
title: Create and style clusters
description: Use Mapbox GL JS' built-in functions to visualize points as clusters.
topics:
  - Layers
thumbnail: cluster
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './cluster.html?code';"
- "import iframe from './cluster.html?iframe';"
---

This example uses Mapbox GL JS' built-in [`cluster`](/mapbox-gl-js/style-spec/sources/#geojson-cluster) functions to visualize points in a [`circle` layer](/mapbox-gl-js/style-spec/layers/#circle) as clusters.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
