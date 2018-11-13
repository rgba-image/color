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

`brightnessUint32` returns the same, but as `uint32`

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

`contrastUint32` returns the same, but as `uint32`

Or use `contrastChannel` for a single channel:

```js
const newRed = contrastChannel( red, 0.5 )
```

### compositeRgba

Get a new color which is the composite of a color over another using one of
several composite modes:

```js
export const COMPOSITE_NORMAL = 0
export const COMPOSITE_MULTIPLY = 1
export const COMPOSITE_SCREEN = 2
export const COMPOSITE_OVERLAY = 3
export const COMPOSITE_DARKEN = 4
export const COMPOSITE_LIGHTEN = 5
export const COMPOSITE_HARD_LIGHT = 6
export const COMPOSITE_DIFFERENCE = 7
export const COMPOSITE_EXCLUSION = 8
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