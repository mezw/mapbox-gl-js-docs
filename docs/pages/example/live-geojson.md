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
- "import ReferenceAnIcon from '../../components/notes/reference-an-icon';"
---

Use realtime GeoJSON data streams to move a [`symbol`](/mapbox-gl-js/style-spec/layers/#symbol) on your map.

{{ <ReferenceAnIcon styleName="Mapbox Streets"/> }}

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
