import {
  AdjustRgba, AdjustRgbaUint32, AdjustChannel, rgbaToUint32, isLittleEndian,
  clampByte
} from '@rgba-image/common'

export const brightness: AdjustRgba = ( r: number, g: number, b: number, a: number, amount: number ) => {
  r = r | 0
  g = g | 0
  b = b | 0
  a = a | 0

  amount = amount < -1 ? -1 : amount
  amount = amount > 1 ? 1 : amount

  if( amount < 0 ){
    r *= ( 1 + amount )
    g *= ( 1 + amount )
    b *= ( 1 + amount )
  } else {
    r += ( 255 - r ) * amount
    g += ( 255 - g ) * amount
    b += ( 255 - b ) * amount
  }

  return [ r | 0, g | 0, b | 0, a ]
}

export const brightnessUint32: AdjustRgbaUint32 = ( r: number, g: number, b: number, a: number, amount: number ) => {
  r = r | 0
  g = g | 0
  b = b | 0
  a = a | 0

  amount = amount < -1 ? -1 : amount
  amount = amount > 1 ? 1 : amount

  if ( amount < 0 ) {
    r *= ( 1 + amount )
    g *= ( 1 + amount )
    b *= ( 1 + amount )
  } else {
    r += ( 255 - r ) * amount
    g += ( 255 - g ) * amount
    b += ( 255 - b ) * amount
  }

  return rgbaToUint32( r, g, b, a, isLittleEndian )
}

export const brightnessChannel: AdjustChannel = ( source: number, amount: number ) => {
  source = source | 0

  amount = amount < -1 ? -1 : amount
  amount = amount > 1 ? 1 : amount

  if ( amount < 0 ) {
    source *= ( 1 + amount )
  } else {
    source += ( 255 - source ) * amount
  }

  return source | 0
}

export const contrast: AdjustRgba = ( r: number, g: number, b: number, a: number, amount: number ) => {
  r = r | 0
  g = g | 0
  b = b | 0
  a = a | 0

  amount = amount < -1 ? -1 : amount
  amount = amount > 1 ? 1 : amount
  amount *= 255

  const factor = ( 259 * ( amount + 255 ) ) / ( 255 * ( 259 - amount ) )

  r = clampByte( factor * ( r - 127 ) + 127 )
  g = clampByte( factor * ( g - 127 ) + 127 )
  b = clampByte( factor * ( b - 127 ) + 127 )

  return [ r, g, b, a ]
}

export const contrastUint32: AdjustRgbaUint32 = ( r: number, g: number, b: number, a: number, amount: number ) => {
  r = r | 0
  g = g | 0
  b = b | 0
  a = a | 0

  amount = amount < -1 ? -1 : amount
  amount = amount > 1 ? 1 : amount
  amount *= 255

  const factor = ( 259 * ( amount + 255 ) ) / ( 255 * ( 259 - amount ) )

  r = clampByte( factor * ( r - 127 ) + 127 )
  g = clampByte( factor * ( g - 127 ) + 127 )
  b = clampByte( factor * ( b - 127 ) + 127 )


  return rgbaToUint32( r, g, b, a, isLittleEndian )
}

export const contrastChannel: AdjustChannel = ( source: number, amount: number ) => {
  amount = amount < -1 ? -1 : amount
  amount = amount > 1 ? 1 : amount
  amount *= 255

  const factor = ( 259 * ( amount + 255 ) ) / ( 255 * ( 259 - amount ) )

  return clampByte( factor * ( source - 127 ) + 127 )
}

export const posterize: AdjustRgba = ( r: number, g: number, b: number, a: number, amount: number ) => {
  r = r | 0
  g = g | 0
  b = b | 0
  a = a | 0

  amount = Math.max( 2, clampByte( amount ) )

  const areas = 256 / amount
  const values = 255 / ( amount - 1 )

  r = values * ( ( r / areas ) | 0 )
  g = values * ( ( g / areas ) | 0 )
  b = values * ( ( b / areas ) | 0 )

  return [ r | 0, g | 0, b | 0, a ]
}

export const posterizeUint32: AdjustRgbaUint32 = ( r: number, g: number, b: number, a: number, amount: number ) => {
  r = r | 0
  g = g | 0
  b = b | 0
  a = a | 0

  amount = Math.max( 2, clampByte( amount ) )

  const areas = 256 / amount
  const values = 255 / ( amount - 1 )

  r = values * ( ( r / areas ) | 0 )
  g = values * ( ( g / areas ) | 0 )
  b = values * ( ( b / areas ) | 0 )

  return rgbaToUint32( r, g, b, a, isLittleEndian )
}

export const posterizeChannel: AdjustChannel = ( source: number, amount: number ) => {
  source = source | 0

  amount = Math.max( 2, clampByte( amount ) )

  const areas = 256 / amount
  const values = 255 / ( amount - 1 )

  source = values * ( ( source / areas ) | 0 )

  return source | 0
}

export const opacity: AdjustRgba = ( r: number, g: number, b: number, a: number, amount: number ) => {
  r = r | 0
  g = g | 0
  b = b | 0
  a = a | 0

  amount = Math.max( 0, amount )
  amount = Math.min( 1, amount )

  a *= amount

  return [ r, g, b, a | 0 ]
}

export const opacityUint32: AdjustRgbaUint32 = ( r: number, g: number, b: number, a: number, amount: number ) => {
  r = r | 0
  g = g | 0
  b = b | 0
  a = a | 0

  amount = Math.max( 0, amount )
  amount = Math.min( 1, amount )

  a *= amount

  return rgbaToUint32( r, g, b, a, isLittleEndian )
}
