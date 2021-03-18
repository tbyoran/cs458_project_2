import React from 'react';
import { Picker } from '@react-native-picker/picker';

import theme from '../../theme';


const Input = (props) => {
  const { accessibilityLabel, data, id, defaultStyle, inputStyle, name, onChange, testID, value } = props;

  return (
    <Picker
      accessibilityLabel={accessibilityLabel}
      id={id}
      key={name}
      testID={testID}
      name={name}
      onValueChange={onChange}
      selectedValue={value}
      style={[defaultStyle, inputStyle]}
    >
      {
        data && data.map(item => (
          <Picker.Item
            accessibilityLabel={accessibilityLabel + "_" + item.value}
            id={id + "_" + item.value}
            key={name + "_" + item.value}
            name={name + "_" + item.value}
            testID={testID + "_" + item.value}
            color={item.value ? theme.Colors.dark : theme.Colors.gray}
            label={item.label}
            value={item.value}
          />))
      }
    </Picker>
  );
};
export default Input;