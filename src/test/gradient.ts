import * as assert from 'assert'
import * as fs from 'fs'
import { createImage } from '@rgba-image/create-image'
import { fromPng } from '@rgba-image/png'
import { setRegion, setRegionUint32 } from '@rgba-image/pixel'
import {
  RgbaStop, RgbaUint32Stop, rgbaToUint32, isLittleEndian, ChannelStop
} from '@rgba-image/common'
import {
  gradientRgba, gradientRgbaUInt32, gradientChannel
} from '..'

const gradientRgbaPng = fs.readFileSync( './src/test/fixtures/gradient-rgba.png' )
const expectGradientRgba = fromPng( gradientRgbaPng )

describe( 'color', () => {
  describe( 'gradient', () => {
    it( 'gradientRgba', () => {
      const width = 64
      const height = 64
      const dest = createImage( width, height )

      const stops: RgbaStop[] = [
        [ 51, 153, 255, 255, 0.5 ],
        [ 51, 153, 255, 128, 0.25 ],
        [ 255, 255, 255, 255, 0.75 ]
      ]

      const step = 1 / width
      let xCache = {}

      setRegion(
        dest,
        ( _r, _g, _b, _a, x ) => {
          if( !( x in xCache ) ) {
            xCache[ x ] = gradientRgba( stops, x * step )
          }

          return xCache[ x ]
        }
      )

      assert.deepEqual( dest, expectGradientRgba )
    })

    it( 'gradientRgbaUint32', () => {
      const width = 64
      const height = 64
      const dest = createImage( width, height )

      const stops: RgbaUint32Stop[] = [
        [ rgbaToUint32( 51, 153, 255, 255, isLittleEndian ), 0.5 ],
        [ rgbaToUint32( 51, 153, 255, 128, isLittleEndian ), 0.25 ],
        [ rgbaToUint32( 255, 255, 255, 255, isLittleEndian ), 0.75 ]
      ]

      const step = 1 / width
      let xCache = {}

      setRegionUint32(
        dest,
        ( _r, _g, _b, _a, x ) => {
          if ( !( x in xCache ) ) {
            xCache[ x ] = gradientRgbaUInt32( stops, x * step )
          }

          return xCache[ x ]
        }
      )

      assert.deepEqual( dest, expectGradientRgba )
    } )

    it( 'gradientChannel', () => {
      const width = 64
      const height = 64
      const dest = createImage( width, height )

      const redStops: ChannelStop[] = [
        [ 51, 0.5 ],
        [ 51, 0.25 ],
        [ 255, 0.75 ]
      ]
      const greenStops: ChannelStop[] = [
        [ 153, 0.5 ],
        [ 153, 0.25 ],
        [ 255, 0.75 ]
      ]
      const blueStops: ChannelStop[] = [
        [ 255, 0.5 ],
        [ 255, 0.25 ],
        [ 255, 0.75 ]
      ]
      const alphaStops: ChannelStop[] = [
        [ 255, 0.5 ],
        [ 128, 0.25 ],
        [ 255, 0.75 ]
      ]

      const step = 1 / width
      let xCache = {}

      setRegion(
        dest,
        ( _r, _g, _b, _a, x ) => {
          if ( !( x in xCache ) ) {
            xCache[ x ] = [
              gradientChannel( redStops, x * step ),
              gradientChannel( greenStops, x * step ),
              gradientChannel( blueStops, x * step ),
              gradientChannel( alphaStops, x * step )
            ]
          }

          return xCache[ x ]
        }
      )

      assert.deepEqual( dest, expectGradientRgba )
    })

    it( 'gradientRgba with one stop', () => {
      const stops: RgbaStop[] = [
        [ 51, 153, 255, 128, 0 ]
      ]

      const color = gradientRgba( stops, 0.5 )
      const expect = [ 51, 153, 255, 128 ]

      assert.deepEqual( color, expect )
    } )

    it( 'bad arguments', () => {
      assert.throws( () => gradientRgba( [], 0 ) )
      assert.throws( () => gradientRgba( <any>[ 0 ], 0 ) )
      assert.throws( () => gradientRgbaUInt32( <any>[ 0 ], 0 ) )
      assert.throws( () => gradientChannel( <any>[ 0 ], 0 ) )
    })
  })
})