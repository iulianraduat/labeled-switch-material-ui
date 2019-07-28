# labeled-switch-material-ui

A material-ui component which implements a iOS like switch with a label on each side

---

## Demo

You can access the storybook for this component [here](https://iulian-radu-at.github.io/labeled-switch-material-ui/).

## Props

The component accepts the props defined bellow in the table.

### Props accepted by LabeledSwitchMaterialUi

| Name              | Type                          | Required | Default   | Description                                                    |
|-------------------|-------------------------------|----------|-----------|----------------------------------------------------------------|
| aspectRatioSwitch | number                        | no       | 2         | The width/height ratio of the switch                           |
| defaultKnobOnLeft | boolean                       | no       | false     | The initial position of the knob                               |
| disabled          | boolean                       | no       | false     | The component is disabled                                      |
| knobOnLeft        | boolean                       | no       | false     | If true, the knob is on the left, otherwise on the right       |
| knobSize          | number                        | no       | 18        | The size of the knob                                           |
| labelLeft         | string                        | yes      | -         | The label on the left of the switch                            |
| labelRight        | string                        | yes      | -         | The label on the right of the switch                           |
| onChange          | (knobOnLeft: boolean) => void | no       | undefined | The callback function called when the knob position is changed |
| style             | CSSProperties                 | no       | undefined | The style applied to the container                             |
| styleLabelLeft    | CSSProperties                 | no       | undefined | The style applied to the label on left                         |
| styleLabelRight   | CSSProperties                 | no       | undefined | The style applied to the label on right                        |
| styleSwitch       | CSSProperties                 | no       | undefined | The style applied to the switch                                |

---

## Versions

| LabeledSwitchMaterialUi _uses_ | Material-ui | React  |
|-------------------------------:|:-----------:|:------:|
|                          1.0.x |    3.6.0    | 16.6.3 |
|                          1.1.x |    3.9.2    | 16.8.1 |
|                          1.2.x |    3.9.3    | 16.8.6 |
|                          2.0.x |    4.0.2    | 16.8.6 |
|                          2.1.x |    4.2.0    | 16.8.6 |
|                          3.0.x |    4.2.1    | 16.8.6 |

### About versioning schema used for LabeledSwitchMaterialUi

- Major - it will be increased if the major version of material-ui changes or there are breaking changes in the code of LabeledSwitchMaterialUi
- Minor - it will be increased if no major version of the dependat package changes, but there are changes of the minor or patch versions of it
- Patch - it will be increased if there are no changes of the dependat packages, but there are non breaking changes in the code of LabeledSwitchMaterialUi

---

## Example

The base component which allows to create read-only or creatable select components for selecting only one or more values:

```js
import * as React from "react";
import LabeledSwitchMaterialUi from "labeled-switch-material-ui";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LabeledSwitchMaterialUi
          labelLeft="Use numbers"
          labelRight="Use strings"
          onChange={this.handleChange}
        />
      </div>
    );
  }

  handleChange = (knobOnLeft: boolean) => {
    console.log(knobOnLeft);
  };
}

export default App;
```

---

## Changelog

### 1.0.0

- labeled-switch-material-ui is made publicly available

### 1.0.1

- Clicking on a label we switch the knob to it

### 1.1.0

- Updated packages

### 1.2.0

- Updated packages

### 2.0.0

- Updated packages

### 2.1.0

- Updated packages

### 3.0.0

- Made the component to be controlled and uncontrolled
- Added a storybook
- Updated packages
