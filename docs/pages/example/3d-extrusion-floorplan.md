---
title: Extrude polygons for 3D indoor mapping
description: Create a 3D indoor map with the fill-extrude-height paint property.
topics:
  - Layers
thumbnail: 3d-extrusion-floorplan
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './3d-extrusion-floorplan.html?code';"
- "import iframe from './3d-extrusion-floorplan.html?iframe';"
---

Create a 3D indoor map with the [`fill-extrude-height`](/mapbox-gl-js/style-spec/layers/#paint-fill-extrusion-fill-extrusion-height) paint property.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
