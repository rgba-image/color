"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@rgba-image/common");
exports.mix = (r0, g0, b0, a0, r1, g1, b1, a1, amount) => {
    r0 = r0 | 0;
    g0 = g0 | 0;
    b0 = b0 | 0;
    a0 = a0 | 0;
    r1 = r1 | 0;
    g1 = g1 | 0;
    b1 = b1 | 0;
    a1 = a1 | 0;
    amount = Math.max(0, amount);
    amount = Math.min(1, amount);
    const r = (r1 - r0) * amount + r0;
    const g = (g1 - g0) * amount + g0;
    const b = (b1 - b0) * amount + b0;
    const a = (a1 - a0) * amount + a0;
    return [r | 0, g | 0, b | 0, a | 0];
};
exports.mixUint32 = (r0, g0, b0, a0, r1, g1, b1, a1, amount) => {
    r0 = r0 | 0;
    g0 = g0 | 0;
    b0 = b0 | 0;
    a0 = a0 | 0;
    r1 = r1 | 0;
    g1 = g1 | 0;
    b1 = b1 | 0;
    a1 = a1 | 0;
    amount = Math.max(0, amount);
    amount = Math.min(1, amount);
    const r = (r1 - r0) * amount + r0;
    const g = (g1 - g0) * amount + g0;
    const b = (b1 - b0) * amount + b0;
    const a = (a1 - a0) * amount + a0;
    return common_1.rgbaToUint32(r, g, b, a, common_1.isLittleEndian);
};
exports.mixChannel = (c0, c1, amount) => {
    c0 = c0 | 0;
    c1 = c1 | 0;
    amount = Math.max(0, amount);
    amount = Math.min(1, amount);
    const c = (c1 - c0) * amount + c0;
    return c | 0;
};
//# sourceMappingURL=mix.js.map