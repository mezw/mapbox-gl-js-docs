---
title: Filter symbols by text input
description: Filter symbols by icon name by typing in a text input.
topics:
  - User interaction
thumbnail: filter-markers-by-input
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './filter-markers-by-input.html?code';"
- "import iframe from './filter-markers-by-input.html?iframe';"
- "import ReferenceAnIcon from '../../components/notes/reference-an-icon';"
---

Filter [symbols](/mapbox-gl-js/style-spec/layers/#symbol) by icon name by typing in a text input.

{{ <ReferenceAnIcon styleName="Mapbox Light"/> }}

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
