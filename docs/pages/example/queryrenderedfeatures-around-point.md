---
title: Select features around a clicked point
description: Click on the map to query features using queryRenderedFeatures.
topics:
  - User interaction
thumbnail: queryrenderedfeatures-around-point
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './queryrenderedfeatures-around-point.html?code';"
- "import iframe from './queryrenderedfeatures-around-point.html?iframe';"
- "import Note from '@mapbox/dr-ui/note';"
---

Click on the map to query features using [`queryRenderedFeatures`](/mapbox-gl-js/api/map/#map#queryrenderedfeatures).

{{<Note title="Use a custom tileset">}}
This example uses U.S. county data uploaded to Mapbox as a vector tileset. This data is not updated or maintained and **should not be used in production applications.**

If you're interested in creating an application that uses U.S. county data, you can download a Shapefile from [census.gov's data portal](https://www.census.gov/geographies/mapping-files/time-series/geo/cartographic-boundary.html) and upload it to Mapbox Studio's [Tilesets page](https://studio.mapbox.com/tilesets/).
{{</Note>}}

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
