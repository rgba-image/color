"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const fs = require("fs");
const png_1 = require("@rgba-image/png");
const pixel_1 = require("@rgba-image/pixel");
const __1 = require("..");
const patternPng = fs.readFileSync('./src/test/fixtures/pattern.png');
const testGradientPng = fs.readFileSync('./src/test/fixtures/gradient.png');
const expectPatternBrightness_05Png = fs.readFileSync('./src/test/fixtures/pattern-brightness--05.png');
const expectPatternBrightness_10Png = fs.readFileSync('./src/test/fixtures/pattern-brightness--10.png');
const expectPatternBrightness05Png = fs.readFileSync('./src/test/fixtures/pattern-brightness-05.png');
const expectPatternBrightness10Png = fs.readFileSync('./src/test/fixtures/pattern-brightness-10.png');
const expectPatternContrast_05Png = fs.readFileSync('./src/test/fixtures/pattern-contrast--05.png');
const expectPatternContrast_10Png = fs.readFileSync('./src/test/fixtures/pattern-contrast--10.png');
const expectPatternContrast05Png = fs.readFileSync('./src/test/fixtures/pattern-contrast-05.png');
const expectPatternContrast10Png = fs.readFileSync('./src/test/fixtures/pattern-contrast-10.png');
const expectGradientPosterize2Png = fs.readFileSync('./src/test/fixtures/gradient-posterize-2.png');
const expectGradientPosterize3Png = fs.readFileSync('./src/test/fixtures/gradient-posterize-3.png');
const expectGradientPosterize10Png = fs.readFileSync('./src/test/fixtures/gradient-posterize-10.png');
const expectPatternOpacity0Png = fs.readFileSync('./src/test/fixtures/pattern-opacity-0.png');
const expectPatternOpacity05Png = fs.readFileSync('./src/test/fixtures/pattern-opacity-05.png');
const pattern = png_1.fromPng(patternPng);
const expectPatternBrightness_05 = png_1.fromPng(expectPatternBrightness_05Png);
const expectPatternBrightness_10 = png_1.fromPng(expectPatternBrightness_10Png);
const expectPatternBrightness05 = png_1.fromPng(expectPatternBrightness05Png);
const expectPatternBrightness10 = png_1.fromPng(expectPatternBrightness10Png);
const expectPatternContrast_05 = png_1.fromPng(expectPatternContrast_05Png);
const expectPatternContrast_10 = png_1.fromPng(expectPatternContrast_10Png);
const expectPatternContrast05 = png_1.fromPng(expectPatternContrast05Png);
const expectPatternContrast10 = png_1.fromPng(expectPatternContrast10Png);
const expectGradientPosterize2 = png_1.fromPng(expectGradientPosterize2Png);
const expectGradientPosterize3 = png_1.fromPng(expectGradientPosterize3Png);
const expectGradientPosterize10 = png_1.fromPng(expectGradientPosterize10Png);
const expectPatternOpacity0 = png_1.fromPng(expectPatternOpacity0Png);
const expectPatternOpacity05 = png_1.fromPng(expectPatternOpacity05Png);
describe('color', () => {
    describe('adjust', () => {
        describe('brightness', () => {
            it('-1', () => {
                const patternBrightness = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternBrightness, (r, g, b, a) => __1.brightness(r, g, b, a, -1));
                assert.deepEqual(patternBrightness, expectPatternBrightness_10);
            });
            it('-0.5', () => {
                const patternBrightness = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternBrightness, (r, g, b, a) => __1.brightness(r, g, b, a, -0.5));
                assert.deepEqual(patternBrightness, expectPatternBrightness_05);
            });
            it('0', () => {
                const patternBrightness = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternBrightness, (r, g, b, a) => __1.brightness(r, g, b, a, 0));
                assert.deepEqual(patternBrightness, pattern);
            });
            it('0.5', () => {
                const patternBrightness = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternBrightness, (r, g, b, a) => __1.brightness(r, g, b, a, 0.5));
                assert.deepEqual(patternBrightness, expectPatternBrightness05);
            });
            it('1', () => {
                const patternBrightness = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternBrightness, (r, g, b, a) => __1.brightness(r, g, b, a, 1));
                assert.deepEqual(patternBrightness, expectPatternBrightness10);
            });
            it('clamps lower range to -1', () => {
                const patternBrightness = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternBrightness, (r, g, b, a) => __1.brightness(r, g, b, a, -2));
                assert.deepEqual(patternBrightness, expectPatternBrightness_10);
            });
            it('clamps upper range to 1', () => {
                const patternBrightness = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternBrightness, (r, g, b, a) => __1.brightness(r, g, b, a, 2));
                assert.deepEqual(patternBrightness, expectPatternBrightness10);
            });
        });
        describe('brightnessUint32', () => {
            it('-1', () => {
                const patternBrightness = png_1.fromPng(patternPng);
                pixel_1.setRegionUint32(patternBrightness, (r, g, b, a) => __1.brightnessUint32(r, g, b, a, -1));
                assert.deepEqual(patternBrightness, expectPatternBrightness_10);
            });
            it('-0.5', () => {
                const patternBrightness = png_1.fromPng(patternPng);
                pixel_1.setRegionUint32(patternBrightness, (r, g, b, a) => __1.brightnessUint32(r, g, b, a, -0.5));
                assert.deepEqual(patternBrightness, expectPatternBrightness_05);
            });
            it('0', () => {
                const patternBrightness = png_1.fromPng(patternPng);
                pixel_1.setRegionUint32(patternBrightness, (r, g, b, a) => __1.brightnessUint32(r, g, b, a, 0));
                assert.deepEqual(patternBrightness, pattern);
            });
            it('0.5', () => {
                const patternBrightness = png_1.fromPng(patternPng);
                pixel_1.setRegionUint32(patternBrightness, (r, g, b, a) => __1.brightnessUint32(r, g, b, a, 0.5));
                assert.deepEqual(patternBrightness, expectPatternBrightness05);
            });
            it('1', () => {
                const patternBrightness = png_1.fromPng(patternPng);
                pixel_1.setRegionUint32(patternBrightness, (r, g, b, a) => __1.brightnessUint32(r, g, b, a, 1));
                assert.deepEqual(patternBrightness, expectPatternBrightness10);
            });
            it('clamps lower range to -1', () => {
                const patternBrightness = png_1.fromPng(patternPng);
                pixel_1.setRegionUint32(patternBrightness, (r, g, b, a) => __1.brightnessUint32(r, g, b, a, -2));
                assert.deepEqual(patternBrightness, expectPatternBrightness_10);
            });
            it('clamps upper range to 1', () => {
                const patternBrightness = png_1.fromPng(patternPng);
                pixel_1.setRegionUint32(patternBrightness, (r, g, b, a) => __1.brightnessUint32(r, g, b, a, 2));
                assert.deepEqual(patternBrightness, expectPatternBrightness10);
            });
        });
        describe('brightnessChannel', () => {
            it('-1', () => {
                const patternBrightness = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternBrightness, (r, g, b, a) => [
                    __1.brightnessChannel(r, -1),
                    __1.brightnessChannel(g, -1),
                    __1.brightnessChannel(b, -1),
                    a
                ]);
                assert.deepEqual(patternBrightness, expectPatternBrightness_10);
            });
            it('-0.5', () => {
                const patternBrightness = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternBrightness, (r, g, b, a) => [
                    __1.brightnessChannel(r, -0.5),
                    __1.brightnessChannel(g, -0.5),
                    __1.brightnessChannel(b, -0.5),
                    a
                ]);
                assert.deepEqual(patternBrightness, expectPatternBrightness_05);
            });
            it('0', () => {
                const patternBrightness = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternBrightness, (r, g, b, a) => [
                    __1.brightnessChannel(r, 0),
                    __1.brightnessChannel(g, 0),
                    __1.brightnessChannel(b, 0),
                    a
                ]);
                assert.deepEqual(patternBrightness, pattern);
            });
            it('0.5', () => {
                const patternBrightness = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternBrightness, (r, g, b, a) => [
                    __1.brightnessChannel(r, 0.5),
                    __1.brightnessChannel(g, 0.5),
                    __1.brightnessChannel(b, 0.5),
                    a
                ]);
                assert.deepEqual(patternBrightness, expectPatternBrightness05);
            });
            it('1', () => {
                const patternBrightness = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternBrightness, (r, g, b, a) => [
                    __1.brightnessChannel(r, 1),
                    __1.brightnessChannel(g, 1),
                    __1.brightnessChannel(b, 1),
                    a
                ]);
                assert.deepEqual(patternBrightness, expectPatternBrightness10);
            });
            it('clamps lower range to -1', () => {
                const patternBrightness = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternBrightness, (r, g, b, a) => [
                    __1.brightnessChannel(r, -2),
                    __1.brightnessChannel(g, -2),
                    __1.brightnessChannel(b, -2),
                    a
                ]);
                assert.deepEqual(patternBrightness, expectPatternBrightness_10);
            });
            it('clamps upper range to 1', () => {
                const patternBrightness = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternBrightness, (r, g, b, a) => [
                    __1.brightnessChannel(r, 2),
                    __1.brightnessChannel(g, 2),
                    __1.brightnessChannel(b, 2),
                    a
                ]);
                assert.deepEqual(patternBrightness, expectPatternBrightness10);
            });
        });
        describe('contrast', () => {
            it('-1', () => {
                const patternContrast = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternContrast, (r, g, b, a) => __1.contrast(r, g, b, a, -1));
                assert.deepEqual(patternContrast, expectPatternContrast_10);
            });
            it('-0.5', () => {
                const patternContrast = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternContrast, (r, g, b, a) => __1.contrast(r, g, b, a, -0.5));
                assert.deepEqual(patternContrast, expectPatternContrast_05);
            });
            it('0', () => {
                const patternContrast = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternContrast, (r, g, b, a) => __1.contrast(r, g, b, a, 0));
                assert.deepEqual(patternContrast, pattern);
            });
            it('0.5', () => {
                const patternContrast = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternContrast, (r, g, b, a) => __1.contrast(r, g, b, a, 0.5));
                assert.deepEqual(patternContrast, expectPatternContrast05);
            });
            it('1', () => {
                const patternContrast = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternContrast, (r, g, b, a) => __1.contrast(r, g, b, a, 1));
                assert.deepEqual(patternContrast, expectPatternContrast10);
            });
            it('clamps lower range to -1', () => {
                const patternContrast = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternContrast, (r, g, b, a) => __1.contrast(r, g, b, a, -2));
                assert.deepEqual(patternContrast, expectPatternContrast_10);
            });
            it('clamps upper range to 1', () => {
                const patternContrast = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternContrast, (r, g, b, a) => __1.contrast(r, g, b, a, 2));
                assert.deepEqual(patternContrast, expectPatternContrast10);
            });
        });
        describe('contrastUint32', () => {
            it('-1', () => {
                const patternContrast = png_1.fromPng(patternPng);
                pixel_1.setRegionUint32(patternContrast, (r, g, b, a) => __1.contrastUint32(r, g, b, a, -1));
                assert.deepEqual(patternContrast, expectPatternContrast_10);
            });
            it('-0.5', () => {
                const patternContrast = png_1.fromPng(patternPng);
                pixel_1.setRegionUint32(patternContrast, (r, g, b, a) => __1.contrastUint32(r, g, b, a, -0.5));
                assert.deepEqual(patternContrast, expectPatternContrast_05);
            });
            it('0', () => {
                const patternContrast = png_1.fromPng(patternPng);
                pixel_1.setRegionUint32(patternContrast, (r, g, b, a) => __1.contrastUint32(r, g, b, a, 0));
                assert.deepEqual(patternContrast, pattern);
            });
            it('0.5', () => {
                const patternContrast = png_1.fromPng(patternPng);
                pixel_1.setRegionUint32(patternContrast, (r, g, b, a) => __1.contrastUint32(r, g, b, a, 0.5));
                assert.deepEqual(patternContrast, expectPatternContrast05);
            });
            it('1', () => {
                const patternContrast = png_1.fromPng(patternPng);
                pixel_1.setRegionUint32(patternContrast, (r, g, b, a) => __1.contrastUint32(r, g, b, a, 1));
                assert.deepEqual(patternContrast, expectPatternContrast10);
            });
            it('clamps lower range to -1', () => {
                const patternContrast = png_1.fromPng(patternPng);
                pixel_1.setRegionUint32(patternContrast, (r, g, b, a) => __1.contrastUint32(r, g, b, a, -2));
                assert.deepEqual(patternContrast, expectPatternContrast_10);
            });
            it('clamps upper range to 1', () => {
                const patternContrast = png_1.fromPng(patternPng);
                pixel_1.setRegionUint32(patternContrast, (r, g, b, a) => __1.contrastUint32(r, g, b, a, 2));
                assert.deepEqual(patternContrast, expectPatternContrast10);
            });
        });
        describe('contrastChannel', () => {
            it('-1', () => {
                const patternContrast = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternContrast, (r, g, b, a) => [
                    __1.contrastChannel(r, -1),
                    __1.contrastChannel(g, -1),
                    __1.contrastChannel(b, -1),
                    a
                ]);
                assert.deepEqual(patternContrast, expectPatternContrast_10);
            });
            it('-0.5', () => {
                const patternContrast = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternContrast, (r, g, b, a) => [
                    __1.contrastChannel(r, -0.5),
                    __1.contrastChannel(g, -0.5),
                    __1.contrastChannel(b, -0.5),
                    a
                ]);
                assert.deepEqual(patternContrast, expectPatternContrast_05);
            });
            it('0', () => {
                const patternContrast = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternContrast, (r, g, b, a) => [
                    __1.contrastChannel(r, 0),
                    __1.contrastChannel(g, 0),
                    __1.contrastChannel(b, 0),
                    a
                ]);
                assert.deepEqual(patternContrast, pattern);
            });
            it('0.5', () => {
                const patternContrast = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternContrast, (r, g, b, a) => [
                    __1.contrastChannel(r, 0.5),
                    __1.contrastChannel(g, 0.5),
                    __1.contrastChannel(b, 0.5),
                    a
                ]);
                assert.deepEqual(patternContrast, expectPatternContrast05);
            });
            it('1', () => {
                const patternContrast = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternContrast, (r, g, b, a) => [
                    __1.contrastChannel(r, 1),
                    __1.contrastChannel(g, 1),
                    __1.contrastChannel(b, 1),
                    a
                ]);
                assert.deepEqual(patternContrast, expectPatternContrast10);
            });
            it('clamps lower range to -1', () => {
                const patternContrast = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternContrast, (r, g, b, a) => [
                    __1.contrastChannel(r, -2),
                    __1.contrastChannel(g, -2),
                    __1.contrastChannel(b, -2),
                    a
                ]);
                assert.deepEqual(patternContrast, expectPatternContrast_10);
            });
            it('clamps upper range to 1', () => {
                const patternContrast = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternContrast, (r, g, b, a) => [
                    __1.contrastChannel(r, 2),
                    __1.contrastChannel(g, 2),
                    __1.contrastChannel(b, 2),
                    a
                ]);
                assert.deepEqual(patternContrast, expectPatternContrast10);
            });
        });
        describe('posterize', () => {
            it('2', () => {
                const gradientPosterize = png_1.fromPng(testGradientPng);
                pixel_1.setRegion(gradientPosterize, (r, g, b, a) => __1.posterize(r, g, b, a, 2));
                assert.deepEqual(gradientPosterize, expectGradientPosterize2);
            });
            it('3', () => {
                const gradientPosterize = png_1.fromPng(testGradientPng);
                pixel_1.setRegion(gradientPosterize, (r, g, b, a) => __1.posterize(r, g, b, a, 3));
                assert.deepEqual(gradientPosterize, expectGradientPosterize3);
            });
            it('10', () => {
                const gradientPosterize = png_1.fromPng(testGradientPng);
                pixel_1.setRegion(gradientPosterize, (r, g, b, a) => __1.posterize(r, g, b, a, 10));
                assert.deepEqual(gradientPosterize, expectGradientPosterize10);
            });
        });
        describe('posterizeUint32', () => {
            it('2', () => {
                const gradientPosterize = png_1.fromPng(testGradientPng);
                pixel_1.setRegionUint32(gradientPosterize, (r, g, b, a) => __1.posterizeUint32(r, g, b, a, 2));
                assert.deepEqual(gradientPosterize, expectGradientPosterize2);
            });
            it('3', () => {
                const gradientPosterize = png_1.fromPng(testGradientPng);
                pixel_1.setRegionUint32(gradientPosterize, (r, g, b, a) => __1.posterizeUint32(r, g, b, a, 3));
                assert.deepEqual(gradientPosterize, expectGradientPosterize3);
            });
            it('10', () => {
                const gradientPosterize = png_1.fromPng(testGradientPng);
                pixel_1.setRegionUint32(gradientPosterize, (r, g, b, a) => __1.posterizeUint32(r, g, b, a, 10));
                assert.deepEqual(gradientPosterize, expectGradientPosterize10);
            });
        });
        describe('posterizeChannel', () => {
            it('2', () => {
                const gradientPosterize = png_1.fromPng(testGradientPng);
                pixel_1.setRegion(gradientPosterize, (r, g, b, a) => [
                    __1.posterizeChannel(r, 2),
                    __1.posterizeChannel(g, 2),
                    __1.posterizeChannel(b, 2),
                    a
                ]);
                assert.deepEqual(gradientPosterize, expectGradientPosterize2);
            });
            it('3', () => {
                const gradientPosterize = png_1.fromPng(testGradientPng);
                pixel_1.setRegion(gradientPosterize, (r, g, b, a) => [
                    __1.posterizeChannel(r, 3),
                    __1.posterizeChannel(g, 3),
                    __1.posterizeChannel(b, 3),
                    a
                ]);
                assert.deepEqual(gradientPosterize, expectGradientPosterize3);
            });
            it('10', () => {
                const gradientPosterize = png_1.fromPng(testGradientPng);
                pixel_1.setRegion(gradientPosterize, (r, g, b, a) => [
                    __1.posterizeChannel(r, 10),
                    __1.posterizeChannel(g, 10),
                    __1.posterizeChannel(b, 10),
                    a
                ]);
                assert.deepEqual(gradientPosterize, expectGradientPosterize10);
            });
        });
        describe('opacity', () => {
            it('0', () => {
                const patternOpacity = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternOpacity, (r, g, b, a) => __1.opacity(r, g, b, a, 0));
                assert.deepEqual(patternOpacity, expectPatternOpacity0);
            });
            it('0.5', () => {
                const patternOpacity = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternOpacity, (r, g, b, a) => __1.opacity(r, g, b, a, 0.5));
                assert.deepEqual(patternOpacity, expectPatternOpacity05);
            });
            it('1', () => {
                const patternOpacity = png_1.fromPng(patternPng);
                pixel_1.setRegion(patternOpacity, (r, g, b, a) => __1.opacity(r, g, b, a, 1));
                assert.deepEqual(patternOpacity, pattern);
            });
        });
        describe('opacityUint32', () => {
            it('0', () => {
                const patternOpacity = png_1.fromPng(patternPng);
                pixel_1.setRegionUint32(patternOpacity, (r, g, b, a) => __1.opacityUint32(r, g, b, a, 0));
                assert.deepEqual(patternOpacity, expectPatternOpacity0);
            });
            it('0.5', () => {
                const patternOpacity = png_1.fromPng(patternPng);
                pixel_1.setRegionUint32(patternOpacity, (r, g, b, a) => __1.opacityUint32(r, g, b, a, 0.5));
                assert.deepEqual(patternOpacity, expectPatternOpacity05);
            });
            it('1', () => {
                const patternOpacity = png_1.fromPng(patternPng);
                pixel_1.setRegionUint32(patternOpacity, (r, g, b, a) => __1.opacityUint32(r, g, b, a, 1));
                assert.deepEqual(patternOpacity, pattern);
            });
        });
    });
});
//# sourceMappingURL=adjust.js.map