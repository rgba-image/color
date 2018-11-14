export declare const gradientRgba: (stops: [number, number, number, number, number][], position: number) => [number, number, number, number];
export declare const gradientRgbaUInt32: (stops: [number, number][], position: number) => number;
export declare const gradientChannel: (stops: [number, number][], position: number) => number;
export declare const rgbaValuesToStops: (colors: [number, number, number, number][]) => [number, number, number, number, number][];
export declare const rgbaUint32ValuesToStops: (colors: number[]) => [number, number][];
export declare const channelValuesToStops: (colors: number[]) => [number, number][];
