"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@rgba-image/common");
exports.grayscale = (r, g, b, a) => {
    r = r | 0;
    g = g | 0;
    b = b | 0;
    a = a | 0;
    const gray = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return [gray | 0, gray | 0, gray | 0, a];
};
exports.grayscaleUint32 = (r, g, b, a) => {
    r = r | 0;
    g = g | 0;
    b = b | 0;
    a = a | 0;
    const gray = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return common_1.rgbaToUint32(gray, gray, gray, a, common_1.isLittleEndian);
};
exports.sepia = (r, g, b, a) => {
    r = r | 0;
    g = g | 0;
    b = b | 0;
    a = a | 0;
    r = r * 0.393 + g * 0.769 + b * 0.189;
    g = r * 0.349 + g * 0.686 + b * 0.168;
    b = r * 0.272 + g * 0.534 + b * 0.131;
    return [r | 0, g | 0, b | 0, a];
};
exports.sepiaUint32 = (r, g, b, a) => {
    r = r | 0;
    g = g | 0;
    b = b | 0;
    a = a | 0;
    r = r * 0.393 + g * 0.769 + b * 0.189;
    g = r * 0.349 + g * 0.686 + b * 0.168;
    b = r * 0.272 + g * 0.534 + b * 0.131;
    return common_1.rgbaToUint32(r, g, b, a, common_1.isLittleEndian);
};
exports.invert = (r, g, b, a) => {
    r = r | 0;
    g = g | 0;
    b = b | 0;
    a = a | 0;
    r = 255 - r;
    g = 255 - g;
    b = 255 - b;
    return [r, g, b, a];
};
exports.invertUint32 = (r, g, b, a) => {
    r = r | 0;
    g = g | 0;
    b = b | 0;
    a = a | 0;
    r = 255 - r;
    g = 255 - g;
    b = 255 - b;
    return common_1.rgbaToUint32(r, g, b, a, common_1.isLittleEndian);
};
exports.invertChannel = (source) => {
    source = source | 0;
    source = 255 - source;
    return source;
};
//# sourceMappingURL=map.js.map