---
title: Generate and add a missing icon to the map
description: Dynamically generate an image not available in a map style at runtime and add it to the map style.
topics:
  - Styles
  - Layers
thumbnail: add-image-missing-generated
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './add-image-missing-generated.html?code';"
- "import iframe from './add-image-missing-generated.html?iframe';"
---

This example uses [`addLayer`](/mapbox-gl-js/api/map/#map#addlayer) to add a layer to a [style](https://docs.mapbox.com/help/glossary/style/), but it references an image that does not exist in the style's [sprite](https://docs.mapbox.com/help/glossary/sprite) or list of available images. Since the image is missing, the property that references the image throws a [`styleimagemissing`](/mapbox-gl-js/api/map/#map.event:styleimagemissing) event.

This example uses that `styleimagemissing` event to detect the missing image, then it generates a new image and adds that image to the map style with [`addImage`](/mapbox-gl-js/api/map/#map#addimage) within the event listener callback to make sure that an icon is rendered even if the referenced image is missing.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
