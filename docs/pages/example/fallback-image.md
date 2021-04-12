---
title: Use a fallback image
description: Use a coalesce expression to display another image when a requested image is not available.
topics:
  - Layers
thumbnail: fallback-image
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './fallback-image.html?code';"
- "import iframe from './fallback-image.html?iframe';"
---

Use a [`coalesce`](/mapbox-gl-js/style-spec/expressions/#coalesce) expression to display another image when a requested image is not available.

This example uses a GeoJSON source with features that include an `icon` property. In this case, one feature has an `icon` property that does not match the name of any image in the [Mapbox Light](https://www.mapbox.com/maps/light) style's [sprite](https://docs.mapbox.com/help/glossary/sprite/). For that feature, the map will display a fallback image of a rocket.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
