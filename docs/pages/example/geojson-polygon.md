---
title: Add a GeoJSON polygon
description: Style a polygon with the fill layer type.
topics:
  - Layers
thumbnail: geojson-polygon
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './geojson-polygon.html?code';"
- "import iframe from './geojson-polygon.html?iframe';"
---

This example adds a polygon to a map, then colors it blue and makes it slightly transparent.

Upon loading, the map uses [`addSource`](/mapbox-gl-js/api/map/#map#addsource) to add GeoJSON data containing one polygon that outlines the state of Maine. Then it uses [`addLayer`](/mapbox-gl-js/api/map/#map#addlayer) to create a new [fill layer](/mapbox-gl-js/style-spec/layers/#fill) and applies `paint` properties to style the polygon's appearance. To add an outline around the polygon, it uses `addLayer` again to create a new [line layer](/mapbox-gl-js/style-spec/layers/#line) referencing the same GeoJSON source.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
