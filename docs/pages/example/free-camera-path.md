---
title: Animate the camera along a path
description: Use the FreeCamera API to follow a path over 3D terrain.
topics:
  - Camera
  - 3D
thumbnail: free-camera-path
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './free-camera-path.html?code';"
- "import iframe from './free-camera-path.html?iframe';"
---

Use the [`FreeCamera` API](/mapbox-gl-js/api/properties/#freecameraoptions) to follow a path over 3D terrain.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
