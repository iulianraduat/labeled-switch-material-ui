import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import LabeledSwitchMaterialUi from '../src/LabeledSwitchMaterialUi';

const style: React.CSSProperties = {
  height: 20,
};

const styles: { [key: string]: React.CSSProperties } = {
  labelLeft: {
    color: 'red',
  },
  labelRight: {
    color: 'blue',
  },
  switch: {
    color: 'aqua',
  },
};

const showSelectedValue = (id: string) => (knobOnLeft: boolean) =>
  (document.getElementById(id)!.textContent = knobOnLeft
    ? 'knobOnLeft'
    : 'knobOnRight');

const meta: Meta<typeof LabeledSwitchMaterialUi> = {
  title: 'LabeledSwitchMaterialUi',
  component: LabeledSwitchMaterialUi,
} as Meta<typeof LabeledSwitchMaterialUi>;
export default meta;
type Story = StoryObj<typeof LabeledSwitchMaterialUi>;

export const UncontrolledWithoutKnobPositionSet = () => (
  <div>
    <LabeledSwitchMaterialUi
      labelLeft="Left label"
      labelRight="Right label"
      onChange={showSelectedValue('uncontrolled')}
    />
    <div style={style} />
    Selected value: <span id="uncontrolled" />
  </div>
);

export const UncontrolledWithKnobPositionSet = () => (
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
);

export const Controlled = () => (
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
);

export const Disabled = () => (
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
);

export const WithCustomColors = () => (
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
);

export const WithCustomAspectRatio = () => (
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
);

export const withCustomKnobSize = () => (
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
);
