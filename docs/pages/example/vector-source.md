---
title: Add a vector tile source
description: Add a vector source to a map.
topics:
  - Sources
thumbnail: vector-source
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './vector-source.html?code';"
- "import iframe from './vector-source.html?iframe';"
---

Add a [vector source](/mapbox-gl-js/style-spec/sources/#vector) to a map.

Add any Mapbox-hosted tileset using its tileset URL (`mapbox://` + [tileset ID](https://docs.mapbox.com/help/glossary/tileset-id/)). To find a list of _Default tilesets_ provided by Mapbox and _Custom tilesets_ you have uploaded to your account, sign into Mapbox Studio and visit the [Tilesets](https://studio.mapbox.com/tilesets/) page.

{{ <Example html={html} iframeSrc={iframe} {...this.props} /> }}
