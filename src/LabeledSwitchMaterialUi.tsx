import * as React from 'react';
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

class LabeledSwitchMaterialUi extends React.PureComponent<LabeledSwitchMaterialUiProps, LabeledSwitchMaterialUiState> {
  constructor(props: LabeledSwitchMaterialUiProps) {
    super(props);

    this.state = {
      knobOnLeft: props.knobOnLeft || props.defaultKnobOnLeft || false
    };
  }

  public render() {
    const {
      disabled,
      knobSize,
      labelLeft,
      labelRight,
      style,
      styleLabelLeft,
      styleLabelRight,
      styleSwitch,
      aspectRatioSwitch
    } = this.props;
    const { knobOnLeft } = this.state;

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
            knobOnLeft={knobOnLeft}
            onChange={this.handleSwitchKnob}
          />
        }
        left={<Label disabled={disabledLeft} label={labelLeft} onClick={this.handleSelectLeft} style={styleLeft} />}
        right={
          <Label disabled={disabledRight} label={labelRight} onClick={this.handleSelectRight} style={styleRight} />
        }
        style={style}
      />
    );
  }

  private getStyleLabel(defaultStyle: React.CSSProperties, style?: React.CSSProperties) {
    if (style === undefined) {
      return defaultStyle;
    }

    return {
      ...defaultStyle,
      ...(style as React.CSSProperties)
    };
  }

  private handleSelectLeft = () => this.setKnobOnLeft(true);

  private handleSelectRight = () => this.setKnobOnLeft(false);

  private handleSwitchKnob = () => this.setKnobOnLeft(!this.state.knobOnLeft);

  private setKnobOnLeft(knobOnLeft: boolean) {
    const { disabled, onChange } = this.props;

    if (disabled) {
      return;
    }

    const newKnobOnLeft: boolean = !this.state.knobOnLeft;

    if (this.props.knobOnLeft === undefined) {
      this.setState({
        knobOnLeft: newKnobOnLeft
      });
    }

    onChange && onChange(newKnobOnLeft);
  }
}

interface LabeledSwitchMaterialUiState {
  knobOnLeft: boolean;
}

interface LabeledSwitchMaterialUiProps {
  aspectRatioSwitch?: number;
  defaultKnobOnLeft?: boolean;
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

export default LabeledSwitchMaterialUi;
