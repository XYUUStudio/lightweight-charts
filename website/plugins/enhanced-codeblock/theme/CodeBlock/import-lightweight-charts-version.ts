/* eslint-disable @typescript-eslint/naming-convention -- allows using version numbers as keys (e.g. "3.8") */
import type { Version } from '../../../../versions';

export type LightweightChartsApi38 = typeof import('lightweight-charts-3.8');
export type LightweightChartsApi40 = typeof import('lightweight-charts-4.0');
export type LightweightChartsApiCurrent = typeof import('../../../../..');

export interface LightweightChartsApiTypeMap {
	'3.8': LightweightChartsApi38;
	'4.0': LightweightChartsApi40;
	current: LightweightChartsApiCurrent;
}

export interface LightweightChartsCreateChartTypeMap {
	'3.8': LightweightChartsApi38['createChart'];
	'4.0': LightweightChartsApi40['createChart'];
	current: LightweightChartsApiCurrent['createChart'];
}

export type LightweightChartsVersion = Version | 'current';

export interface LightweightChartsApiGetterResult<T extends keyof LightweightChartsApiTypeMap> {
	module: LightweightChartsApiTypeMap[T];
	createChart: LightweightChartsApiTypeMap[T]['createChart'];
}

export type LightweightChartsApiGetters = {
	[K in keyof LightweightChartsApiTypeMap]: (window: Window) => Promise<LightweightChartsApiGetterResult<K>>;
};

function addResizeHandler(window: Window, container: HTMLElement, resize: (width: number, height: number) => void): void {
	const resizeListener = () => {
		const boundingClientRect = (container).getBoundingClientRect();
		resize(boundingClientRect.width, boundingClientRect.height);
	};

	window.addEventListener('resize', resizeListener, true);
}

export const importLightweightChartsVersion: LightweightChartsApiGetters = {
	3.8: async (window: Window) => {
		const module = await import('lightweight-charts-3.8');

		const createChart: typeof module.createChart = (container: string | HTMLElement, options?: Parameters<typeof module.createChart>[1]) => {
			const result = module.createChart(container, options);
			addResizeHandler(window, container as HTMLElement, result.resize.bind(result));
			return result;
		};

		return { module, createChart };
	},
	'4.0': async (window: Window) => {
		const module = await import('lightweight-charts-4.0');

		const createChart: typeof module.createChart = (container: string | HTMLElement, options?: Parameters<typeof module.createChart>[1]) => {
			const result = module.createChart(container, options);
			addResizeHandler(window, container as HTMLElement, result.resize.bind(result));
			return result;
		};

		return { module, createChart };
	},
	current: async () => {
		const module = await import('../../../../../src/');

		const createChart: typeof module.createChart = (container: string | HTMLElement, options?: Parameters<typeof module.createChart>[1]) => {
			const result = module.createChart(container, options);
			addResizeHandler(window, container as HTMLElement, result.resize.bind(result));
			return result;
		};

		return { module, createChart };
	},
};
