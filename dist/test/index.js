"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mix_1 = require("../mix");
const gradient_1 = require("../gradient");
console.log(mix_1.mix(255, 0, 0, 255, 0, 0, 255, 255, 0), mix_1.mix(255, 0, 0, 255, 0, 0, 255, 255, 0.25), mix_1.mix(255, 0, 0, 255, 0, 0, 255, 255, 0.5), mix_1.mix(255, 0, 0, 255, 0, 0, 255, 255, 0.75), mix_1.mix(255, 0, 0, 255, 0, 0, 255, 255, 1));
const stops = [
    [0, 255, 0, 255, 0.5],
    [0, 0, 255, 255, 1],
    [255, 0, 0, 255, 0]
];
console.log(-1, gradient_1.gradientRgba(stops, -1));
console.log(0, gradient_1.gradientRgba(stops, 0));
console.log(0.25, gradient_1.gradientRgba(stops, 0.25));
console.log(0.5, gradient_1.gradientRgba(stops, 0.5));
console.log(0.75, gradient_1.gradientRgba(stops, 0.75));
console.log(1, gradient_1.gradientRgba(stops, 1));
console.log(1.25, gradient_1.gradientRgba(stops, 1.25));
//# sourceMappingURL=index.js.map