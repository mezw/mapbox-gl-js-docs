---
title: Place the geocoder input outside the map
description: Use the mapbox-gl-geocoder control to search for places using Mapbox Geocoding API attached to an element outside the map.
topics:
  - Geocoder
thumbnail: mapbox-gl-geocoder-outside-the-map
contentType: example
layout: example
language:
- JavaScript
products:
- Geocoding API
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './mapbox-gl-geocoder-outside-the-map.html?code';"
- "import iframe from './mapbox-gl-geocoder-outside-the-map.html?iframe';"
---

Use the [mapbox-gl-geocoder](https://github.com/mapbox/mapbox-gl-geocoder) control to search for places using [Mapbox Geocoding API](https://docs.mapbox.com/api/search/geocoding/) attached to an element outside the map.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
