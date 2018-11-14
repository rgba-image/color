import { Rgba, rgbaToUint32, isLittleEndian } from '@rgba-image/common'

export const mix = (
  r0: number, g0: number, b0: number, a0: number,
  r1: number, g1: number, b1: number, a1: number,
  amount = 0.5
) => {
  r0 = r0 | 0
  g0 = g0 | 0
  b0 = b0 | 0
  a0 = a0 | 0
  r1 = r1 | 0
  g1 = g1 | 0
  b1 = b1 | 0
  a1 = a1 | 0

  amount = Math.max( 0, amount )
  amount = Math.min( 1, amount )

  const r = ( r1 - r0 ) * amount + r0
  const g = ( g1 - g0 ) * amount + g0
  const b = ( b1 - b0 ) * amount + b0
  const a = ( a1 - a0 ) * amount + a0

  return <Rgba>[ r | 0, g | 0, b | 0, a | 0 ]
}

export const mixUint32 = (
  r0: number, g0: number, b0: number, a0: number,
  r1: number, g1: number, b1: number, a1: number,
  amount = 0.5
) => {
  r0 = r0 | 0
  g0 = g0 | 0
  b0 = b0 | 0
  a0 = a0 | 0
  r1 = r1 | 0
  g1 = g1 | 0
  b1 = b1 | 0
  a1 = a1 | 0

  amount = Math.max( 0, amount )
  amount = Math.min( 1, amount )

  const r = ( r1 - r0 ) * amount + r0
  const g = ( g1 - g0 ) * amount + g0
  const b = ( b1 - b0 ) * amount + b0
  const a = ( a1 - a0 ) * amount + a0

  return rgbaToUint32( r, g, b, a, isLittleEndian )
}

export const mixChannel = ( c0: number, c1: number, amount = 0.5 ) => {
  c0 = c0 | 0
  c1 = c1 | 0

  amount = Math.max( 0, amount )
  amount = Math.min( 1, amount )

  const c = ( c1 - c0 ) * amount + c0

  return c | 0
}
