---
title: Accept coordinates as input to a geocoder
description: Use the mapbox-gl-geocoder control to search for places using Mapbox Geocoding API.
topics:
  - Geocoder
thumbnail: mapbox-gl-geocoder-accept-coordinates
contentType: example
layout: example
language:
- JavaScript
products:
- Geocoding API
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './mapbox-gl-geocoder-accept-coordinates.html?code';"
- "import iframe from './mapbox-gl-geocoder-accept-coordinates.html?iframe';"
---

This example uses the [mapbox-gl-geocoder](https://github.com/mapbox/mapbox-gl-geocoder) control to enable users to search for places using the [Mapbox Geocoding API](https://docs.mapbox.com/api/search/geocoding/), and accept geographic [coordinates](https://docs.mapbox.com/help/glossary/lat-lon) in the search query.

Search for coordinates like _-40, 170_ to see the geocoder return a result.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
