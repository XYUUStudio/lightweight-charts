import { PaneWidget } from '../../gui/pane-widget';
import { PriceAxisWidget, PriceAxisWidgetSide } from '../../gui/price-axis-widget';

import { ChartOptionsInternal } from '../../model/chart-model';
import { PriceScaleMode, PriceScaleOptions } from '../../model/price-scale';
import { PriceAxisRendererOptionsProvider } from '../../renderers/price-axis-renderer-options-provider';

export const priceScaleOptionsDefaults: PriceScaleOptions = {
	autoScale: true,
	mode: PriceScaleMode.Normal,
	yAxisWidget: (pane: PaneWidget, options: Readonly<ChartOptionsInternal>, rendererOptionsProvider: PriceAxisRendererOptionsProvider, side: PriceAxisWidgetSide) => new PriceAxisWidget(pane, options, rendererOptionsProvider, side),
	invertScale: false,
	alignLabels: true,
	borderVisible: true,
	borderColor: '#2B2B43',
	entireTextOnly: false,
	visible: false,
	ticksVisible: false,
	scaleMargins: {
		bottom: 0.1,
		top: 0.2,
	},
};
