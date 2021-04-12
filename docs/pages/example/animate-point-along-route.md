---
title: Animate a point along a route
description: Use Turf to smoothly animate a point along the distance of a line.
topics:
  - Camera
thumbnail: animate-point-along-route
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './animate-point-along-route.html?code';"
- "import iframe from './animate-point-along-route.html?iframe';"
- "import ReferenceAnIcon from '../../components/notes/reference-an-icon';"
---

Use [Turf](http://turfjs.org/) to smoothly animate a point along the distance of a line.

{{ <ReferenceAnIcon styleName="Mapbox Streets"/> }}

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
