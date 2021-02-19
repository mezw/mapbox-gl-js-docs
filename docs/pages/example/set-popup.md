---
title: Attach a popup to a marker instance
description: Attach a popup to a marker and display it on click.
topics:
  - Controls and overlays
thumbnail: set-popup
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './set-popup.html?code';"
- "import iframe from './set-popup.html?iframe';"
---

Attach a [`Popup`](/mapbox-gl-js/api/markers/#popup) to a [Marker](/mapbox-gl-js/api/markers/#marker) and display it on click.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
