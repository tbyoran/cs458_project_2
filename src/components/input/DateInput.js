import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import theme from '../../theme';

const Input = (props) => {
  const { mode, defaultLabel, defaultStyle, inputStyle, maximumDate, onChange, value } = props;
  const defaultValue = new Date();
  const [show, setShow] = useState(false);

  return (
    <View style={[defaultStyle, inputStyle]}>
      {show ? (
        <DateTimePicker
          display="default"
          is24Hour={true}
          maximumDate={maximumDate}
          mode={mode}
          onChange={(event, date) => {
            setShow(false);
            onChange(event, date);
          }}
          value={value || defaultValue}
        />
      ) : (
          <TouchableOpacity activeOpacity={0.4} onPress={() => setShow(true)} style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ color: value ? theme.Colors.dark : theme.Colors.gray, fontSize: 16 }}>{(value && value.toLocaleDateString()) || defaultLabel}</Text>
          </TouchableOpacity>
        )
      }
    </View>
  );
};

export default Input;