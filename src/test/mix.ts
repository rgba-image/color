import * as assert from 'assert'
import { mix, mixUint32, mixChannel } from '..'
import { rgbaToUint32, isLittleEndian } from '@rgba-image/common'

describe( 'mix', () => {
  describe( 'mix', () => {
    it( 'uses default value if no value provided', () => {
      const expect = [ 153, 204, 255, 191 ]
      const result = mix( 51, 153, 255, 128, 255, 255, 255, 255 )

      assert.deepEqual( result, expect )
    } )
  })

  describe( 'mixUint32', () => {
    it( 'uses default value if no value provided', () => {
      const expect = rgbaToUint32( 153, 204, 255, 191, isLittleEndian )
      const result = mixUint32( 51, 153, 255, 128, 255, 255, 255, 255 )

      assert.deepEqual( result, expect )
    } )
  } )

  describe( 'mixChannel', () => {
    it( 'uses default value if no value provided', () => {
      const expect = 153
      const result = mixChannel( 51, 255 )

      assert.strictEqual( result, expect )
    } )
  } )
})