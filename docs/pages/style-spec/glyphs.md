---
title: Glyphs
id: glyphs
description: A style's glyphs property provides a URL template for loading signed-distance-field glyph sets in PBF format.
contentType: specification
order: 6
layout: page
products:
- Mapbox Style Specification
prependJs:
    - "import ref from '@mapbox/mapbox-gl-style-spec/reference/latest';"
---

<!--copyeditor disable basic-->

A style's `glyphs` property provides a URL template for loading signed-distance-field glyph sets in PBF format. This property is created by Mapbox Studio automatically, and it is unlikely you will need to change it. Your map client (Mapbox GL JS, for example) will generate and send glyph requests to the specified font server using the URL template you provide.

```json
"glyphs": {{JSON.stringify(
    ref.$root.glyphs.example,
    null,
    2
)}}
```

This URL template should include two tokens:

- `{fontstack}` When requesting glyphs, this token is replaced with a comma separated list of fonts from a font stack specified in the [`text-font`](/mapbox-gl-js/style-spec/layers/#layout-symbol-text-font) property of a symbol layer.
- `{range}` When requesting glyphs, this token is replaced with a range of 256 Unicode code points. For example, to load glyphs for the [Unicode Basic Latin and Basic Latin-1 Supplement blocks](https://en.wikipedia.org/wiki/Unicode_block), the range would be `0-255`. The actual ranges that are loaded are determined at runtime based on what text needs to be displayed.
