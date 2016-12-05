# browser-logo-icon-set

This is a multi-color [grunticon](https://github.com/filamentgroup/grunticon/) icon set of web browser logos. Sourced from images provided by [alrra/browser-logos](https://github.com/alrra/browser-logos). Preferring vector images when available and when file size agrees.

## [Demo](https://zachleat.github.io/browser-logo-icon-set/usage.html)

## Browser Compatibility

Same as [documented grunticon compatibility](https://github.com/filamentgroup/grunticon/#browser-testing-results-for-icon-output).

## Included Icons

* Android Default Browser (_Bitmap_)
* Chrome
* Edge
* Edge (Tile)
* Firefox (_Bitmap at 64x64, SVG at 128x128_)
* Internet Explorer
* Internet Explorer (Tile)
* Opera
* Opera Mini (_Bitmap_)
* Safari
* Mobile Safari (iOS)

## Deliverables

For your convenience we provide your choice of source image sizes:

### Uses 16x16 PNG sources only (for lowsrc defaults)

`16/icons.data.svg.css`: 8.15KB (GZIP)

### Uses 64x64 PNG sources when SVG is not available

`64/icons.data.svg.css`: 28.78KB (GZIP)

### Uses 128x128 PNG sources when SVG is not available

`128/icons.data.svg.css`: 46.27KB (GZIP) (not including one 27KB icon that could not be embedded, see addendum #1)

## Addendum

1. Grunticon [IE8 Data URI max limit](https://github.com/filamentgroup/grunticon/issues/75)