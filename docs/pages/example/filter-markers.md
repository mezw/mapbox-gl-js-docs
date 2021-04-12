---
title: Filter symbols by toggling a list
description: Filter a set of symbols based on a property value in the data.
topics:
  - User interaction
thumbnail: filter-markers
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './filter-markers.html?code';"
- "import iframe from './filter-markers.html?iframe';"
- "import ReferenceAnIcon from '../../components/notes/reference-an-icon';"
---

Filter a set of [symbols](/mapbox-gl-js/style-spec/layers/#symbol) based on a property value in the data.

{{ <ReferenceAnIcon styleName="Mapbox Light"/> }}

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
