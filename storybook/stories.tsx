import LabeledSwitchMaterialUi from '../src/LabeledSwitchMaterialUi';
import React from 'react';
import { storiesOf } from '@storybook/react';

const style: React.CSSProperties = {
  height: 20
};

const styles: { [key: string]: React.CSSProperties } = {
  labelLeft: {
    color: 'red'
  },
  labelRight: {
    color: 'blue'
  },
  switch: {
    color: 'aqua'
  }
};

const showSelectedValue = (id: string) => (knobOnLeft: boolean) =>
  (document.getElementById(id).textContent = knobOnLeft ? 'knobOnLeft' : 'knobOnRight');

storiesOf('LabeledSwitchMaterialUi', module)
  .addParameters({ options: { showPanel: false } })
  .add('uncontrolled without knob position set', () => (
    <div>
      <LabeledSwitchMaterialUi
        labelLeft="Left label"
        labelRight="Right label"
        onChange={showSelectedValue('uncontrolled')}
      />
      <div style={style} />
      Selected value: <span id="uncontrolled" />
    </div>
  ))
  .add('uncontrolled with knob position set', () => (
    <div>
      <LabeledSwitchMaterialUi
        labelLeft="Left label"
        labelRight="Right label"
        defaultKnobOnLeft={true}
        onChange={showSelectedValue('uncontrolled')}
      />
      <div style={style} />
      Selected value: <span id="uncontrolled" />
    </div>
  ))
  .add('controlled', () => (
    <div>
      <LabeledSwitchMaterialUi
        labelLeft="Left label"
        labelRight="Right label"
        knobOnLeft={true}
        onChange={showSelectedValue('controlled')}
      />
      <LabeledSwitchMaterialUi
        labelLeft="Left label"
        labelRight="Right label"
        knobOnLeft={false}
        onChange={showSelectedValue('controlled')}
      />
      <div style={style} />
      Selected value: <span id="controlled" />
    </div>
  ))
  .add('disabled', () => (
    <div>
      <LabeledSwitchMaterialUi
        labelLeft="Left label"
        labelRight="Right label"
        disabled={true}
        onChange={showSelectedValue('disabled')}
      />
      <div style={style} />
      Selected value: <span id="disabled" />
    </div>
  ))
  .add('with custom colors', () => (
    <div>
      <LabeledSwitchMaterialUi
        labelLeft="Left label"
        labelRight="Right label"
        styleLabelLeft={styles.labelLeft}
        styleLabelRight={styles.labelRight}
        styleSwitch={styles.switch}
        onChange={showSelectedValue('colors')}
      />
      <div style={style} />
      Selected value: <span id="colors" />
    </div>
  ))
  .add('with custom aspect ratio', () => (
    <div>
      <LabeledSwitchMaterialUi
        labelLeft="Left label"
        labelRight="Right label"
        aspectRatioSwitch={5}
        onChange={showSelectedValue('aspect-ratio')}
      />
      <div style={style} />
      Selected value: <span id="aspect-ratio" />
    </div>
  ))
  .add('with custom knob size', () => (
    <div>
      <LabeledSwitchMaterialUi
        labelLeft="Left label"
        labelRight="Right label"
        knobSize={40}
        onChange={showSelectedValue('knob-size')}
      />
      <div style={style} />
      Selected value: <span id="knob-size" />
    </div>
  ));
