---
title: Display a map on a webpage
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
- "import html from './simple-map.html?code';"
- "import iframe from './simple-map.html?iframe';"
---

This example uses [`mapboxgl.Map`](/mapbox-gl-js/api/map) to initialize a Mapbox map inside an HTML element on a webpage.

You can use the [`map` parameters](/mapbox-gl-js/api/map/#map-parameters) `style`, `center`, and `zoom` to define the initial appearance of the map.

The string value for `accessToken` should be a valid [access token](/help/glossary/access-token/) from a Mapbox user account.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
