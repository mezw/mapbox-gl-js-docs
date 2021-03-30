---
title: Supplement forward geocoding search results with another data source
description: Use the mapbox-gl-geocoder control to search for places using Mapbox Geocoding API.
topics:
  - Geocoder
thumbnail: forward-geocode-custom-data
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
- Geocoding API
prependJs:
- "import Example from '../../components/example';"
- "import html from './forward-geocode-custom-data.html?code';"
- "import iframe from './forward-geocode-custom-data.html?iframe';"
---

This example adds a geocoding control on top of a web map and supplements the place data available through the [Mapbox Geocoding API](https://docs.mapbox.com/api/search/geocoding/) with custom data from a local data source. 

Custom data is loaded into the example using the `customData` GeoJSON object. The `forwardGeocoder` function takes a user's query string and performs local geocoding to supplement Mapbox Geocoding API results with results from `customData`, adding a tree emoji (🌲) as a prefix for custom data results. Finally, it uses `.addControl` to add the [mapbox-gl-geocoder](https://github.com/mapbox/mapbox-gl-geocoder) plugin to the map, with the `localGeocoder` option defined as the `forwardGeocoder` function.

Search for _Lincoln Park_ to see a custom feature appear as a search result.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
