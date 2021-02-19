---
title: Add a raster tile source
description: Add a third-party raster source to the map.
topics:
  - Sources
thumbnail: map-tiles
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './map-tiles.html?code';"
- "import iframe from './map-tiles.html?iframe';"
---

This example adds third-party raster tiles to a map by defining a custom style.

The [style](https://docs.mapbox.com/help/glossary/style/) defines a [`raster` source](/mapbox-gl-js/style-spec/sources/#raster) with an external URL for the `tiles` parameter. The source is used by [`raster` layer](/mapbox-gl-js/style-spec/layers/#raster).

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
