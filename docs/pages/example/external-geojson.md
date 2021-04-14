---
title: Load data from an external GeoJSON file
description: Add a GeoJSONSource using a URL and show the data on a map.
topics:
  - Sources
thumbnail: external-geojson
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './external-geojson.html?code';"
- "import iframe from './external-geojson.html?iframe';"
---

This example adds [GeoJSON](/help/glossary/geojson/) data from an external file and uses it in a layer on the map.

Upon loading the map, it uses [`addSource`](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#addsource) to add the [`GeoJSONSource`](/mapbox-gl-js/api/sources/#geojsonsource) to the map, using a URL string as the value for `data`. Then it uses [`addLayer`](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#addlayer) to create a `circle` layer that references the source.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
