---
title: Display driving directions
description: Use the mapbox-gl-directions plugin to show results from the Mapbox Directions API.
topics:
  - Controls and overlays
thumbnail: mapbox-gl-directions
contentType: example
layout: example
language:
- JavaScript
products:
- Directions API
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './mapbox-gl-directions.html?code';"
- "import iframe from './mapbox-gl-directions.html?iframe';"
- "import Note from '@mapbox/dr-ui/note';"
---

Use the [mapbox-gl-directions](https://github.com/mapbox/mapbox-gl-directions) plugin to show results from the Mapbox Directions API. Click the map to add an origin and destination. 

{{<Note title='Mapbox Directions API pricing' theme="default">}}
The Mapbox Directions API is billed per request. Review the Directions API [pricing documentation](https://docs.mapbox.com/api/navigation/directions/#directions-api-pricing) for more information.
{{</Note>}}

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
