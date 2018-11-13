import * as assert from 'assert'
import * as fs from 'fs'
import { fromPng } from '@rgba-image/png'
import { CompositeMode } from '@rgba-image/common'
import { mapRegion, mapRegionUint32 } from '@rgba-image/pixel'
import { compositeRgba, compositeRgbaUint32 } from '..'

const compositeNames: string[] = [
  'normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten',
  'hard-light', 'difference', 'exclusion'
]

const patternPng = fs.readFileSync( './src/test/fixtures/pattern-simple.png' )
const overlayPng = fs.readFileSync( './src/test/fixtures/overlay.png' )
const expectCompositePngs = compositeNames.map( name =>
  fs.readFileSync( `./src/test/fixtures/composite-${ name }.png` )
)

const overlay = fromPng( overlayPng )
const expectComposites = expectCompositePngs.map( png => fromPng( png ) )

describe( 'color', () => {
  describe( 'composite', () => {
    compositeNames.forEach( ( name, i ) => {
      it( `composite mode ${ name }`, () => {
        const dest = fromPng( patternPng )

        mapRegion(
          overlay, dest,
          ( sR, sG, sB, sA, dR, dG, dB, dA ) => {
            return compositeRgba( sR, sG, sB, sA, dR, dG, dB, dA, <CompositeMode>i )
          }
        )

        assert.deepEqual( dest, expectComposites[ i ] )
      } )

      it( `composite mode uint32 ${ name }`, () => {
        const dest = fromPng( patternPng )

        mapRegionUint32(
          overlay, dest,
          ( sR, sG, sB, sA, dR, dG, dB, dA ) => {
            return compositeRgbaUint32( sR, sG, sB, sA, dR, dG, dB, dA, <CompositeMode>i )
          }
        )

        assert.deepEqual( dest, expectComposites[ i ] )
      } )
    } )

    it( 'bad arguments', () => {
      assert.throws( () => compositeRgba( 0, 0, 0, 0, 0, 0, 0, 0, -1 ) )
      assert.throws( () => compositeRgbaUint32( 0, 0, 0, 0, 0, 0, 0, 0, -1 ) )
    } )
  } )
} )
