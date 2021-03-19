import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import theme from '../theme';

const Button = (props) => {
  const { accessibilityLabel, disabled, id, name, onPress, style, testID, title, titleStyle } = props;

  return (
    <TouchableOpacity
      accessibilityLabel={accessibilityLabel}
      id={id}
      key={name}
      name={name}
      testID={testID}
      activeOpacity={0.7}
      disabled={disabled}
      onPress={onPress}
      style={[
        !disabled && theme.Styles.Shadow,
        styles.button,
        style,
        disabled && styles.disabledButton
      ]}
    >
      <Text
        style={[
          styles.title,
          titleStyle,
          disabled && styles.disabledTitle
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 0,
    borderColor: theme.Colors.Button.Primary.Border,
    backgroundColor: theme.Colors.Button.Primary.Background,
  },
  title: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontSize: 16,
    color: theme.Colors.Button.Primary.Title,
  },
  disabledButton: {
    backgroundColor: theme.Colors.Button.Disabled.Background,
    borderColor: theme.Colors.Button.Disabled.Border,

  },
  disabledTitle: {
    color: theme.Colors.Button.Disabled.Title
  }
});

export default Button;

