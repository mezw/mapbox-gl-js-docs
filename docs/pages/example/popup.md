---
title: Display a popup
description: Add a popup to the map.
topics:
  - Controls and overlays
thumbnail: popup
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './popup.html?code';"
- "import iframe from './popup.html?iframe';"
---

Add a [`Popup`](/mapbox-gl-js/api/markers/#popup) to the map.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
