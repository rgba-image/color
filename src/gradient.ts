import {
  RgbaStop, Rgba, isRgbaStop, RgbaUint32Stop, uint32ToRgba, isLittleEndian,
  ChannelStop, isRgbaUint32Stop, isChannelStop
} from '@rgba-image/common'

import { mix, mixUint32, mixChannel } from './mix'

export const gradientRgba = ( stops: RgbaStop[], position: number ): Rgba => {
  if ( !stops.every( isRgbaStop ) ) throw Error( 'Expected an array of RgbaStop' )

  stops = <RgbaStop[]>sortStops( stops )

  const [ leftIndex, rightIndex ] = findBoundingIndices( position, stops )

  const leftStop = stops[ leftIndex ]
  const [ r0, g0, b0, a0 ] = leftStop

  if( leftIndex === rightIndex ) return [ r0, g0, b0, a0 ]

  const rightStop = stops[ rightIndex ]
  const [ r1, g1, b1, a1 ] = rightStop

  const leftPosition = leftStop[ 4 ]
  const rightPosition = rightStop[ 4 ]
  const delta = rightPosition - leftPosition
  const positionDelta = position - leftPosition
  const amount = positionDelta / delta

  const color = mix( r0, g0, b0, a0, r1, g1, b1, a1, amount )

  return color
}

export const gradientRgbaUInt32 = ( stops: RgbaUint32Stop[], position: number ): number => {
  if ( !stops.every( isRgbaUint32Stop ) ) throw Error( 'Expected an array of RgbaUint32Stop' )

  stops = <RgbaUint32Stop[]>sortStops( stops, 1 )

  const [ leftIndex, rightIndex ] = findBoundingIndices( position, stops, 1 )

  const leftStop = stops[ leftIndex ]
  const [ v0 ] = leftStop

  if ( leftIndex === rightIndex ) return v0

  const [ r0, g0, b0, a0 ] = uint32ToRgba( v0, isLittleEndian )

  const rightStop = stops[ rightIndex ]
  const [ v1 ] = rightStop
  const [ r1, g1, b1, a1 ] = uint32ToRgba( v1, isLittleEndian )

  const leftPosition = leftStop[ 1 ]
  const rightPosition = rightStop[ 1 ]
  const delta = rightPosition - leftPosition
  const positionDelta = position - leftPosition
  const amount = positionDelta / delta

  const color = mixUint32( r0, g0, b0, a0, r1, g1, b1, a1, amount )

  return color
}

export const gradientChannel = ( stops: ChannelStop[], position: number ): number => {
  if ( !stops.every( isChannelStop ) ) throw Error( 'Expected an array of ChannelStop' )

  stops = <ChannelStop[]>sortStops( stops, 1 )

  const [ leftIndex, rightIndex ] = findBoundingIndices( position, stops, 1 )

  const leftStop = stops[ leftIndex ]
  const [ c0 ] = leftStop

  if ( leftIndex === rightIndex ) return c0

  const rightStop = stops[ rightIndex ]
  const [ c1 ] = rightStop

  const leftPosition = leftStop[ 1 ]
  const rightPosition = rightStop[ 1 ]
  const delta = rightPosition - leftPosition
  const positionDelta = position - leftPosition
  const amount = positionDelta / delta

  const color = mixChannel( c0, c1, amount )

  return color
}

const findBoundingIndices = ( position: number, sortedStops: number[][], positionIndex = 4 ): [ number, number ] => {
  const { length } = sortedStops

  if ( length === 1 ) return [ 0, 0 ]
  if ( length && sortedStops[ 0 ][ positionIndex ] > position ) return [ 0, 0 ]
  if ( length && sortedStops[ length - 1 ][ positionIndex ] < position )
    return [ length - 1, length - 1 ]

  for ( let i = 0; i < length; i++ ) {
    const current = sortedStops[ i ]
    const next = sortedStops[ i + 1 ]

    if ( current[ positionIndex ] === position ){
      return [ i, i ]
    }

    if (
      current[ positionIndex ] < position && next[ positionIndex ] > position
    ){
      return [ i, i + 1 ]
    }
  }

  throw Error( 'No positions' )
}

const sortStops = ( stops: number[][], positionIndex = 4 ) =>
  stops.slice().sort( ( a, b ) => a[ positionIndex ] - b[ positionIndex ] )
