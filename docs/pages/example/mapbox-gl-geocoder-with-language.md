---
title: Localize the geocoder to a given language
description: Localize the mapbox-gl-geocoder control to set the UI language and improve result relevance in that language.
topics:
  - Geocoder
thumbnail: mapbox-gl-geocoder-with-language
contentType: example
layout: example
language:
- JavaScript
products:
- Geocoding API
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './mapbox-gl-geocoder-with-language.html?code';"
- "import iframe from './mapbox-gl-geocoder-with-language.html?iframe';"
---

This example localizes the [mapbox-gl-geocoder](https://github.com/mapbox/mapbox-gl-geocoder) control for the German language by using the `language` parameter, which sets the geocoder UI elements, controls the language of the text supplied in responses, and also affects result scoring.

The `mapbox-gl-geocoder` plugin uses the [Mapbox Geocoding API](https://docs.mapbox.com/api/search/geocoding/) to enable place search.

Search for a place like _olympic stadium_ to see results localized for German (`de-DE`).

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}