---
title: Add a geocoder
description: Use the mapbox-gl-geocoder control to search for places using the Mapbox Geocoding API.
topics:
  - Controls and overlays
  - Geocoder
thumbnail: mapbox-gl-geocoder
contentType: example
layout: example
language:
- JavaScript
products:
- Geocoding API
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './mapbox-gl-geocoder.html?code';"
- "import iframe from './mapbox-gl-geocoder.html?iframe';"
---

This example adds a geocoding control to a web map, enabling users to search the map for a place.

It adds the control by loading the [mapbox-gl-geocoder](https://github.com/mapbox/mapbox-gl-geocoder) plugin inside a `<script>` tag, then using [`map.addControl`](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#addcontrol) to add the control with [`MapboxGeocoder`](https://github.com/mapbox/mapbox-gl-geocoder/blob/master/API.md#mapboxgeocoder) defined in the options. The `MapboxGeocoder` object uses the [Mapbox Geocoding API](/api/search/#geocoding) to enable places search.

Search for a place like _Moulin Rouge_ to test the geocoder control.

To explore how geocoding query parameters affect places search results, use the [Search playground](https://www.mapbox.com/search-playground/).

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
