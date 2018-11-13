"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@rgba-image/common");
exports.brightness = (r, g, b, a, amount) => {
    r = r | 0;
    g = g | 0;
    b = b | 0;
    a = a | 0;
    amount = amount < -1 ? -1 : amount;
    amount = amount > 1 ? 1 : amount;
    if (amount < 0) {
        r *= (1 + amount);
        g *= (1 + amount);
        b *= (1 + amount);
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
    amount = amount < -1 ? -1 : amount;
    amount = amount > 1 ? 1 : amount;
    if (amount < 0) {
        r *= (1 + amount);
        g *= (1 + amount);
        b *= (1 + amount);
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
    amount = amount < -1 ? -1 : amount;
    amount = amount > 1 ? 1 : amount;
    if (amount < 0) {
        source *= (1 + amount);
    }
    else {
        source += (255 - source) * amount;
    }
    return source | 0;
};
exports.contrast = (r, g, b, a, amount) => {
    r = r | 0;
    g = g | 0;
    b = b | 0;
    a = a | 0;
    amount = amount < -1 ? -1 : amount;
    amount = amount > 1 ? 1 : amount;
    amount *= 255;
    const factor = (259 * (amount + 255)) / (255 * (259 - amount));
    r = common_1.clampByte(factor * (r - 127) + 127);
    g = common_1.clampByte(factor * (g - 127) + 127);
    b = common_1.clampByte(factor * (b - 127) + 127);
    return [r, g, b, a];
};
exports.contrastUint32 = (r, g, b, a, amount) => {
    r = r | 0;
    g = g | 0;
    b = b | 0;
    a = a | 0;
    amount = amount < -1 ? -1 : amount;
    amount = amount > 1 ? 1 : amount;
    amount *= 255;
    const factor = (259 * (amount + 255)) / (255 * (259 - amount));
    r = common_1.clampByte(factor * (r - 127) + 127);
    g = common_1.clampByte(factor * (g - 127) + 127);
    b = common_1.clampByte(factor * (b - 127) + 127);
    return common_1.rgbaToUint32(r, g, b, a, common_1.isLittleEndian);
};
exports.contrastChannel = (source, amount) => {
    amount = amount < -1 ? -1 : amount;
    amount = amount > 1 ? 1 : amount;
    amount *= 255;
    const factor = (259 * (amount + 255)) / (255 * (259 - amount));
    return common_1.clampByte(factor * (source - 127) + 127);
};
exports.posterize = (r, g, b, a, amount) => {
    r = r | 0;
    g = g | 0;
    b = b | 0;
    a = a | 0;
    amount = Math.max(2, common_1.clampByte(amount));
    const areas = 256 / amount;
    const values = 255 / (amount - 1);
    r = values * ((r / areas) | 0);
    g = values * ((g / areas) | 0);
    b = values * ((b / areas) | 0);
    return [r | 0, g | 0, b | 0, a];
};
exports.posterizeUint32 = (r, g, b, a, amount) => {
    r = r | 0;
    g = g | 0;
    b = b | 0;
    a = a | 0;
    amount = Math.max(2, common_1.clampByte(amount));
    const areas = 256 / amount;
    const values = 255 / (amount - 1);
    r = values * ((r / areas) | 0);
    g = values * ((g / areas) | 0);
    b = values * ((b / areas) | 0);
    return common_1.rgbaToUint32(r, g, b, a, common_1.isLittleEndian);
};
exports.posterizeChannel = (source, amount) => {
    source = source | 0;
    amount = Math.max(2, common_1.clampByte(amount));
    const areas = 256 / amount;
    const values = 255 / (amount - 1);
    source = values * ((source / areas) | 0);
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