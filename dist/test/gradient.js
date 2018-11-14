"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const fs = require("fs");
const create_image_1 = require("@rgba-image/create-image");
const png_1 = require("@rgba-image/png");
const pixel_1 = require("@rgba-image/pixel");
const common_1 = require("@rgba-image/common");
const __1 = require("..");
const gradient_1 = require("../gradient");
const gradientRgbaPng = fs.readFileSync('./src/test/fixtures/gradient-rgba.png');
const expectGradientRgba = png_1.fromPng(gradientRgbaPng);
describe('color', () => {
    describe('gradient', () => {
        it('gradientRgba', () => {
            const width = 64;
            const height = 64;
            const dest = create_image_1.createImage(width, height);
            const stops = [
                [51, 153, 255, 255, 0.5],
                [51, 153, 255, 128, 0.25],
                [255, 255, 255, 255, 0.75]
            ];
            const step = 1 / width;
            let xCache = {};
            pixel_1.setRegion(dest, (_r, _g, _b, _a, x) => {
                if (!(x in xCache)) {
                    xCache[x] = __1.gradientRgba(stops, x * step);
                }
                return xCache[x];
            });
            assert.deepEqual(dest, expectGradientRgba);
        });
        it('gradientRgbaUint32', () => {
            const width = 64;
            const height = 64;
            const dest = create_image_1.createImage(width, height);
            const stops = [
                [common_1.rgbaToUint32(51, 153, 255, 255, common_1.isLittleEndian), 0.5],
                [common_1.rgbaToUint32(51, 153, 255, 128, common_1.isLittleEndian), 0.25],
                [common_1.rgbaToUint32(255, 255, 255, 255, common_1.isLittleEndian), 0.75]
            ];
            const step = 1 / width;
            let xCache = {};
            pixel_1.setRegionUint32(dest, (_r, _g, _b, _a, x) => {
                if (!(x in xCache)) {
                    xCache[x] = __1.gradientRgbaUInt32(stops, x * step);
                }
                return xCache[x];
            });
            assert.deepEqual(dest, expectGradientRgba);
        });
        it('gradientChannel', () => {
            const width = 64;
            const height = 64;
            const dest = create_image_1.createImage(width, height);
            const redStops = [
                [51, 0.5],
                [51, 0.25],
                [255, 0.75]
            ];
            const greenStops = [
                [153, 0.5],
                [153, 0.25],
                [255, 0.75]
            ];
            const blueStops = [
                [255, 0.5],
                [255, 0.25],
                [255, 0.75]
            ];
            const alphaStops = [
                [255, 0.5],
                [128, 0.25],
                [255, 0.75]
            ];
            const step = 1 / width;
            let xCache = {};
            pixel_1.setRegion(dest, (_r, _g, _b, _a, x) => {
                if (!(x in xCache)) {
                    xCache[x] = [
                        __1.gradientChannel(redStops, x * step),
                        __1.gradientChannel(greenStops, x * step),
                        __1.gradientChannel(blueStops, x * step),
                        __1.gradientChannel(alphaStops, x * step)
                    ];
                }
                return xCache[x];
            });
            assert.deepEqual(dest, expectGradientRgba);
        });
        it('gradientRgba with one stop', () => {
            const stops = [
                [51, 153, 255, 128, 0]
            ];
            const color = __1.gradientRgba(stops, 0.5);
            const expect = [51, 153, 255, 128];
            assert.deepEqual(color, expect);
        });
        it('rgbaValuesToStops 1', () => {
            const colors = [
                [51, 153, 255, 255]
            ];
            const expect = [
                [51, 153, 255, 255, 0.5]
            ];
            const stops = gradient_1.rgbaValuesToStops(colors);
            assert.deepEqual(stops, expect);
        });
        it('rgbaValuesToStops 2', () => {
            const colors = [
                [51, 153, 255, 255],
                [255, 255, 255, 255]
            ];
            const expect = [
                [51, 153, 255, 255, 0],
                [255, 255, 255, 255, 1]
            ];
            const stops = gradient_1.rgbaValuesToStops(colors);
            assert.deepEqual(stops, expect);
        });
        it('rgbaValuesToStops 3', () => {
            const colors = [
                [51, 153, 255, 255],
                [51, 153, 255, 128],
                [255, 255, 255, 255]
            ];
            const expect = [
                [51, 153, 255, 255, 0],
                [51, 153, 255, 128, 0.5],
                [255, 255, 255, 255, 1]
            ];
            const stops = gradient_1.rgbaValuesToStops(colors);
            assert.deepEqual(stops, expect);
        });
        it('rgbaValuesToStops 4', () => {
            const colors = [
                [51, 153, 255, 255],
                [51, 153, 255, 128],
                [255, 255, 255, 255],
                [255, 255, 255, 128]
            ];
            const stops = gradient_1.rgbaValuesToStops(colors);
            const secondPosition = (stops[1][4]).toFixed(2);
            const thirdPosition = (stops[2][4]).toFixed(2);
            assert.strictEqual(secondPosition, '0.33');
            assert.strictEqual(thirdPosition, '0.67');
        });
        it('rgbaUint32ValuesToStops 1', () => {
            const color = common_1.rgbaToUint32(51, 153, 255, 255, common_1.isLittleEndian);
            const colors = [color];
            const expect = [
                [color, 0.5]
            ];
            const stops = gradient_1.rgbaUint32ValuesToStops(colors);
            assert.deepEqual(stops, expect);
        });
        it('rgbaValuesToStops 3', () => {
            const colors = [
                common_1.rgbaToUint32(51, 153, 255, 255, common_1.isLittleEndian),
                common_1.rgbaToUint32(51, 153, 255, 128, common_1.isLittleEndian),
                common_1.rgbaToUint32(255, 255, 255, 255, common_1.isLittleEndian)
            ];
            const expect = [
                [colors[0], 0],
                [colors[1], 0.5],
                [colors[2], 1]
            ];
            const stops = gradient_1.rgbaUint32ValuesToStops(colors);
            assert.deepEqual(stops, expect);
        });
        it('channelValuesToStops 1', () => {
            const colors = [51];
            const expect = [
                [51, 0.5]
            ];
            const stops = gradient_1.channelValuesToStops(colors);
            assert.deepEqual(stops, expect);
        });
        it('rgbaValuesToStops 3', () => {
            const colors = [51, 153, 255];
            const expect = [
                [colors[0], 0],
                [colors[1], 0.5],
                [colors[2], 1]
            ];
            const stops = gradient_1.channelValuesToStops(colors);
            assert.deepEqual(stops, expect);
        });
        it('bad arguments', () => {
            assert.throws(() => __1.gradientRgba([], 0));
            assert.throws(() => __1.gradientRgba([0], 0));
            assert.throws(() => __1.gradientRgbaUInt32([0], 0));
            assert.throws(() => __1.gradientChannel([0], 0));
            assert.throws(() => gradient_1.rgbaValuesToStops([]));
        });
    });
});
//# sourceMappingURL=gradient.js.map