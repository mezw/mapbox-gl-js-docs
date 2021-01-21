---
title: Filter features within map view
description: Move the map to query viewable features in a vector tile layer and filter by typing in an input.
topics:
  - User interaction
thumbnail: filter-features-within-map-view
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './filter-features-within-map-view.html';"
---

This example uses [`queryRenderedFeatures`](/mapbox-gl-js/api/map/#map#queryrenderedfeatures) to restrict a list of features in a vector tile layer to only return those that are visible in the map view. 

{{ <Example html={html} {...this.props} /> }}
