# color

Color operations

## install

`npm install @rgba-image/color`

## usage

### brightness

Adjust the brightness of a color

```js
const { brightness } = require( '@rgba-image/color' )

// define r, g, b, a

const amount = 0.5
const newColor = brightness( r, g, b, a, amount )
```

The `amount` argument should be between `-1` and `1`

`brightnessUint32` takes the same arguments, but returns a `uint32` color

Or use `brightnessChannel` for a single channel:

```js
const newRed = brightnessChannel( red, 0.5 )
```

### contrast

Adjust the contrast of a color

```js
const { contrast } = require( '@rgba-image/color' )

// define r, g, b, a

const amount = 0.5
const newColor = contrast( r, g, b, a, amount )
```

The `amount` argument should be between `-1` and `1`

`contrastUint32` takes the same arguments, but returns a `uint32` color

Or use `contrastChannel` for a single channel:

```js
const newRed = contrastChannel( red, 0.5 )
```

### posterize

Applies a posterization effect to a color

```js
const { posterize } = require( '@rgba-image/color' )

// define r, g, b, a

const amount = 5
const newColor = posterize( r, g, b, a, amount )
```

The `amount` argument should be between `2` and `255`

`posterizeUint32` takes the same arguments, but returns a `uint32` color

Or use `posterizeChannel` for a single channel:

```js
const newRed = posterizeChannel( red, 5 )
```

### opacity

Adjust the opacity of a color

```js
const { opacity } = require( '@rgba-image/color' )

// define r, g, b, a

const amount = 0.5
const newColor = opacity( r, g, b, a, amount )
```

The `amount` argument should be between `0` and `1` and will be used to adjust
the existing opacity

`opacityUint32` takes the same arguments, but returns a `uint32` color

### compositeRgba

Get a new color which is the composite of a color over another using one of
several composite modes:

```js
const COMPOSITE_NORMAL = 0
const COMPOSITE_MULTIPLY = 1
const COMPOSITE_SCREEN = 2
const COMPOSITE_OVERLAY = 3
const COMPOSITE_DARKEN = 4
const COMPOSITE_LIGHTEN = 5
const COMPOSITE_HARD_LIGHT = 6
const COMPOSITE_DIFFERENCE = 7
const COMPOSITE_EXCLUSION = 8
```

```js
const { compositeRgba, COMPOSITE_NORMAL } = require( '@rgba-image/color' )

const sourceR = 51
const sourceG = 153
const sourceB = 255
const sourceA = 128

const destR = 255
const destG = 153
const destB = 51
const destA = 224

const [ newR, newG, newB, newA ] = compositeRgba(
  sourceR, sourceG, sourceB, sourceA,
  destR, destG, destB, destA,
  COMPOSITE_NORMAL
)
```

Or, as a `Uint32`:

```js
const { compositeRgbaUint32, COMPOSITE_NORMAL } = require( '@rgba-image/color' )

const sourceR = 51
const sourceG = 153
const sourceB = 255
const sourceA = 128

const destR = 255
const destG = 153
const destB = 51
const destA = 224

const color = compositeRgbaUint32(
  sourceR, sourceG, sourceB, sourceA,
  destR, destG, destB, destA,
  COMPOSITE_NORMAL
)
```

### gradientRgba

Given a gradient of one or more stops, find the RGBA color at a given position:

```js
const { gradientRgba } = require( '@rgba-image/color' )

const startR = 51
const startG = 153
const startB = 255
const startA = 128

const midR = 51
const midG = 153
const midB = 255
const midA = 255

const endR = 255
const endG = 255
const endB = 255
const endA = 255

const stops = [
  [ startR, startG, startB, startA, 0.25 ],
  [ midR, midG, midB, midA, 0.5 ],
  [ endR, endG, endB, endA, 0.75 ]
]

// get the color at the 60% position
const color = gradientRgba( stops, 0.6 )
```

A stop is an array containing `[ R, G, B, A, position ]`

`position` is treated as being on a line from 0 to 1, but you can create
positions outside of the line boundaries if you wish

You can also work with gradients where the stops are `uint32` values:

```js
// these are the same as the rgba stops above, but as uint32 numbers
const stops = [
  [ 2164234547, 0.25 ],
  [ 4294940979, 0.5 ],
  [ 4294967295, 0.75 ]
]

// get the uint32 color at the 60% position
const color = gradientRgbaUint32( stops, 0.6 )
```

Or a single channel:

```js
const startR = 51
const midR = 51
const endR = 255

const stops = [
  [ startR, 0.25 ],
  [ midR, 0.5 ],
  [ endR, 0.75 ]
]

// get the channel value at the 60% position
const newRed = gradientChannel( stops, 0.6 )
```

### grayscale

Convert a color to grayscale:

```js
const { grayscale } = require( '@rgba-image/color' )

const sourceR = 51
const sourceG = 153
const sourceB = 255
const sourceA = 128

const gray = grayscale( sourceR, sourceG, sourceB, sourceA )
```

Or get a uint32 color:

```js
const grayUint32 = grayscaleUint32( sourceR, sourceG, sourceB, sourceA )
```

### sepia

Convert a color to sepia:

```js
const { sepia } = require( '@rgba-image/color' )

const sourceR = 51
const sourceG = 153
const sourceB = 255
const sourceA = 128

const color = sepia( sourceR, sourceG, sourceB, sourceA )
```

Or get a uint32 color:

```js
const colorUint32 = sepiaUint32( sourceR, sourceG, sourceB, sourceA )
```

### invert

Invert a color:

```js
const { invert } = require( '@rgba-image/color' )

const sourceR = 51
const sourceG = 153
const sourceB = 255
const sourceA = 128

const color = invert( sourceR, sourceG, sourceB, sourceA )
```

Or as a uint32 color:

```js
const colorUint32 = invertUint32( sourceR, sourceG, sourceB, sourceA )
```

Or invert a single channel:

```js
const red = 51

const inverted = invertChannel( red )
```

### mix

Get a color that is a mixture of two other colors:

```js
const { mix } = require( '@rgba-image/color' )

const startR = 51
const startG = 153
const startB = 255
const startA = 128

const endR = 255
const endG = 255
const endB = 255
const endA = 255

const position = 0.25

const color = mix( startR, startG, startB, startA, endR, endG, endB, endA, position )
```

`position` should be a number between `0` and `1` - it is optional and if
omitted defaults to `0.5`, which mixes the colors together evenly

Or as a uint32 color:

```js
const colorUint32 = mixUint32( startR, startG, startB, startA, endR, endG, endB, endA, position )
```

Or a single channel:

```js
const startRed = 51
const endRed = 255
const position = 0.25

const newRed = mixChannel( startRed, endRed, position )
```

### rgbaValuesToStops

Create gradient stops evenly distributed along a line `0` to `1` from an array
of RGBA values:

```js
const { rgbaValuesToStops } = require( '@rgba-image/color' )

const colors = [
  [ 51, 153, 255, 255 ],
  [ 51, 153, 255, 128 ],
  [ 255, 255, 255, 255 ]
]

const stops = rgbaValuesToStops( colors )
```

Or from uint32 colors to `RgbaUint32Stops`:

```js
const colors = [ 2164234547, 4294940979, 4294967295 ]

const stops = rgbaUint32ValuesToStops( colors )
```

Or from channel values:

```js
const reds = [ 51, 51, 255 ]

const redStops = channelValuesToStops( reds )
```

## License

MIT License

Copyright (c) 2018 Nik Coughlin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.