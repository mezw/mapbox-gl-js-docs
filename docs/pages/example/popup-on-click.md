---
title: Display a popup on click
description: When a user clicks a symbol, show a popup containing more information.
topics:
  - Controls and overlays
thumbnail: popup-on-click
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './popup-on-click.html?code';"
- "import iframe from './popup-on-click.html?iframe';"
- "import ReferenceAnIcon from '../../components/notes/reference-an-icon';"
---

When a user clicks a circle, show a [`Popup`](/mapbox-gl-js/api/markers/#popup) containing more information.

{{ <ReferenceAnIcon styleName="Mapbox Streets"/> }}

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
