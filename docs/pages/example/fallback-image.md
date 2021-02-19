---
title: Use a fallback image
description: Use a coalesce expression to display another image when a requested image is not available.
topics:
  - Layers
thumbnail: fallback-image
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './fallback-image.html?code';"
- "import iframe from './fallback-image.html?iframe';"
---

Use a [`coalesce`](/mapbox-gl-js/style-spec/expressions/#coalesce) expression to display another image when a requested image is not available.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
