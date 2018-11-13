import * as assert from 'assert'
import * as fs from 'fs'
import { fromPng } from '@rgba-image/png'
import { setRegion, setRegionUint32 } from '@rgba-image/pixel'
import {
  grayscale, grayscaleUint32, sepia, sepiaUint32, invert, invertUint32,
  invertChannel
} from '..'

const patternPng = fs.readFileSync( './src/test/fixtures/pattern.png' )
const expectPatternGrayscalePng = fs.readFileSync( './src/test/fixtures/pattern-grayscale.png' )
const expectPatternSepiaPng = fs.readFileSync( './src/test/fixtures/pattern-sepia.png' )
const expectPatternInvertPng = fs.readFileSync( './src/test/fixtures/pattern-invert.png' )

const expectPatternGrayscale = fromPng( expectPatternGrayscalePng )
const expectPatternSepia = fromPng( expectPatternSepiaPng )
const expectPatternInvert = fromPng( expectPatternInvertPng )

describe( 'color', () => {
  describe( 'map', () => {
    it( 'grayscale', () => {
      const patternGrayscale = fromPng( patternPng )

      setRegion( patternGrayscale, grayscale )

      assert.deepEqual( patternGrayscale, expectPatternGrayscale )
    } )

    it( 'grayscaleUint32', () => {
      const patternGrayscale = fromPng( patternPng )

      setRegionUint32( patternGrayscale, grayscaleUint32 )

      assert.deepEqual( patternGrayscale, expectPatternGrayscale )
    } )

    it( 'sepia', () => {
      const patternSepia = fromPng( patternPng )

      setRegion( patternSepia, sepia )

      assert.deepEqual( patternSepia, expectPatternSepia )
    } )

    it( 'sepiaUint32', () => {
      const patternSepia = fromPng( patternPng )

      setRegionUint32( patternSepia, sepiaUint32 )

      assert.deepEqual( patternSepia, expectPatternSepia )
    } )

    it( 'invert', () => {
      const patternInvert = fromPng( patternPng )

      setRegion( patternInvert, invert )

      assert.deepEqual( patternInvert, expectPatternInvert )
    } )

    it( 'invertUint32', () => {
      const patternInvert = fromPng( patternPng )

      setRegionUint32( patternInvert, invertUint32 )

      assert.deepEqual( patternInvert, expectPatternInvert )
    } )

    it( 'invertChannel', () => {
      const patternInvert = fromPng( patternPng )

      setRegion( patternInvert, ( r, g, b, a ) => [
        invertChannel( r ),
        invertChannel( g ),
        invertChannel( b ),
        a
      ])

      assert.deepEqual( patternInvert, expectPatternInvert )
    } )
  })
})