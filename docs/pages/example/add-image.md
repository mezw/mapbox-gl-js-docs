---
title: Add an icon to the map
description: Add an icon to the map from an external URL and use it in a symbol layer.
topics:
  - Styles
  - Layers
thumbnail: add-image
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './add-image.html?code';"
- "import iframe from './add-image.html?iframe';"
---

This example uses an image from an external URL to visualize a point feature on the map. 

Upon loading, the map uses [`loadImage`](/mapbox-gl-js/api/map/#map#loadimage) to load the image from an external domain, [`addImage`](/mapbox-gl-js/api/map/#map#addimage) to add the image to the style as an icon, [`addSource`](/mapbox-gl-js/api/map/#map#addsource) to add a data source containing one point feature, and [`addLayer`](/mapbox-gl-js/api/map/#map#addlayer) to create a new [symbol layer](/mapbox-gl-js/style-spec/layers/#symbol) that uses the icon to represent the point data and instructs the client to draw the image for each point in the data source.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
