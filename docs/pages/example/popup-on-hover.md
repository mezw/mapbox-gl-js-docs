---
title: Display a popup on hover
description: When a user hovers over a custom marker, show a popup containing more information.
topics:
  - Controls and overlays
thumbnail: popup-on-hover
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './popup-on-hover.html?code';"
- "import iframe from './popup-on-hover.html?iframe';"
---

When a user hovers over a custom marker, show a [`Popup`](/mapbox-gl-js/api/markers/#popup) containing more information.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
