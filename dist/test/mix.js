"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const __1 = require("..");
const common_1 = require("@rgba-image/common");
describe('mix', () => {
    describe('mix', () => {
        it('uses default value if no value provided', () => {
            const expect = [153, 204, 255, 191];
            const result = __1.mix(51, 153, 255, 128, 255, 255, 255, 255);
            assert.deepEqual(result, expect);
        });
    });
    describe('mixUint32', () => {
        it('uses default value if no value provided', () => {
            const expect = common_1.rgbaToUint32(153, 204, 255, 191, common_1.isLittleEndian);
            const result = __1.mixUint32(51, 153, 255, 128, 255, 255, 255, 255);
            assert.deepEqual(result, expect);
        });
    });
    describe('mixChannel', () => {
        it('uses default value if no value provided', () => {
            const expect = 153;
            const result = __1.mixChannel(51, 255);
            assert.strictEqual(result, expect);
        });
    });
});
//# sourceMappingURL=mix.js.map