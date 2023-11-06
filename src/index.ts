/// <reference types="_build-time-constants" />

export { LineStyle, LineType } from './renderers/draw-line';

export { TrackingModeExitMode } from './model/chart-model';
export { CrosshairMode } from './model/crosshair';
export { MismatchDirection } from './model/plot-list';
export { PriceScaleMode } from './model/price-scale';
export { PriceLineSource, LastPriceAnimationMode } from './model/series-options';
export { TickMarkType } from './model/time-scale';
export { ColorType } from './model/layout-options';

export {
	isBusinessDay,
	isUTCTimestamp,
} from './api/data-consumer';

export { createChart } from './api/create-chart';

export { ChartWidget } from './gui/chart-widget';
export { PaneWidget } from './gui/pane-widget';
export { CursorType, PriceAxisWidget } from './gui/price-axis-widget';
export { assert, ensureNotNull } from './helpers/assertions';
export { clone } from './helpers/strict-type-checks';
export { AutoscaleInfoImpl } from './model/autoscale-info-impl';
export { ChartModel } from './model/chart-model';
export { CustomPriceLine } from './model/custom-price-line';
export { Pane } from './model/pane';
export { PriceDataSource } from './model/price-data-source';
export { PriceScale } from './model/price-scale';
export { TimeScale } from './model/time-scale';
export { BitmapCoordinatesPaneRenderer } from './renderers/bitmap-coordinates-pane-renderer';
export { CompositeRenderer } from './renderers/composite-renderer';
export { CrosshairRenderer } from './renderers/crosshair-renderer';
export { PriceAxisRendererOptionsProvider } from './renderers/price-axis-renderer-options-provider';
export { drawCircle, hitTestCircle } from './renderers/series-markers-circle';
/**
 * Returns the current version as a string. For example `'3.3.0'`.
 */
export function version(): string {
	return process.env.BUILD_VERSION;
}
