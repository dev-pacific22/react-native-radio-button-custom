# React Native Radio Button.
## react-native-radio-button-custom
The npm package for react native radio button, where we can customised the radio button component to any design with its generic features.

## Inatsallation: 
With npm

``` npm install react-native-radio-button-custom --save ```

 With yarn

``` yarn add react-native-radio-button-custom ```


## Usage:
```javascript
import RadioGroup from 'react-native-radio-button-custom';

 const data = [
    {
      id: 0,
      key: 'male',
      name: 'Male',
    },
    {
      id: 1,
      key: 'female',
      name: 'Female',
    },
    {
      id: 2,
      key: 'others',
      name: 'Others',
    },
  ];

 <RadioGroup 
    items={data} 
    onItemSelect={onItemSelect} 
    />

```
Property | Type | Required | Description 
--------- | ------- | ---- | ----------------------
items | Array of object | true | Actual array of data input
onItemSelect | Function  | true | A handler function for item selection.
custom | Boolean | false |  To render a custom radio button, default value = false.
labelStyle | Object | false |  The label style object.
selectedLabelStyle | Object | false |  The selected label style object.
containerStyle | Object | false |  The whole Radio group label style object.
buttonColor | String | false |  The radio button color, Default value '#2351AA'.
orientation | String | false |  The orientation of Radio Group, vertical or horizontal, Default  is 'vertical'.
