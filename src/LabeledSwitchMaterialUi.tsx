import * as React from 'react';
import { isEmpty, isFunction } from 'lodash';
import IosSwitchMaterialUi from 'ios-switch-material-ui';

import Label from './Label';
import Layout from './Layout';

const styles: { [key: string]: React.CSSProperties } = {
	center: {
		color: '#e2e2e2'
	},
	left: {
		color: '#eeeeee'
	},
	right: {
		color: '#5269d8'
	}
};

class LabeledCheckboxMaterialUi extends React.PureComponent<LabeledCheckboxMaterialUiProps> {
	public render() {
		const {
			disabled,
			knobOnLeft,
			knobSize,
			labelLeft,
			labelRight,
			style,
			styleLabelLeft,
			styleLabelRight,
			styleSwitch,
			aspectRatioSwitch
		} = this.props;
		const disabledLeft: boolean = knobOnLeft !== true;
		const disabledRight: boolean = knobOnLeft === true;
		const styleLeft: React.CSSProperties = this.getStyleLabel(styles.left, styleLabelLeft);
		const styleRight: React.CSSProperties = this.getStyleLabel(styles.right, styleLabelRight);
		const styleOfToggle: React.CSSProperties = this.getStyleLabel(styles.center, styleSwitch);
		const colorKnobOnLeft: string = styleLeft.color as string;
		const colorKnobOnRight: string = styleRight.color as string;
		const colorSwitch: string = styleOfToggle.color as string;

		return (
			<Layout
				center={
					<IosSwitchMaterialUi
						aspectRatio={aspectRatioSwitch}
						colorKnobOnLeft={colorKnobOnLeft}
						colorKnobOnRight={colorKnobOnRight}
						colorSwitch={colorSwitch}
						disabled={disabled}
						knobSize={knobSize}
						knobOnLeft={knobOnLeft || false}
						onChange={this.handleSwitchKnob}
					/>
				}
				left={
					<Label
						disabled={disabledLeft}
						label={labelLeft}
						onClick={this.handleSelectLeft}
						style={styleLeft}
					/>
				}
				right={
					<Label
						disabled={disabledRight}
						label={labelRight}
						onClick={this.handleSelectRight}
						style={styleRight}
					/>
				}
				style={style}
			/>
		);
	}

	private getStyleLabel(defaultStyle: React.CSSProperties, style?: React.CSSProperties) {
		if (isEmpty(style)) {
			return defaultStyle;
		}

		return {
			...defaultStyle,
			...style as React.CSSProperties
		};
	}

	private handleSelectLeft = () => this.setKnobOnLeft(true);

	private handleSelectRight = () => this.setKnobOnLeft(false);

	private handleSwitchKnob = () => this.setKnobOnLeft(!this.props.knobOnLeft);

	private setKnobOnLeft(knobOnLeft: boolean) {
		const { onChange } = this.props;

		if (isFunction(onChange)) {
			onChange(knobOnLeft);
		}
	}
}

interface LabeledCheckboxMaterialUiProps {
	aspectRatioSwitch?: number;
	disabled?: boolean;
	knobOnLeft?: boolean;
	knobSize?: number;
	labelLeft: string;
	labelRight: string;
	onChange?: (knobOnLeft: boolean) => void;
	style?: React.CSSProperties;
	styleLabelLeft?: React.CSSProperties;
	styleLabelRight?: React.CSSProperties;
	styleSwitch?: React.CSSProperties;
}

export default LabeledCheckboxMaterialUi;
