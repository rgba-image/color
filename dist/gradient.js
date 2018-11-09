"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@rgba-image/common");
const mix_1 = require("./mix");
exports.gradientRgba = (stops, position) => {
    if (!stops.every(common_1.isRgbaStop))
        throw Error('Expected an array of RgbaStop');
    stops = sortRgbaStops(stops);
    const [leftIndex, rightIndex] = findBoundingIndices(position, stops);
    const leftStop = stops[leftIndex];
    const [r0, g0, b0, a0] = leftStop;
    if (leftIndex === rightIndex)
        return [r0, g0, b0, a0];
    const rightStop = stops[rightIndex];
    const [r1, g1, b1, a1] = rightStop;
    const leftPosition = leftStop[4];
    const rightPosition = rightStop[4];
    const delta = rightPosition - leftPosition;
    const positionDelta = position - leftPosition;
    const amount = positionDelta / delta;
    const color = mix_1.mix(r0, g0, b0, a0, r1, g1, b1, a1, amount);
    return color;
};
const findBoundingIndices = (position, sortedStops) => {
    const { length } = sortedStops;
    if (length === 0)
        throw Error('No positions');
    if (length === 1)
        return [0, 0];
    if (sortedStops[0][4] > position)
        return [0, 0];
    if (sortedStops[length - 1][4] < position)
        return [length - 1, length - 1];
    let result = [NaN, NaN];
    for (let i = 0; i < length; i++) {
        const current = sortedStops[i];
        const next = sortedStops[i + 1];
        if (current[4] === position) {
            result = [i, i];
            break;
        }
        if (current[4] < position && next[4] > position) {
            result = [i, i + 1];
            break;
        }
    }
    return result;
};
const sortRgbaStops = (stops) => stops.slice().sort((a, b) => a[4] - b[4]);
//# sourceMappingURL=gradient.js.map