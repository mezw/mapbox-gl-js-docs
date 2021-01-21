---
title: Add a generated icon to the map
description: Add an icon to the map that was generated at runtime.
topics:
  - Styles
  - Layers
thumbnail: add-image-generated
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './add-image-generated.html';"
---

This example uses [`addImage`](/mapbox-gl-js/api/map/#map#addimage) to generate an icon at runtime and add it to a map style. Then it adds the icon to the map by including the `'layout': {'icon-image': 'gradient'}` statement inside [`addLayer`](/mapbox-gl-js/api/map/#map#addlayer).

{{ <Example html={html} {...this.props} /> }}
