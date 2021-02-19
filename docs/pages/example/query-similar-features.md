---
title: Highlight features containing similar data
description: Hover over counties to highlight counties that share the same name.
topics:
  - User interaction
thumbnail: query-similar-features
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './query-similar-features.html?code';"
- "import iframe from './query-similar-features.html?iframe';"
---

In this example, a user can hover their cursor over any county in the United States, and the map highlights other U.S. counties with a matching name, displays a popup with the name of the county at the cursor location, and displays an HTML overlay with summary information.

The example first uses [`addSource`](/mapbox-gl-js/api/map/#map#addsource) to add county polygons from a vector [tileset](https://docs.mapbox.com/help/glossary/tileset/). Then it uses [`addLayer`](/mapbox-gl-js/api/map/#map#addlayer) to add two [`fill` layers](/mapbox-gl-js/style-spec/layers/#fill) using that source. The layer for the default display has transparent county polygons, and the layer for the highlighted display has filled county polygons.

To add interactivity, the example uses [`mousemove`](/mapbox-gl-js/api/map/#map.event:mousemove) to get the first county feature that the mouse is now over. Then it uses [`querySourceFeatures`](/mapbox-gl-js/api/map/#map#querysourcefeatures) to create a list of county features that match the name of the current county. Then it uses that list to get the total population and create the overlay. To create the illusion of highlighted polygons, it uses [`setFilter`](/mapbox-gl-js/api/map/#map#setfilter) to update the filter that is applied to the highlighted layer, allowing the matching counties to be visible.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
