---
title: Get coordinates of the mouse pointer
description: Show mouse position on hover with pixel and latitude and longitude coordinates.
topics:
  - User interaction
thumbnail: mouse-position
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './mouse-position.html';"
---

This example uses the `mousemove` event to get two values from the [`MapMouseEvent`](/mapbox-gl-js/api/events/#mapmouseevent) object: the x-y `point` coordinates of the mouse cursor on the HTML map container and the `lngLat` coordinates of the cursor on the map. It displays both coordinates in an HTML overlay.

{{ <Example html={html} {...this.props} /> }}
