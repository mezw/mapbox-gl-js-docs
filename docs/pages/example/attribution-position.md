---
title: Change the default position for attribution
description: Place attribution in the top-left position when initializing a map.
topics:
  - Controls and overlays
thumbnail: attribution-position
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './attribution-position.html';"
---

This example places the [required map attribution](https://docs.mapbox.com/help/how-mapbox-works/attribution/) in the `top-left` position of a map using [`addControl`](/mapbox-gl-js/api/map/#map#addcontrol) with [`AttributionControl`](/mapbox-gl-js/api/markers/#attributioncontrol).

{{ <Example html={html} {...this.props} /> }}
