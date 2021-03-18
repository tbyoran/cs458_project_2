import React, { useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import { Button, Input } from './components';

import theme from './theme';

import { Constants } from './utils';

const DEBUG = false;

const App = () => {
  const [name, setName] = useState(DEBUG && Constants.DEBUG.name || null);
  const [surname, setSurname] = useState(DEBUG && Constants.DEBUG.surname || null);
  const [gender, setGender] = useState(DEBUG && Constants.DEBUG.gender || null);
  const [birthday, setBirthday] = useState(DEBUG && Constants.DEBUG.birthday || null);
  const [city, setCity] = useState(DEBUG && Constants.DEBUG.city || null);
  const [vaccineType, setVaccineType] = useState(DEBUG && Constants.DEBUG.vaccineType || null);
  const [otherVaccineType, setOtherVaccineType] = useState(DEBUG && Constants.DEBUG.otherVaccineType || null);
  const [sideEffect, setSideEffect] = useState(null);

  const _checkFormValidation = () => {
    return (name && surname && gender && birthday && city && (vaccineType && (vaccineType === -1 ? otherVaccineType : true)));
  }

  const _sendSurvey = () => {
    setName(null);
    setSurname(null);
    setGender(null);
    setBirthday(null);
    setCity(null);
    setVaccineType(null);
    setOtherVaccineType(null);
    setSideEffect(null);
  }

  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={styles.scrollView}
        >
          <View style={styles.body}>
            <Text style={styles.sectionTitle}>Covid-19 Vaccine Survey</Text>

            <View style={styles.sectionContainer}>
              <Input
                iconName="user-alt"
                key="name"
                name="name"
                onChangeText={(text) => setName(text)}
                placeholder="Name"
                testID="name"
                type="text"
                value={name}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Input
                iconName="canadian-maple-leaf"
                key="surname"
                name="surname"
                onChangeText={(text) => setSurname(text)}
                placeholder="Surname"
                testID="surname"
                type="text"
                value={surname}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Input
                data={Constants.Genders}
                iconName="venus-mars"
                key="gender"
                name="gender"
                onChange={(itemValue) => setGender(itemValue)}
                testID="gender"
                type="dropdown"
                value={gender}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Input
                defaultLabel={Constants.Birthday}
                iconName="calendar"
                key="birthday"
                maximumDate={new Date()}
                mode="date"
                name="birthday"
                onChange={(event, date) => setBirthday(date)}
                testID="birthday"
                type="date"
                value={birthday}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Input
                data={Constants.Cities}
                iconName="city"
                key="city"
                name="city"
                onChange={(itemValue) => setCity(itemValue)}
                testID="city"
                type="dropdown"
                value={city}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Input
                data={Constants.Vaccines}
                iconName="syringe"
                key="vaccineType"
                name="vaccineType"
                onChange={(itemValue) => setVaccineType(itemValue)}
                testID="vaccineType"
                type="dropdown"
                value={vaccineType}
              />
            </View>
            {
              (vaccineType == -1) && (
                <View style={styles.sectionContainer}>
                  <Input
                    key="otherVaccineType"
                    name="otherVaccineType"
                    onChangeText={(text) => setOtherVaccineType(text)}
                    placeholder="Please type another vaccine type"
                    testID="otherVaccineType"
                    type="text"
                    value={otherVaccineType}
                  />
                </View>
              )
            }
            <View style={styles.sectionContainer}>
              <Input
                iconName="comment"
                key="sideEffect"
                name="sideEffect"
                onChangeText={(text) => setSideEffect(text)}
                placeholder="Any side affect (Optional)"
                testID="sideEffect"
                type="text"
                value={sideEffect}
              />
            </View>
          </View>
          <View style={styles.footer}>
            <Button disabled={!_checkFormValidation()} onPress={() => _sendSurvey()} title="Send Survey" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  body: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: theme.Colors.dark,
  },
  footer: {
    marginTop: 36,
    minHeight: 48,
  }
});

export default App;
