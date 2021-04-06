---
title: Create a draggable point
description: Drag the point to a new location on a map and populate its coordinates in a display.
topics:
  - User interaction
thumbnail: drag-a-point
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './drag-a-point.html?code';"
- "import iframe from './drag-a-point.html?iframe';"
---

In this example, a user can drag a point to a new location on the map, and a map overlay displays the new point coordinates.

The example stores the point coordinates in a variable with a GeoJSON value, then uses [`MapTouchEvent`s](/mapbox-gl-js/api/events/#maptouchevent) to prevent the default map drag behavior and get the updated coordinates. Then it uses [`setData`](/mapbox-gl-js/api/sources/#geojsonsource#setdata) to enable changes to the variable and [`addSource`](/mapbox-gl-js/api/map/#map#addsource) to use the variable as the value for the `data` property.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
