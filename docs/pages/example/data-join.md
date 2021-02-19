---
title: Join local JSON data with vector tile geometries
description: Style a choropleth by merging local JSON data with vector tile geometries.
topics:
  - Sources
thumbnail: data-join
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './data-join.html?code';"
- "import iframe from './data-join.html?iframe';"
---

This example styles a choropleth map by merging local JSON data with vector tile geometries.

It uses the [`match`](/mapbox-gl-js/style-spec/expressions/#match) expression to join the [Mapbox Countries](https://docs.mapbox.com/vector-tiles/reference/mapbox-countries-v1/) vector tileset with local JSON data by using a [three-letter ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) as the lookup key for the country shape.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
