---
title: Use the geocoder without a map
description: Use the mapbox-gl-geocoder control to search for places using Mapbox Search API without an associated map view.
topics:
  - Geocoder
thumbnail: mapbox-gl-geocoder-no-map
contentType: example
layout: example
language:
- JavaScript
products:
- Geocoding API
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './mapbox-gl-geocoder-no-map.html?code';"
- "import iframe from './mapbox-gl-geocoder-no-map.html?iframe';"
---

This example uses the [mapbox-gl-geocoder](https://github.com/mapbox/mapbox-gl-geocoder) control to enable users to search for places without an associated map view.

No map appears in this example, but you can use the geocoder control to search for a place, and the control will return place results from the [Mapbox Geocoding API](https://docs.mapbox.com/api/search/geocoding/).

Search for a place like _San Rafael_ to test the geocoder and see results.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
