---
title: Disable scroll zoom
description: Prevent scroll from zooming a map.
topics:
  - Controls and overlays
thumbnail: disable-scroll-zoom
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './disable-scroll-zoom.html?code';"
- "import iframe from './disable-scroll-zoom.html?iframe';"
---

This example uses [`scrollZoom.disable`](/mapbox-gl-js/api/handlers/#scrollzoomhandler#disable) to prevent a user's scroll interactions from zooming a map.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
