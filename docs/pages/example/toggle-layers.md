---
title: Show and hide layers
description: Create a custom layer switcher to display different datasets.
topics:
  - Layers
thumbnail: toggle-layers
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './toggle-layers.html?code';"
- "import iframe from './toggle-layers.html?iframe';"
---

This example adds a clickable interface that allows a user to enable and disable two different map layers.

The interface uses [`setLayoutProperty`](/mapbox-gl-js/api/map/#map#setlayoutproperty) to toggle the value for each layer's [`visibility`](/mapbox-gl-js/style-spec/layers/) property between `visible` and `none`.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}