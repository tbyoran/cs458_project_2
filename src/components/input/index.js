import React from 'react';

import { StyleSheet, View } from 'react-native';
import DateInput from './DateInput';
import DropdownInput from './DropdownInput';
import TextInput from './TextInput';
import Icon from 'react-native-vector-icons/FontAwesome5';

import theme from '../../theme';

const Input = (props) => {
  const { iconName, testID, type, style } = props;

  function testProps(id) {
    return { testID: id, accessibilityLabel: id };
  }

  const inputElement = (type, testID) => {
    switch (type) {
      case "date":
        return (<DateInput {...props} {...testProps(testID)} defaultStyle={styles.input} />);
      case "dropdown":
        return (<DropdownInput {...props} {...testProps(testID)} defaultStyle={styles.input} />);
      case "text":
        return (<TextInput {...props} {...testProps(testID)} defaultStyle={styles.input} />);
      default:
        return null;
    }
  }

  return (
    <View style={[styles.wrapper, style]} >
      {iconName && (
        <View style={styles.iconWrapper}>
          <Icon color={theme.Colors.dark} name={iconName} size={16} />
        </View>
      )}
      {inputElement(type, testID)}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 64,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    color: theme.Colors.dark,
    borderColor: theme.Colors.dark,
    // borderRadius: 16,
    // borderWidth: 1,
    // margin: 16,
    // backgroundColor: '#b5b8b6',
  },
  iconWrapper: {
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    padding: 8,
    fontSize: 16,
  }
});

export default Input;