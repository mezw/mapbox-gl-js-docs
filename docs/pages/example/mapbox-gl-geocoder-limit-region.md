---
title: Limit geocoder results to a named region
description: Use the mapbox-gl-geocoder control to search for places using Mapbox Geocoding API limiting results to a region.
topics:
  - Geocoder
thumbnail: mapbox-gl-geocoder-limit-region
contentType: example
layout: example
language:
- JavaScript
products:
- Geocoding API
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './mapbox-gl-geocoder-limit-region.html?code';"
- "import iframe from './mapbox-gl-geocoder-limit-region.html?iframe';"
---

This example uses the [mapbox-gl-geocoder](https://github.com/mapbox/mapbox-gl-geocoder) control to enable users to search for places using [Mapbox Geocoding API](https://docs.mapbox.com/api/search/geocoding/), limiting search results to a region.

When it uses `map.addControl` to add the control to the map, it creates a `MapboxGeocoder` object and defines restrictions for search results by using the [optional parameters](https://docs.mapbox.com/api/search/geocoding/#forward-geocoding) `countries`, `bbox`, and `filter`.

Search for a place like _Starbucks_ to see search results restricted to the specified region, New South Wales in Australia.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
