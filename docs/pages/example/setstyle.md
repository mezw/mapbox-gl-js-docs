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
- "import html from './setstyle.html';"
---

This example adds a clickable interface that enables a user to apply a different style to a map.

When the user clicks a style name in the interface, it uses [`setstyle`](/mapbox-gl-js/api/map/#map#setstyle) to redraw the map using the [style URL](https://docs.mapbox.com/help/glossary/style-url/) associated with that option.

{{ <Example html={html} {...this.props} /> }}
