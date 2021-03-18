import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import theme from '../../theme';

const Input = (props) => {
  const { accessibilityLabel, mode, defaultLabel, defaultStyle, inputStyle, key, maximumDate, name, onChange, testID, value } = props;
  const defaultValue = new Date();
  const [show, setShow] = useState(false);

  return (
    <View style={[defaultStyle, inputStyle]}>
      {show ? (
        <DateTimePicker
          accessibilityLabel={accessibilityLabel}
          display="default"
          is24Hour={true}
          key={key}
          maximumDate={maximumDate}
          mode={mode}
          name={name}
          onChange={(event, date) => {
            setShow(false);
            onChange(event, date);
          }}
          testID={testID}
          value={value || defaultValue}
        />
      ) : (
        <TouchableOpacity accessibilityLabel={accessibilityLabel} activeOpacity={0.4} key={key} name={name} onPress={() => setShow(true)} style={{ flex: 1, justifyContent: 'center' }} testID={testID}>
          <Text style={{ color: value ? theme.Colors.dark : theme.Colors.gray, fontSize: 16 }}>{(value && value.toLocaleDateString()) || defaultLabel}</Text>
        </TouchableOpacity>
      )
      }
    </View>
  );
};

export default Input;