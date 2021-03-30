---
title: Use a custom camera animation with a geocoder
description: Use camera animation options with the mapbox-gl-geocoder to create a custom animation when the user selects a search result.
topics:
  - Geocoder
thumbnail: mapbox-gl-geocoder-with-flyto
contentType: example
layout: example
language:
- JavaScript
products:
- Geocoding API
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './mapbox-gl-geocoder-with-flyto.html?code';"
- "import iframe from './mapbox-gl-geocoder-with-flyto.html?iframe';"
---

This example uses camera animation options with the [mapbox-gl-geocoder](https://github.com/mapbox/mapbox-gl-geocoder) control to create a custom [`flyTo`](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#flyto) animation when the user selects a search result returned by the [Mapbox Geocoding API](https://docs.mapbox.com/api/search/geocoding/).

Search for a place like _Port-au-Prince_ to see the animation.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
