---
title: Create a heatmap layer
description: Visualize earthquake frequency by location using a heatmap layer.
topics:
  - Layers
thumbnail: heatmap-layer
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './heatmap-layer.html?code';"
- "import iframe from './heatmap-layer.html?iframe';"
---

Visualize earthquake frequency by location using a [heatmap layer](/mapbox-gl-js/style-spec/layers/#heatmap).

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
