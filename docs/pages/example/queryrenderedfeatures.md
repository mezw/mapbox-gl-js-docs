---
title: Get features under the mouse pointer
description: Use queryRenderedFeatures to show properties of hovered-over map elements.
topics:
  - User interaction
thumbnail: queryrenderedfeatures
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './queryrenderedfeatures.html?code';"
- "import iframe from './queryrenderedfeatures.html?iframe';"
---

Use [`queryRenderedFeatures`](/mapbox-gl-js/api/map/#map#queryrenderedfeatures) to show properties of hovered-over map elements.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
