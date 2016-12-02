# browser-logo-icon-set

This is a [grunticon](https://github.com/filamentgroup/grunticon/) icon set sourced from images provided by [alrra/browser-logos](https://github.com/alrra/browser-logos). Preferring vector images when available, currently with 3 bitmaps and 8 vector images.  Always load asynchronously.

Grunticon example usage included in `usage.html`.

## Includes

* Android Default Browser (_Bitmap_)
* Chrome
* Edge
* Edge (Tile)
* Firefox (_Bitmap, an SVG option was available but it was much too large_)
* Internet Explorer
* Internet Explorer (Tile)
* Opera
* Opera Mini (_Bitmap_)
* Safari
* Mobile Safari (iOS)

## Deliverables

For your convenience we provide your choice of source image sizes:

### Uses 64x64 PNG sources when SVG is not available

`64/icons.data.svg.css`: 33.15KB (GZIP)

### Uses 128x128 PNG sources when SVG is not available

`128/icons.data.svg.css`: 42.45KB (GZIP) (not including one 27KB icon that could not be embedded, see addendum #1)

## Addendum

1. Grunticon [IE8 Data URI max limit](https://github.com/filamentgroup/grunticon/issues/75)