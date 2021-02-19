---
title: Measure distances
description: Click points on a map to create lines that measure distanced using turf.length.
topics:
  - User interaction
thumbnail: measure
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './measure.html?code';"
- "import iframe from './measure.html?iframe';"
---

Click points on a map to create lines that measure distanced using [turf.length](https://turfjs.org/docs/#length).

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
