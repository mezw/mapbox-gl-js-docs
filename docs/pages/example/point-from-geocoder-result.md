---
title: Set a point after Geocoder result
description: Style a marker used to mark the location of the mapbox-gl-geocoder search result.
topics:
  - Geocoder
thumbnail: point-from-geocoder-result
contentType: example
layout: example
language:
- JavaScript
products:
- Geocoding API
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './point-from-geocoder-result.html?code';"
- "import iframe from './point-from-geocoder-result.html?iframe';"
---

This example styles the [`Marker`](/mapbox-gl-js/api/markers/#marker) used to mark the location of the search result returned by the [Mapbox Geocoding API](https://docs.mapbox.com/api/search/geocoding/) when a user submits a query in the [mapbox-gl-geocoder](https://github.com/mapbox/mapbox-gl-geocoder) control.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
