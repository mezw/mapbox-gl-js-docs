---
title: Add 3D terrain to a map
description: Use setTerrain to add 3D terrain to a map using a raster terrain source.
topics:
  - Layers
  - 3D
thumbnail: add-terrain
contentType: example
layout: example
preview: true
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './add-terrain.html?code';"
- "import iframe from './add-terrain.html?iframe';"
---

This example adds 3D terrain to a map using [`setTerrain`](/mapbox-gl-js/api/map/#map#setterrain) with a [`raster-dem` source](/mapbox-gl-js/style-spec/sources/#raster-dem). 

It uses [`exaggeration`](https://docs.mapbox.com/mapbox-gl-js/style-spec/terrain/#exaggeration) to exaggerate the height of the terrain. It also adds a [`sky` layer](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#sky) that shows when the map is highly [pitched](https://docs.mapbox.com/help/glossary/camera/).

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
