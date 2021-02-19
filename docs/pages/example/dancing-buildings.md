---
title: Animate 3D buildings based on ambient sounds
description: Make a 3D map that responds to sounds from your environment.
topics:
  - User interaction
thumbnail: dancing-buildings
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './dancing-buildings.html?code';"
- "import iframe from './dancing-buildings.html?iframe';"
---

This example uses [runtime styling](https://docs.mapbox.com/help/glossary/runtime-styling/) with the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) to create a map where the 3D buildings dynamically change height to the rhythm of your ambient environment, giving the appearance of dancing.

It uses [`getUserMedia`](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) to access audio from the user's environment, then analyzes that sound for loudness and uses the loudness levels to adjust the [`fill-extrusion-height`](/mapbox-gl-js/style-spec/layers/?size=n_10_n#paint-fill-extrusion-fill-extrusion-height) property of the [`fill-extrusion` layer](/mapbox-gl-js/style-spec/layers/#fill-extrusion).

To optimize performance, it uses the [`==`](/mapbox-gl-js/style-spec/expressions/#==), [`>`](/mapbox-gl-js/style-spec/expressions/#%3E) and [`<=`](/mapbox-gl-js/style-spec/expressions/#%3C=) expression operators to filter buildings in the layer based on their height data.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
