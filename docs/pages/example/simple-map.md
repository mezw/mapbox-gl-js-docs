---
title: Display a map
description: Initialize a map in an HTML element with Mapbox GL JS.
topics:
  - Getting started
  - Styles
thumbnail: simple-map
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './simple-map.html';"
---

This example uses [`mapboxgl.Map`](/mapbox-gl-js/api/map) to initialize a Mapbox map inside an HTML element on a webpage.

You can use [`map` properties](/mapbox-gl-js/api/map/#map-parameters) such as `style`, `center`, and `zoom` to define the initial appearance of the map.

{{ <Example html={html} {...this.props} /> }}
