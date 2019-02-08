import * as React from 'react';
import { isFunction, isEmpty } from 'lodash';

class Label extends React.PureComponent<LabelProps> {
	public render() {
		const { label, onClick } = this.props;

		return (
			<div onClick={onClick} style={this.getStyle()}>
				{label}
			</div>
		);
	}

	private getStyle() {
		const { disabled, onClick, style } = this.props;

		const defaultStyle = {
			cursor: isFunction(onClick) ? 'pointer' : undefined,
			opacity: disabled ? 0.4 : 1
		};

		if (isEmpty(style)) {
			return defaultStyle;
		}

		return {
			...defaultStyle,
			...style as React.CSSProperties
		};
	}
}

interface LabelProps {
	disabled?: boolean;
	label: string;
	onClick?: () => void;
	style?: React.CSSProperties;
}

export default Label;
