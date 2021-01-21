---
title: Toggle interactions
description: Enable or disable UI handlers on a map.
topics:
  - User interaction
thumbnail: toggle-interaction-handlers
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './toggle-interaction-handlers.html';"
---

This example adds an interface to enable and disable seven different map user interactions: `scrollZoom`, `boxZoom`, `dragRotate`, `dragPan`, `keyboard`, `doubleClickZoom`, and `touchZoomRotate`.

You can use [user interaction handlers](/mapbox-gl-js/api/handlers/) to control how a map object responds to user input.

{{ <Example html={html} {...this.props} /> }}
