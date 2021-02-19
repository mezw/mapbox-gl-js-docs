---
title: Add an atmospheric sky layer to a map
description: Add a customizable sky layer that simulates the natural scattering of light in the atmosphere.
topics:
  - Layers
  - 3D
thumbnail: atmospheric-sky
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './atmospheric-sky.html?code';"
- "import iframe from './atmospheric-sky.html?iframe';"
---

Add a customizable [sky layer](/mapbox-gl-js/style-spec/layers/#sky) that simulates the natural scattering of light in the atmosphere.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
