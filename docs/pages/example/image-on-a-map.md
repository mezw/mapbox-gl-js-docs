---
title: Add a raster image to a map layer
description: Add a radar weather image overlay on top of a dark vector map.
topics:
  - Sources
  - Layers
thumbnail: image-on-a-map
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './image-on-a-map.html?code';"
- "import iframe from './image-on-a-map.html?iframe';"
- "import * as constants from '../../constants';"
---

This example animates a series of radar weather images over other map layers in a dark vector style.

To create the vector map style, the example provides a JSON object to define a map [`style`](/mapbox-gl-js/api/map/#map-parameters) that uses map data in the publicly available [Mapbox Streets v{{constants.VERSION_STREETS_TILESET}} vector tileset](https://docs.mapbox.com/vector-tiles/reference/mapbox-streets-v{{constants.VERSION_STREETS_TILESET}}/#name-text--name_lang-code-text) as a source for several [`vector` layer](/mapbox-gl-js/style-spec/sources/#vector)s, and recolors them to create a dark appearance. 

To add the raster overlay, the example adds another source to the same JSON object, this time using an [`image` source](/mapbox-gl-js/style-spec/sources/#image), and adds a [`raster` layer](/mapbox-gl-js/style-spec/layers/#raster) to the JSON object.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
