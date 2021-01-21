---
title: Navigate the map with game-like controls
description: Use the keyboard's arrow keys to move around the map with game-like controls.
topics:
  - Camera
thumbnail: game-controls
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './game-controls.html';"
---

In this example, the user can press their keyboard's arrow keys to move around the map with game-like controls.

The map uses [`panBy`](/mapbox-gl-js/api/map/#map#panby) to move forward and backward, and [`easeTo`](/mapbox-gl-js/api/map/#map#easeto) to move left and right.

{{ <Example html={html} {...this.props} /> }}
