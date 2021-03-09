import React from 'react';
import { Picker } from '@react-native-picker/picker';

import theme from '../../theme';


const Input = (props) => {
  const { data, defaultStyle, inputStyle, onChange, value } = props;

  return (
    <Picker
      onValueChange={onChange}
      selectedValue={value}
      style={[defaultStyle, inputStyle]}
    >
      {
        data && data.map(item => (<Picker.Item color={item.value ? theme.Colors.dark : theme.Colors.gray} key={item.value} label={item.label} value={item.value} />))
      }
    </Picker>
  );
};
export default Input;