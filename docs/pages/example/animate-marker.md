---
title: Animate a marker
description: Animate the position of a marker by updating its location on each frame.
topics:
  - Controls and overlays
thumbnail: animate-marker
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './animate-marker.html?code';"
- "import iframe from './animate-marker.html?iframe';"
---

Animate the position of a [`Marker`](/mapbox-gl-js/api/markers/#marker) by updating its location on each frame.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
