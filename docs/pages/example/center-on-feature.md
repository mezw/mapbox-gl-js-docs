---
title: Center the map on a clicked feature
description: Use events and flyTo to center the map on a feature.
topics:
  - Camera
  - User interaction
thumbnail: center-on-feature
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './center-on-feature.html?code';"
- "import iframe from './center-on-feature.html?iframe';"
---

Use events and [`flyTo`](/mapbox-gl-js/api/map/#map#flyto) to center the map on a feature in a [`circle`](/mapbox-gl-js/style-spec/layers/#circle) layer.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
