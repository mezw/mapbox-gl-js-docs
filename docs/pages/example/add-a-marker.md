---
title: Add a default marker to a web map
description: Add a marker to a map using the default Marker method in Mapbox GL JS.
topics:
  - Styles
thumbnail: add-a-marker
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './add-a-marker.html?code';"
- "import iframe from './add-a-marker.html?iframe';"
---

This example adds two [markers](/help/glossary/marker/) to a web map using the default [`Marker`](/mapbox-gl-js/api/markers/#marker) method in Mapbox GL JS. 

`marker1` is centered at the coordinates `12.554729, 55.70651` near Copenhagen. It uses the default marker color.

`marker2` uses options to define the `color` and `rotation` [parameters](/mapbox-gl-js/api/markers/#marker-parameters) for the new `Marker` object.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
