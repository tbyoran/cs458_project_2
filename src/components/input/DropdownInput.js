import React from 'react';
import { Picker } from '@react-native-picker/picker';

import theme from '../../theme';


const Input = (props) => {
  const { accessibilityLabel, data, defaultStyle, inputStyle, key, name, onChange, testID, value } = props;

  return (
    <Picker
      accessibilityLabel={accessibilityLabel}
      key={key}
      name={name}
      onValueChange={onChange}
      selectedValue={value}
      style={[defaultStyle, inputStyle]}
      testID={testID}
    >
      {
        data && data.map(item => (<Picker.Item color={item.value ? theme.Colors.dark : theme.Colors.gray} key={item.value} label={item.label} value={item.value} testID={testID + "_" + item.value} />))
      }
    </Picker>
  );
};
export default Input;