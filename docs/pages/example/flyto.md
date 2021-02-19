---
title: Fly to a location
description: Use flyTo to smoothly interpolate between locations.
topics:
  - Camera
thumbnail: flyto
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './flyto.html?code';"
- "import iframe from './flyto.html?iframe';"
---

Use [`flyTo`](/mapbox-gl-js/api/map/#map#flyto) to smoothly interpolate between locations.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
