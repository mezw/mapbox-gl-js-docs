---
title: Highlight features within a bounding box
description: Hold the Shift key and drag the map to query features using queryRenderedFeatures.
topics:
  - User interaction
thumbnail: using-box-queryrenderedfeatures
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './using-box-queryrenderedfeatures.html?code';"
- "import iframe from './using-box-queryrenderedfeatures.html?iframe';"
---

Hold <kbd>Shift</kbd> and drag the map to query features using [`queryRenderedFeatures`](/mapbox-gl-js/api/map/#map#queryrenderedfeatures).

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
