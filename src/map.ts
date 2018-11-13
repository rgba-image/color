import {
  rgbaToUint32, isLittleEndian, MapRgba, MapRgbaUint32, clampByte
} from '@rgba-image/common'

import { MapChannel } from '@rgba-image/common/dist/types'

export const grayscale: MapRgba = ( r: number, g: number, b: number, a: number ) => {
  r = r | 0
  g = g | 0
  b = b | 0
  a = a | 0

  const gray = 0.2126 * r + 0.7152 * g + 0.0722 * b

  return [ gray | 0, gray | 0, gray | 0, a ]
}

export const grayscaleUint32: MapRgbaUint32 = ( r: number, g: number, b: number, a: number ) => {
  r = r | 0
  g = g | 0
  b = b | 0
  a = a | 0

  const gray = 0.2126 * r + 0.7152 * g + 0.0722 * b

  return rgbaToUint32( gray, gray, gray, a, isLittleEndian )
}

export const sepia: MapRgba = ( r: number, g: number, b: number, a: number ) => {
  r = r | 0
  g = g | 0
  b = b | 0
  a = a | 0

  return [
    clampByte( r * 0.393 + g * 0.769 + b * 0.189 ),
    clampByte( r * 0.349 + g * 0.686 + b * 0.168 ),
    clampByte( r * 0.272 + g * 0.534 + b * 0.131 ),
    a
  ]
}

export const sepiaUint32: MapRgbaUint32 = ( r: number, g: number, b: number, a: number ) => {
  r = r | 0
  g = g | 0
  b = b | 0
  a = a | 0

  return rgbaToUint32(
    clampByte( r * 0.393 + g * 0.769 + b * 0.189 ),
    clampByte( r * 0.349 + g * 0.686 + b * 0.168 ),
    clampByte( r * 0.272 + g * 0.534 + b * 0.131 ),
    a,
    isLittleEndian
  )
}

export const invert: MapRgba = ( r: number, g: number, b: number, a: number ) => {
  r = r | 0
  g = g | 0
  b = b | 0
  a = a | 0

  r = 255 - r
  g = 255 - g
  b = 255 - b

  return [ r, g, b, a ]
}

export const invertUint32: MapRgbaUint32 = ( r: number, g: number, b: number, a: number ) => {
  r = r | 0
  g = g | 0
  b = b | 0
  a = a | 0

  r = 255 - r
  g = 255 - g
  b = 255 - b

  return rgbaToUint32( r, g, b, a, isLittleEndian )
}

export const invertChannel: MapChannel = ( source: number ) => {
  source = source | 0
  source = 255 - source

  return source
}
