---
title: Add hillshading
description: Add raster hillshading to a map.
topics:
  - Layers
  - Sources
thumbnail: hillshade
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
- Mapbox Terrain-RGB tileset
prependJs:
- "import Example from '../../components/example';"
- "import html from './hillshade.html?code';"
- "import iframe from './hillshade.html?iframe';"
---

This example adds raster hillshading to a map by adding the [Mapbox Terrain-RGB](https://docs.mapbox.com/help/troubleshooting/access-elevation-data/#mapbox-terrain-rgb) raster tileset as a [`raster-dem` source](/mapbox-gl-js/style-spec/sources/#raster-dem) with a [`hillshade` layer](/mapbox-gl-js/style-spec/layers/#hillshade).

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
