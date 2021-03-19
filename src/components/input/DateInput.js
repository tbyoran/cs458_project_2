import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import theme from '../../theme';

const Input = (props) => {
  const { accessibilityLabel, mode, defaultLabel, defaultStyle, id, inputStyle, maximumDate, name, onChange, testID, value } = props;
  const defaultValue = new Date();
  const [show, setShow] = useState(false);

  return (
    <View style={[defaultStyle, inputStyle]}>
      {show ? (
        <DateTimePicker
          accessibilityLabel={accessibilityLabel + "_" + "picker"}
          id={id + "_" + "picker"}
          key={name + "_" + "picker"}
          name={name + "_" + "picker"}
          testID={testID + "_" + "picker"}
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
        <TouchableOpacity accessibilityLabel={accessibilityLabel} activeOpacity={0.4} id={id} key={name} name={name} testID={testID} onPress={() => setShow(true)} style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{ color: value ? theme.Colors.dark : theme.Colors.gray, fontSize: 16 }}>{(value && value.toLocaleDateString()) || defaultLabel}</Text>
        </TouchableOpacity>
      )
      }
    </View>
  );
};

export default Input;