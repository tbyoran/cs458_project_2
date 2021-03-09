import React from 'react';
import { TextInput } from 'react-native';

import theme from '../../theme';

const Input = (props) => {
  const { defaultStyle, inputStyle, name, onChange, onChangeText, placeholder, secureTextEntry, value } = props;

  return (
    <TextInput
      name={name}
      onChange={onChange}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={theme.Colors.gray}
      style={[{ color: theme.Colors.dark }, defaultStyle, inputStyle]}
      value={value}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default Input;