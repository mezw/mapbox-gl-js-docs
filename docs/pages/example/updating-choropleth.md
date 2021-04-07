---
title: Update a choropleth layer by zoom level
description: Display state or county population depending on zoom level.
topics:
  - Layers
  - User interaction
thumbnail: updating-choropleth
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './updating-choropleth.html?code';"
- "import iframe from './updating-choropleth.html?iframe';"
- "import Note from '@mapbox/dr-ui/note';"
---

This map uses 2014 U.S. Census data to create two layers. One layer contains a choropleth visualization for _state populations_, and one layer contains a choropleth visualization for _county populations_. 

The example defines a zoom level at which each layer and its respective legend should appear or disappear using the [`minzoom`](/mapbox-gl-js/style-spec/layers/#minzoom) and [`maxzoom`](/mapbox-gl-js/style-spec/layers/#maxzoom) layer properties.

You can use [`getZoom`](/mapbox-gl-js/api/map/#map#getzoom) to use zoom values to control the appearance of other elements. 

{{<Note title="Use a custom tileset">}}
This example uses 2014 U.S. Census data that was uploaded to Mapbox as a vector tileset. This data is not updated or maintained and **should not be used in production applications.**

If you're interested in creating an application that uses U.S. Census data, you can download a Shapefile from [census.gov's data portal](https://www.census.gov/geographies/mapping-files/time-series/geo/cartographic-boundary.html) and upload it to Mapbox Studio's [Tilesets page](https://studio.mapbox.com/tilesets/).
{{</Note>}}

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
