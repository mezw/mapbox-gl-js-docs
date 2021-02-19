---
title: Update a feature in realtime
description: Change an existing feature on your map in realtime by updating its data.
topics:
  - Sources
thumbnail: live-update-feature
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './live-update-feature.html?code';"
- "import iframe from './live-update-feature.html?iframe';"
---

This example shows how to change an existing feature on a map by updating its data.

It shows the progression of a path by adding new coordinates to a feature in a [`line` layer](/mapbox-gl-js/style-spec/layers/#line). This approach is useful for visualizing real-time data sources.

 Calling [`setData`](/mapbox-gl-js/api/sources/#geojsonsource#setdata) begins a new render cycle which makes the updates appear in real time without explicitly creating an animation. [`panTo`](/mapbox-gl-js/api/map/#map#panto) then follows the leading edge of the line to keep it on screen.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
