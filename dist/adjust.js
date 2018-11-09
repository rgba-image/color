"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@rgba-image/common");
exports.brightness = (r, g, b, a, amount) => {
    r = r | 0;
    g = g | 0;
    b = b | 0;
    a = a | 0;
    amount = Math.max(-1, amount);
    amount = Math.min(1, amount);
    if (amount < 0) {
        r *= (1 - amount);
        g *= (1 - amount);
        b *= (1 - amount);
    }
    else {
        r += (255 - r) * amount;
        g += (255 - g) * amount;
        b += (255 - b) * amount;
    }
    return [r | 0, g | 0, b | 0, a];
};
exports.brightnessUint32 = (r, g, b, a, amount) => {
    r = r | 0;
    g = g | 0;
    b = b | 0;
    a = a | 0;
    amount = Math.max(-1, amount);
    amount = Math.min(1, amount);
    if (amount < 0) {
        r *= (1 - amount);
        g *= (1 - amount);
        b *= (1 - amount);
    }
    else {
        r += (255 - r) * amount;
        g += (255 - g) * amount;
        b += (255 - b) * amount;
    }
    return common_1.rgbaToUint32(r, g, b, a, common_1.isLittleEndian);
};
exports.brightnessChannel = (source, amount) => {
    source = source | 0;
    amount = Math.max(-1, amount);
    amount = Math.min(1, amount);
    source = (amount < 0 ?
        source * (1 - amount) :
        (255 - source) * amount);
    return source | 0;
};
exports.constrast = (r, g, b, a, amount) => {
    r = r | 0;
    g = g | 0;
    b = b | 0;
    a = a | 0;
    amount = Math.max(-1, amount);
    amount = Math.min(1, amount);
    r = contrastChannel(r, amount);
    g = contrastChannel(g, amount);
    b = contrastChannel(b, amount);
    return [r | 0, g | 0, b | 0, a];
};
exports.constrastUint32 = (r, g, b, a, amount) => {
    r = r | 0;
    g = g | 0;
    b = b | 0;
    a = a | 0;
    amount = Math.max(-1, amount);
    amount = Math.min(1, amount);
    r = contrastChannel(r, amount);
    g = contrastChannel(g, amount);
    b = contrastChannel(b, amount);
    return common_1.rgbaToUint32(r, g, b, a, common_1.isLittleEndian);
};
const contrastChannel = (source, amount) => {
    let x;
    if (amount < 0) {
        x = source > 127 ? 1 - source / 255 : source / 255;
        if (x < 0)
            x = 0;
        x = 0.5 * Math.pow(x * 2, 1 + amount);
        return source > 127 ? (1 - x) * 255 : x * 255;
    }
    x = source > 127 ? 1 - source / 255 : source / 255;
    if (x < 0)
        x = 0;
    x = 0.5 * Math.pow(2 * x, amount === 1 ? 127 : 1 / (1 - amount));
    return source > 127 ? (1 - x) * 255 : x * 255;
};
exports.posterize = (r, g, b, a, amount) => {
    r = r | 0;
    g = g | 0;
    b = b | 0;
    a = a | 0;
    amount = Math.min(2, amount);
    r = (Math.floor((r / 255) * (amount - 1)) / (amount - 1)) * 255;
    g = (Math.floor((g / 255) * (amount - 1)) / (amount - 1)) * 255;
    b = (Math.floor((b / 255) * (amount - 1)) / (amount - 1)) * 255;
    return [r | 0, g | 0, b | 0, a];
};
exports.posterizeUint32 = (r, g, b, a, amount) => {
    r = r | 0;
    g = g | 0;
    b = b | 0;
    a = a | 0;
    amount = Math.min(2, amount);
    r = (Math.floor((r / 255) * (amount - 1)) / (amount - 1)) * 255;
    g = (Math.floor((g / 255) * (amount - 1)) / (amount - 1)) * 255;
    b = (Math.floor((b / 255) * (amount - 1)) / (amount - 1)) * 255;
    return common_1.rgbaToUint32(r, g, b, a, common_1.isLittleEndian);
};
exports.posterizeChannel = (source, amount) => {
    source = source | 0;
    amount = Math.min(2, amount);
    source = (Math.floor((source / 255) * (amount - 1)) / (amount - 1)) * 255;
    return source | 0;
};
exports.opacity = (r, g, b, a, amount) => {
    r = r | 0;
    g = g | 0;
    b = b | 0;
    a = a | 0;
    amount = Math.max(0, amount);
    amount = Math.min(1, amount);
    a *= amount;
    return [r, g, b, a | 0];
};
exports.opacityUint32 = (r, g, b, a, amount) => {
    r = r | 0;
    g = g | 0;
    b = b | 0;
    a = a | 0;
    amount = Math.max(0, amount);
    amount = Math.min(1, amount);
    a *= amount;
    return common_1.rgbaToUint32(r, g, b, a, common_1.isLittleEndian);
};
//# sourceMappingURL=adjust.js.map