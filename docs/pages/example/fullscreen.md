---
title: View a fullscreen map
description: Toggle between current view and fullscreen mode.
topics:
  - Controls and overlays
thumbnail: fullscreen
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './fullscreen.html';"
---

This example adds a clickable map control that enables a user to toggle fullscreen mode on and off.

It uses [`addControl`](/mapbox-gl-js/api/map/#map#addcontrol) with [`FullscreenControl`](/mapbox-gl-js/api/markers/#fullscreencontrol) to add the button overlay on the map.

{{ <Example html={html} {...this.props} /> }}
