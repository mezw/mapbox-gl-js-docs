---
title: Use a custom render function with a geocoder
description: Use a custom HTML rendering function with the mapbox-gl-geocoder control to customize the dropdown menu.
topics:
  - Geocoder
thumbnail: mapbox-gl-geocoder-custom-render
contentType: example
layout: example
language:
- JavaScript
products:
- Geocoding API
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './mapbox-gl-geocoder-custom-render.html?code';"
- "import iframe from './mapbox-gl-geocoder-custom-render.html?iframe';"
---

This example uses a custom HTML rendering function to customize the [mapbox-gl-geocoder](https://github.com/mapbox/mapbox-gl-geocoder) dropdown menu.

The [mapbox-gl-geocoder](https://github.com/mapbox/mapbox-gl-geocoder) plugin enables place search using the [Mapbox Geocoding API](https://docs.mapbox.com/api/search/geocoding/).

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
