import React from 'react';
import { TextInput } from 'react-native';

import theme from '../../theme';

const Input = (props) => {
  const { accessibilityLabel, defaultStyle, id, inputStyle, name, onChange, onChangeText, placeholder, secureTextEntry, testID, value } = props;

  return (
    <TextInput
      accessibilityLabel={accessibilityLabel}
      id={id}
      key={name}
      name={name}
      testID={testID}
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