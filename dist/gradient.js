"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@rgba-image/common");
const mix_1 = require("./mix");
exports.gradientRgba = (stops, position) => {
    if (!stops.every(common_1.isRgbaStop))
        throw Error('Expected an array of RgbaStop');
    stops = sortStops(stops);
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
exports.gradientRgbaUInt32 = (stops, position) => {
    if (!stops.every(common_1.isRgbaUint32Stop))
        throw Error('Expected an array of RgbaUint32Stop');
    stops = sortStops(stops, 1);
    const [leftIndex, rightIndex] = findBoundingIndices(position, stops, 1);
    const leftStop = stops[leftIndex];
    const [v0] = leftStop;
    if (leftIndex === rightIndex)
        return v0;
    const [r0, g0, b0, a0] = common_1.uint32ToRgba(v0, common_1.isLittleEndian);
    const rightStop = stops[rightIndex];
    const [v1] = rightStop;
    const [r1, g1, b1, a1] = common_1.uint32ToRgba(v1, common_1.isLittleEndian);
    const leftPosition = leftStop[1];
    const rightPosition = rightStop[1];
    const delta = rightPosition - leftPosition;
    const positionDelta = position - leftPosition;
    const amount = positionDelta / delta;
    const color = mix_1.mixUint32(r0, g0, b0, a0, r1, g1, b1, a1, amount);
    return color;
};
exports.gradientChannel = (stops, position) => {
    if (!stops.every(common_1.isChannelStop))
        throw Error('Expected an array of ChannelStop');
    stops = sortStops(stops, 1);
    const [leftIndex, rightIndex] = findBoundingIndices(position, stops, 1);
    const leftStop = stops[leftIndex];
    const [c0] = leftStop;
    if (leftIndex === rightIndex)
        return c0;
    const rightStop = stops[rightIndex];
    const [c1] = rightStop;
    const leftPosition = leftStop[1];
    const rightPosition = rightStop[1];
    const delta = rightPosition - leftPosition;
    const positionDelta = position - leftPosition;
    const amount = positionDelta / delta;
    const color = mix_1.mixChannel(c0, c1, amount);
    return color;
};
const findBoundingIndices = (position, sortedStops, positionIndex = 4) => {
    const { length } = sortedStops;
    if (length === 1)
        return [0, 0];
    if (length && sortedStops[0][positionIndex] > position)
        return [0, 0];
    if (length && sortedStops[length - 1][positionIndex] < position)
        return [length - 1, length - 1];
    for (let i = 0; i < length; i++) {
        const current = sortedStops[i];
        const next = sortedStops[i + 1];
        if (current[positionIndex] === position) {
            return [i, i];
        }
        if (current[positionIndex] < position && next[positionIndex] > position) {
            return [i, i + 1];
        }
    }
    throw Error('No positions');
};
const sortStops = (stops, positionIndex = 4) => stops.slice().sort((a, b) => a[positionIndex] - b[positionIndex]);
//# sourceMappingURL=gradient.js.map