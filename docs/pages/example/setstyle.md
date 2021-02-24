---
title: Change a map's style
description: Switch to another map style.
topics:
  - Styles
  - User interaction
thumbnail: setstyle
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './setstyle.html?code';"
- "import iframe from './setstyle.html?iframe';"
---

This example adds a clickable interface that enables a user to apply several different styles to the map.

When the user clicks a style name, it uses [`setstyle`](/mapbox-gl-js/api/map/#map#setstyle) to redraw the map using the [style URL](https://docs.mapbox.com/help/glossary/style-url/) associated with that option.

The map is centered at `-2.81361, 36.77271` near El Ejido, Spain, an area known as the "Sea of Plastic" due to the many white-roofed greenhouses in the region, visible in the satellite imagery.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
