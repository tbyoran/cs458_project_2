import React from 'react';

import { StyleSheet, View } from 'react-native';
import DateInput from './DateInput';
import DropdownInput from './DropdownInput';
import TextInput from './TextInput';
import Icon from 'react-native-vector-icons/FontAwesome5';

import theme from '../../theme';

import { testProps } from '../../utils';

const Input = (props) => {
  const { iconName, name, type, style } = props;

  const inputElement = (type) => {
    switch (type) {
      case "date":
        return (<DateInput {...props} {...testProps(name)} defaultStyle={styles.input} />);
      case "dropdown":
        return (<DropdownInput {...props} {...testProps(name)} defaultStyle={styles.input} />);
      case "text":
        return (<TextInput {...props} {...testProps(name)} key={name} defaultStyle={styles.input} />);
      default:
        return null;
    }
  }

  return (
    <View style={[styles.wrapper, style]}>
      {iconName && (
        <View style={styles.iconWrapper}>
          <Icon color={theme.Colors.dark} name={iconName} size={16} />
        </View>
      )}
      {inputElement(type)}
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