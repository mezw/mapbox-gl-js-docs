---
title: Display buildings in 3D
description: Use extrusions to display building heights in 3D.
topics:
  - Layers
thumbnail: 3d-buildings
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
- Mapbox Streets tileset
prependJs:
- "import Example from '../../components/example';"
- "import iframe from './3d-buildings.html?iframe';"
- "import html from './3d-buildings.html?code';"
---

This example uses [`addLayer`](/mapbox-gl-js/api/map/#map#addlayer) to add a [`fill-extrusion`](/mapbox-gl-js/style-spec#layers-fill-extrusion) layer that displays building heights in 3D.

The data source for the building heights is the [Mapbox Streets](https://docs.mapbox.com/vector-tiles/reference/mapbox-streets-v8/#layer-reference) vector tileset, which provides data for the `building` layer in the [`light-v10`](https://docs.mapbox.com/api/maps/styles/#mapbox-styles) style. 

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
