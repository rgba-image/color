import * as assert from 'assert'
import * as fs from 'fs'
import { fromPng, toPng } from '@rgba-image/png'
import { setRegion, setRegionUint32 } from '@rgba-image/pixel'
import {
  brightness, brightnessUint32, brightnessChannel, contrast, contrastUint32,
  contrastChannel, posterize, posterizeUint32, posterizeChannel, opacity,
  opacityUint32
} from '..'

const patternPng = fs.readFileSync( './src/test/fixtures/pattern.png' )
const testGradientPng = fs.readFileSync( './src/test/fixtures/gradient.png' )
const expectPatternBrightness_05Png = fs.readFileSync( './src/test/fixtures/pattern-brightness--05.png' )
const expectPatternBrightness_10Png = fs.readFileSync( './src/test/fixtures/pattern-brightness--10.png' )
const expectPatternBrightness05Png = fs.readFileSync( './src/test/fixtures/pattern-brightness-05.png' )
const expectPatternBrightness10Png = fs.readFileSync( './src/test/fixtures/pattern-brightness-10.png' )
const expectPatternContrast_05Png = fs.readFileSync( './src/test/fixtures/pattern-contrast--05.png' )
const expectPatternContrast_10Png = fs.readFileSync( './src/test/fixtures/pattern-contrast--10.png' )
const expectPatternContrast05Png = fs.readFileSync( './src/test/fixtures/pattern-contrast-05.png' )
const expectPatternContrast10Png = fs.readFileSync( './src/test/fixtures/pattern-contrast-10.png' )
const expectGradientPosterize2Png = fs.readFileSync( './src/test/fixtures/gradient-posterize-2.png' )
const expectGradientPosterize3Png = fs.readFileSync( './src/test/fixtures/gradient-posterize-3.png' )
const expectGradientPosterize10Png = fs.readFileSync( './src/test/fixtures/gradient-posterize-10.png' )
const expectPatternOpacity0Png = fs.readFileSync( './src/test/fixtures/pattern-opacity-0.png' )
const expectPatternOpacity05Png = fs.readFileSync( './src/test/fixtures/pattern-opacity-05.png' )

const pattern = fromPng( patternPng )
const expectPatternBrightness_05 = fromPng( expectPatternBrightness_05Png )
const expectPatternBrightness_10 = fromPng( expectPatternBrightness_10Png )
const expectPatternBrightness05 = fromPng( expectPatternBrightness05Png )
const expectPatternBrightness10 = fromPng( expectPatternBrightness10Png )
const expectPatternContrast_05 = fromPng( expectPatternContrast_05Png )
const expectPatternContrast_10 = fromPng( expectPatternContrast_10Png )
const expectPatternContrast05 = fromPng( expectPatternContrast05Png )
const expectPatternContrast10 = fromPng( expectPatternContrast10Png )
const expectGradientPosterize2 = fromPng( expectGradientPosterize2Png )
const expectGradientPosterize3 = fromPng( expectGradientPosterize3Png )
const expectGradientPosterize10 = fromPng( expectGradientPosterize10Png )
const expectPatternOpacity0 = fromPng( expectPatternOpacity0Png )
const expectPatternOpacity05 = fromPng( expectPatternOpacity05Png )

describe( 'color', () => {
  describe( 'adjust', () => {
    describe( 'brightness', () => {
      it( '-1', () => {
        const patternBrightness = fromPng( patternPng )

        setRegion( patternBrightness, ( r, g, b, a ) => brightness( r, g, b, a, -1 ) )

        assert.deepEqual( patternBrightness, expectPatternBrightness_10 )
      } )

      it( '-0.5', () => {
        const patternBrightness = fromPng( patternPng )

        setRegion( patternBrightness, ( r, g, b, a ) => brightness( r, g, b, a, -0.5 ) )

        assert.deepEqual( patternBrightness, expectPatternBrightness_05 )
      } )

      it( '0', () => {
        const patternBrightness = fromPng( patternPng )

        setRegion( patternBrightness, ( r, g, b, a ) => brightness( r, g, b, a, 0 ) )

        assert.deepEqual( patternBrightness, pattern )
      } )

      it( '0.5', () => {
        const patternBrightness = fromPng( patternPng )

        setRegion( patternBrightness, ( r, g, b, a ) => brightness( r, g, b, a, 0.5 ) )

        assert.deepEqual( patternBrightness, expectPatternBrightness05 )
      } )

      it( '1', () => {
        const patternBrightness = fromPng( patternPng )

        setRegion( patternBrightness, ( r, g, b, a ) => brightness( r, g, b, a, 1 ) )

        assert.deepEqual( patternBrightness, expectPatternBrightness10 )
      } )

      it( 'clamps lower range to -1', () => {
        const patternBrightness = fromPng( patternPng )

        setRegion( patternBrightness, ( r, g, b, a ) => brightness( r, g, b, a, -2 ) )

        assert.deepEqual( patternBrightness, expectPatternBrightness_10 )
      } )

      it( 'clamps upper range to 1', () => {
        const patternBrightness = fromPng( patternPng )

        setRegion( patternBrightness, ( r, g, b, a ) => brightness( r, g, b, a, 2 ) )

        assert.deepEqual( patternBrightness, expectPatternBrightness10 )
      } )
    })

    describe( 'brightnessUint32', () => {
      it( '-1', () => {
        const patternBrightness = fromPng( patternPng )

        setRegionUint32( patternBrightness, ( r, g, b, a ) => brightnessUint32( r, g, b, a, -1 ) )

        assert.deepEqual( patternBrightness, expectPatternBrightness_10 )
      } )

      it( '-0.5', () => {
        const patternBrightness = fromPng( patternPng )

        setRegionUint32( patternBrightness, ( r, g, b, a ) => brightnessUint32( r, g, b, a, -0.5 ) )

        assert.deepEqual( patternBrightness, expectPatternBrightness_05 )
      } )

      it( '0', () => {
        const patternBrightness = fromPng( patternPng )

        setRegionUint32( patternBrightness, ( r, g, b, a ) => brightnessUint32( r, g, b, a, 0 ) )

        assert.deepEqual( patternBrightness, pattern )
      } )

      it( '0.5', () => {
        const patternBrightness = fromPng( patternPng )

        setRegionUint32( patternBrightness, ( r, g, b, a ) => brightnessUint32( r, g, b, a, 0.5 ) )

        assert.deepEqual( patternBrightness, expectPatternBrightness05 )
      } )

      it( '1', () => {
        const patternBrightness = fromPng( patternPng )

        setRegionUint32( patternBrightness, ( r, g, b, a ) => brightnessUint32( r, g, b, a, 1 ) )

        assert.deepEqual( patternBrightness, expectPatternBrightness10 )
      } )

      it( 'clamps lower range to -1', () => {
        const patternBrightness = fromPng( patternPng )

        setRegionUint32( patternBrightness, ( r, g, b, a ) => brightnessUint32( r, g, b, a, -2 ) )

        assert.deepEqual( patternBrightness, expectPatternBrightness_10 )
      } )

      it( 'clamps upper range to 1', () => {
        const patternBrightness = fromPng( patternPng )

        setRegionUint32( patternBrightness, ( r, g, b, a ) => brightnessUint32( r, g, b, a, 2 ) )

        assert.deepEqual( patternBrightness, expectPatternBrightness10 )
      } )
    } )

    describe( 'brightnessChannel', () => {
      it( '-1', () => {
        const patternBrightness = fromPng( patternPng )

        setRegion( patternBrightness, ( r, g, b, a ) =>
          [
            brightnessChannel( r, -1 ),
            brightnessChannel( g, -1 ),
            brightnessChannel( b, -1 ),
            a
          ]
        )

        assert.deepEqual( patternBrightness, expectPatternBrightness_10 )
      } )

      it( '-0.5', () => {
        const patternBrightness = fromPng( patternPng )

        setRegion( patternBrightness, ( r, g, b, a ) =>
          [
            brightnessChannel( r, -0.5 ),
            brightnessChannel( g, -0.5 ),
            brightnessChannel( b, -0.5 ),
            a
          ]
        )

        assert.deepEqual( patternBrightness, expectPatternBrightness_05 )
      } )

      it( '0', () => {
        const patternBrightness = fromPng( patternPng )

        setRegion( patternBrightness, ( r, g, b, a ) =>
          [
            brightnessChannel( r, 0 ),
            brightnessChannel( g, 0 ),
            brightnessChannel( b, 0 ),
            a
          ]
        )

        assert.deepEqual( patternBrightness, pattern )
      } )

      it( '0.5', () => {
        const patternBrightness = fromPng( patternPng )

        setRegion( patternBrightness, ( r, g, b, a ) =>
          [
            brightnessChannel( r, 0.5 ),
            brightnessChannel( g, 0.5 ),
            brightnessChannel( b, 0.5 ),
            a
          ]
        )

        assert.deepEqual( patternBrightness, expectPatternBrightness05 )
      } )

      it( '1', () => {
        const patternBrightness = fromPng( patternPng )

        setRegion( patternBrightness, ( r, g, b, a ) =>
          [
            brightnessChannel( r, 1 ),
            brightnessChannel( g, 1 ),
            brightnessChannel( b, 1 ),
            a
          ]
        )

        assert.deepEqual( patternBrightness, expectPatternBrightness10 )
      } )

      it( 'clamps lower range to -1', () => {
        const patternBrightness = fromPng( patternPng )

        setRegion( patternBrightness, ( r, g, b, a ) =>
          [
            brightnessChannel( r, -2 ),
            brightnessChannel( g, -2 ),
            brightnessChannel( b, -2 ),
            a
          ]
        )

        assert.deepEqual( patternBrightness, expectPatternBrightness_10 )
      } )

      it( 'clamps upper range to 1', () => {
        const patternBrightness = fromPng( patternPng )

        setRegion( patternBrightness, ( r, g, b, a ) =>
          [
            brightnessChannel( r, 2 ),
            brightnessChannel( g, 2 ),
            brightnessChannel( b, 2 ),
            a
          ]
        )

        assert.deepEqual( patternBrightness, expectPatternBrightness10 )
      } )
    } )

    describe( 'contrast', () => {
      it( '-1', () => {
        const patternContrast = fromPng( patternPng )

        setRegion( patternContrast, ( r, g, b, a ) => contrast( r, g, b, a, -1 ) )

        assert.deepEqual( patternContrast, expectPatternContrast_10 )
      } )

      it( '-0.5', () => {
        const patternContrast = fromPng( patternPng )

        setRegion( patternContrast, ( r, g, b, a ) => contrast( r, g, b, a, -0.5 ) )

        assert.deepEqual( patternContrast, expectPatternContrast_05 )
      } )

      it( '0', () => {
        const patternContrast = fromPng( patternPng )

        setRegion( patternContrast, ( r, g, b, a ) => contrast( r, g, b, a, 0 ) )

        assert.deepEqual( patternContrast, pattern )
      } )

      it( '0.5', () => {
        const patternContrast = fromPng( patternPng )

        setRegion( patternContrast, ( r, g, b, a ) => contrast( r, g, b, a, 0.5 ) )

        assert.deepEqual( patternContrast, expectPatternContrast05 )
      } )

      it( '1', () => {
        const patternContrast = fromPng( patternPng )

        setRegion( patternContrast, ( r, g, b, a ) => contrast( r, g, b, a, 1 ) )

        assert.deepEqual( patternContrast, expectPatternContrast10 )
      } )

      it( 'clamps lower range to -1', () => {
        const patternContrast = fromPng( patternPng )

        setRegion( patternContrast, ( r, g, b, a ) => contrast( r, g, b, a, -2 ) )

        assert.deepEqual( patternContrast, expectPatternContrast_10 )
      } )

      it( 'clamps upper range to 1', () => {
        const patternContrast = fromPng( patternPng )

        setRegion( patternContrast, ( r, g, b, a ) => contrast( r, g, b, a, 2 ) )

        assert.deepEqual( patternContrast, expectPatternContrast10 )
      } )
    })

    describe( 'contrastUint32', () => {
      it( '-1', () => {
        const patternContrast = fromPng( patternPng )

        setRegionUint32( patternContrast, ( r, g, b, a ) => contrastUint32( r, g, b, a, -1 ) )

        assert.deepEqual( patternContrast, expectPatternContrast_10 )
      } )

      it( '-0.5', () => {
        const patternContrast = fromPng( patternPng )

        setRegionUint32( patternContrast, ( r, g, b, a ) => contrastUint32( r, g, b, a, -0.5 ) )

        assert.deepEqual( patternContrast, expectPatternContrast_05 )
      } )

      it( '0', () => {
        const patternContrast = fromPng( patternPng )

        setRegionUint32( patternContrast, ( r, g, b, a ) => contrastUint32( r, g, b, a, 0 ) )

        assert.deepEqual( patternContrast, pattern )
      } )

      it( '0.5', () => {
        const patternContrast = fromPng( patternPng )

        setRegionUint32( patternContrast, ( r, g, b, a ) => contrastUint32( r, g, b, a, 0.5 ) )

        assert.deepEqual( patternContrast, expectPatternContrast05 )
      } )

      it( '1', () => {
        const patternContrast = fromPng( patternPng )

        setRegionUint32( patternContrast, ( r, g, b, a ) => contrastUint32( r, g, b, a, 1 ) )

        assert.deepEqual( patternContrast, expectPatternContrast10 )
      } )

      it( 'clamps lower range to -1', () => {
        const patternContrast = fromPng( patternPng )

        setRegionUint32( patternContrast, ( r, g, b, a ) => contrastUint32( r, g, b, a, -2 ) )

        assert.deepEqual( patternContrast, expectPatternContrast_10 )
      } )

      it( 'clamps upper range to 1', () => {
        const patternContrast = fromPng( patternPng )

        setRegionUint32( patternContrast, ( r, g, b, a ) => contrastUint32( r, g, b, a, 2 ) )

        assert.deepEqual( patternContrast, expectPatternContrast10 )
      } )
    } )

    describe( 'contrastChannel', () => {
      it( '-1', () => {
        const patternContrast = fromPng( patternPng )

        setRegion( patternContrast, ( r, g, b, a ) =>
          [
            contrastChannel( r, -1 ),
            contrastChannel( g, -1 ),
            contrastChannel( b, -1 ),
            a
          ]
        )

        assert.deepEqual( patternContrast, expectPatternContrast_10 )
      } )

      it( '-0.5', () => {
        const patternContrast = fromPng( patternPng )

        setRegion( patternContrast, ( r, g, b, a ) =>
          [
            contrastChannel( r, -0.5 ),
            contrastChannel( g, -0.5 ),
            contrastChannel( b, -0.5 ),
            a
          ]
        )

        assert.deepEqual( patternContrast, expectPatternContrast_05 )
      } )

      it( '0', () => {
        const patternContrast = fromPng( patternPng )

        setRegion( patternContrast, ( r, g, b, a ) =>
          [
            contrastChannel( r, 0 ),
            contrastChannel( g, 0 ),
            contrastChannel( b, 0 ),
            a
          ]
        )

        assert.deepEqual( patternContrast, pattern )
      } )

      it( '0.5', () => {
        const patternContrast = fromPng( patternPng )

        setRegion( patternContrast, ( r, g, b, a ) =>
          [
            contrastChannel( r, 0.5 ),
            contrastChannel( g, 0.5 ),
            contrastChannel( b, 0.5 ),
            a
          ]
        )

        assert.deepEqual( patternContrast, expectPatternContrast05 )
      } )

      it( '1', () => {
        const patternContrast = fromPng( patternPng )

        setRegion( patternContrast, ( r, g, b, a ) =>
          [
            contrastChannel( r, 1 ),
            contrastChannel( g, 1 ),
            contrastChannel( b, 1 ),
            a
          ]
        )

        assert.deepEqual( patternContrast, expectPatternContrast10 )
      } )

      it( 'clamps lower range to -1', () => {
        const patternContrast = fromPng( patternPng )

        setRegion( patternContrast, ( r, g, b, a ) =>
          [
            contrastChannel( r, -2 ),
            contrastChannel( g, -2 ),
            contrastChannel( b, -2 ),
            a
          ]
        )

        assert.deepEqual( patternContrast, expectPatternContrast_10 )
      } )

      it( 'clamps upper range to 1', () => {
        const patternContrast = fromPng( patternPng )

        setRegion( patternContrast, ( r, g, b, a ) =>
          [
            contrastChannel( r, 2 ),
            contrastChannel( g, 2 ),
            contrastChannel( b, 2 ),
            a
          ]
        )

        assert.deepEqual( patternContrast, expectPatternContrast10 )
      } )
    } )

    describe( 'posterize', () => {
      it( '2', () => {
        const gradientPosterize = fromPng( testGradientPng )

        setRegion( gradientPosterize, ( r, g, b, a ) => posterize( r, g, b, a, 2 ) )

        assert.deepEqual( gradientPosterize, expectGradientPosterize2 )
      })

      it( '3', () => {
        const gradientPosterize = fromPng( testGradientPng )

        setRegion( gradientPosterize, ( r, g, b, a ) => posterize( r, g, b, a, 3 ) )

        assert.deepEqual( gradientPosterize, expectGradientPosterize3 )
      } )

      it( '10', () => {
        const gradientPosterize = fromPng( testGradientPng )

        setRegion( gradientPosterize, ( r, g, b, a ) => posterize( r, g, b, a, 10 ) )

        assert.deepEqual( gradientPosterize, expectGradientPosterize10 )
      } )
    })

    describe( 'posterizeUint32', () => {
      it( '2', () => {
        const gradientPosterize = fromPng( testGradientPng )

        setRegionUint32( gradientPosterize, ( r, g, b, a ) => posterizeUint32( r, g, b, a, 2 ) )

        assert.deepEqual( gradientPosterize, expectGradientPosterize2 )
      } )

      it( '3', () => {
        const gradientPosterize = fromPng( testGradientPng )

        setRegionUint32( gradientPosterize, ( r, g, b, a ) => posterizeUint32( r, g, b, a, 3 ) )

        assert.deepEqual( gradientPosterize, expectGradientPosterize3 )
      } )

      it( '10', () => {
        const gradientPosterize = fromPng( testGradientPng )

        setRegionUint32( gradientPosterize, ( r, g, b, a ) => posterizeUint32( r, g, b, a, 10 ) )

        assert.deepEqual( gradientPosterize, expectGradientPosterize10 )
      } )
    } )

    describe( 'posterizeChannel', () => {
      it( '2', () => {
        const gradientPosterize = fromPng( testGradientPng )

        setRegion( gradientPosterize, ( r, g, b, a ) =>
          [
            posterizeChannel( r, 2 ),
            posterizeChannel( g, 2 ),
            posterizeChannel( b, 2 ),
            a
          ]
        )

        assert.deepEqual( gradientPosterize, expectGradientPosterize2 )
      } )

      it( '3', () => {
        const gradientPosterize = fromPng( testGradientPng )

        setRegion( gradientPosterize, ( r, g, b, a ) =>
          [
            posterizeChannel( r, 3 ),
            posterizeChannel( g, 3 ),
            posterizeChannel( b, 3 ),
            a
          ]
        )

        assert.deepEqual( gradientPosterize, expectGradientPosterize3 )
      } )

      it( '10', () => {
        const gradientPosterize = fromPng( testGradientPng )

        setRegion( gradientPosterize, ( r, g, b, a ) =>
          [
            posterizeChannel( r, 10 ),
            posterizeChannel( g, 10 ),
            posterizeChannel( b, 10 ),
            a
          ]
        )

        assert.deepEqual( gradientPosterize, expectGradientPosterize10 )
      } )
    } )

    describe( 'opacity', () => {
      it( '0', () => {
        const patternOpacity = fromPng( patternPng )

        setRegion( patternOpacity, ( r, g, b, a ) => opacity( r, g, b, a, 0 ) )

        assert.deepEqual( patternOpacity, expectPatternOpacity0 )
      } )

      it( '0.5', () => {
        const patternOpacity = fromPng( patternPng )

        setRegion( patternOpacity, ( r, g, b, a ) => opacity( r, g, b, a, 0.5 ) )

        assert.deepEqual( patternOpacity, expectPatternOpacity05 )
      } )

      it( '1', () => {
        const patternOpacity = fromPng( patternPng )

        setRegion( patternOpacity, ( r, g, b, a ) => opacity( r, g, b, a, 1 ) )

        assert.deepEqual( patternOpacity, pattern )
      } )
    })

    describe( 'opacityUint32', () => {
      it( '0', () => {
        const patternOpacity = fromPng( patternPng )

        setRegionUint32( patternOpacity, ( r, g, b, a ) => opacityUint32( r, g, b, a, 0 ) )

        assert.deepEqual( patternOpacity, expectPatternOpacity0 )
      } )

      it( '0.5', () => {
        const patternOpacity = fromPng( patternPng )

        setRegionUint32( patternOpacity, ( r, g, b, a ) => opacityUint32( r, g, b, a, 0.5 ) )

        assert.deepEqual( patternOpacity, expectPatternOpacity05 )
      } )

      it( '1', () => {
        const patternOpacity = fromPng( patternPng )

        setRegionUint32( patternOpacity, ( r, g, b, a ) => opacityUint32( r, g, b, a, 1 ) )

        assert.deepEqual( patternOpacity, pattern )
      } )
    } )
  })
})