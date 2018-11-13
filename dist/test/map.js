"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const fs = require("fs");
const png_1 = require("@rgba-image/png");
const pixel_1 = require("@rgba-image/pixel");
const __1 = require("..");
const patternPng = fs.readFileSync('./src/test/fixtures/pattern.png');
const expectPatternGrayscalePng = fs.readFileSync('./src/test/fixtures/pattern-grayscale.png');
const expectPatternSepiaPng = fs.readFileSync('./src/test/fixtures/pattern-sepia.png');
const expectPatternInvertPng = fs.readFileSync('./src/test/fixtures/pattern-invert.png');
const expectPatternGrayscale = png_1.fromPng(expectPatternGrayscalePng);
const expectPatternSepia = png_1.fromPng(expectPatternSepiaPng);
const expectPatternInvert = png_1.fromPng(expectPatternInvertPng);
describe('color', () => {
    describe('map', () => {
        it('grayscale', () => {
            const patternGrayscale = png_1.fromPng(patternPng);
            pixel_1.setRegion(patternGrayscale, __1.grayscale);
            assert.deepEqual(patternGrayscale, expectPatternGrayscale);
        });
        it('grayscaleUint32', () => {
            const patternGrayscale = png_1.fromPng(patternPng);
            pixel_1.setRegionUint32(patternGrayscale, __1.grayscaleUint32);
            assert.deepEqual(patternGrayscale, expectPatternGrayscale);
        });
        it('sepia', () => {
            const patternSepia = png_1.fromPng(patternPng);
            pixel_1.setRegion(patternSepia, __1.sepia);
            assert.deepEqual(patternSepia, expectPatternSepia);
        });
        it('sepiaUint32', () => {
            const patternSepia = png_1.fromPng(patternPng);
            pixel_1.setRegionUint32(patternSepia, __1.sepiaUint32);
            assert.deepEqual(patternSepia, expectPatternSepia);
        });
        it('invert', () => {
            const patternInvert = png_1.fromPng(patternPng);
            pixel_1.setRegion(patternInvert, __1.invert);
            assert.deepEqual(patternInvert, expectPatternInvert);
        });
        it('invertUint32', () => {
            const patternInvert = png_1.fromPng(patternPng);
            pixel_1.setRegionUint32(patternInvert, __1.invertUint32);
            assert.deepEqual(patternInvert, expectPatternInvert);
        });
        it('invertChannel', () => {
            const patternInvert = png_1.fromPng(patternPng);
            pixel_1.setRegion(patternInvert, (r, g, b, a) => [
                __1.invertChannel(r),
                __1.invertChannel(g),
                __1.invertChannel(b),
                a
            ]);
            assert.deepEqual(patternInvert, expectPatternInvert);
        });
    });
});
//# sourceMappingURL=map.js.map