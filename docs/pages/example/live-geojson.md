---
title: Add live realtime data
description: Use realtime GeoJSON data streams to move a symbol on your map.
topics:
  - Sources
thumbnail: live-geojson
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './live-geojson.html?code';"
- "import iframe from './live-geojson.html?iframe';"
---

Use realtime GeoJSON data streams to move a [`symbol`](/mapbox-gl-js/style-spec/layers/#symbol) on your map.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
