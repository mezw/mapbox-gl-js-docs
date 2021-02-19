---
title: Display a satellite map on a webpage
description: Display a satellite raster layer on a map with Mapbox GL JS.
topics:
  - Styles
thumbnail: satellite-map
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
- Mapbox Satellite tileset
prependJs:
- "import Example from '../../components/example';"
- "import html from './satellite-map.html?code';"
- "import iframe from './satellite-map.html?iframe';"
---

This example shows how to initialize a map on a webpage with Mapbox GL JS.

This example is like the [Display a map on a webpage](/mapbox-gl-js/example/simple-map/) example, but it uses the [style URL](https://docs.mapbox.com/help/glossary/style-url/) for the [Mapbox Satellite](https://www.mapbox.com/maps/satellite/) style.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
