"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const fs = require("fs");
const png_1 = require("@rgba-image/png");
const pixel_1 = require("@rgba-image/pixel");
const __1 = require("..");
const compositeNames = [
    'normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten',
    'hard-light', 'difference', 'exclusion'
];
const patternPng = fs.readFileSync('./src/test/fixtures/pattern-simple.png');
const overlayPng = fs.readFileSync('./src/test/fixtures/overlay.png');
const expectCompositePngs = compositeNames.map(name => fs.readFileSync(`./src/test/fixtures/composite-${name}.png`));
const overlay = png_1.fromPng(overlayPng);
const expectComposites = expectCompositePngs.map(png => png_1.fromPng(png));
describe('color', () => {
    describe('composite', () => {
        compositeNames.forEach((name, i) => {
            it(`composite mode ${name}`, () => {
                const dest = png_1.fromPng(patternPng);
                pixel_1.mapRegion(overlay, dest, (sR, sG, sB, sA, dR, dG, dB, dA) => {
                    return __1.compositeRgba(sR, sG, sB, sA, dR, dG, dB, dA, i);
                });
                assert.deepEqual(dest, expectComposites[i]);
            });
            it(`composite mode uint32 ${name}`, () => {
                const dest = png_1.fromPng(patternPng);
                pixel_1.mapRegionUint32(overlay, dest, (sR, sG, sB, sA, dR, dG, dB, dA) => {
                    return __1.compositeRgbaUint32(sR, sG, sB, sA, dR, dG, dB, dA, i);
                });
                assert.deepEqual(dest, expectComposites[i]);
            });
        });
        it('bad arguments', () => {
            assert.throws(() => __1.compositeRgba(0, 0, 0, 0, 0, 0, 0, 0, -1));
            assert.throws(() => __1.compositeRgbaUint32(0, 0, 0, 0, 0, 0, 0, 0, -1));
        });
    });
});
//# sourceMappingURL=composite.js.map