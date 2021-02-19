---
title: Fly to a location based on scroll position
description: Scroll down through the story and the map will fly to the chapter's location.
topics:
  - Camera
thumbnail: scroll-fly-to
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './scroll-fly-to.html?code';"
- "import iframe from './scroll-fly-to.html?iframe';"
---

This example shows a map on the left and a scrollable story with several chapters on the right. A user can scroll through the story and the map will fly to the corresponding location for each chapter.

When the user scrolls, the application recognizes which chapter is on screen, and uses [`flyTo`](/mapbox-gl-js/api/map/#map#flyto) to animate the transition to that chapter's unique [`CameraOptions`](/mapbox-gl-js/api/properties/#cameraoptions) on the map.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
