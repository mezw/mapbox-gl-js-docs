---
title: Animate the camera around a point in 3D terrain
description: Use the FreeCamera API to create a fly-over animation focused on a point.
topics:
  - Camera
  - 3D
thumbnail: free-camera-point
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './free-camera-point.html?code';"
- "import iframe from './free-camera-point.html?iframe';"
---

Use the [`FreeCamera` API](/mapbox-gl-js/api/properties/#freecameraoptions) to create a fly-over animation focused on a point.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
