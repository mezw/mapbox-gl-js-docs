---
title: Animate map camera around a point
description: Animate the map camera around a point.
topics:
  - Camera
thumbnail: animate-camera-around-point
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './animate-camera-around-point.html?code';"
- "import iframe from './animate-camera-around-point.html?iframe';"
---

This example uses [`rotateTo`](/mapbox-gl-js/api/map/#map#rotateto) and the [`interpolate`](/mapbox-gl-js/style-spec/expressions/#interpolate) expression operator to animate the map camera around a point.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
