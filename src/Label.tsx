import * as React from 'react';
import { isEmpty } from 'lodash';

const getStyle = (disabled?: boolean, style?: React.CSSProperties) => {
	if (isEmpty(style)) {
		return;
	}

	return {
		...style as React.CSSProperties,
		opacity: disabled ? 0.4 : 1
	};
};

const Label = React.memo((props: LabelProps) => <div style={getStyle(props.disabled, props.style)}>{props.label}</div>);

interface LabelProps {
	disabled?: boolean;
	label: string;
	style?: React.CSSProperties;
}

export default Label;
