---
title: Variable label placement
description: Use text-variable-anchor to allow high priority labels to shift position to stay on the map.
topics:
  - Layers
thumbnail: variable-label-placement
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './variable-label-placement.html?code';"
- "import iframe from './variable-label-placement.html?iframe';"
- "import ReferenceAnIcon from '../../components/notes/reference-an-icon';"
---

Use [`text-variable-anchor`](/mapbox-gl-js/style-spec/layers/#layout-symbol-text-variable-anchor) to allow high priority labels to shift position to stay on the map.

{{ <ReferenceAnIcon styleName="Mapbox Light"/> }}

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
