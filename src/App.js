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

import { Constants, testProps } from './utils';

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
      <SafeAreaView {...testProps("root")}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={styles.scrollView}
          {...testProps("root-scroll")}
        >
          <View style={styles.body} {...testProps("body")}>
            <Text style={styles.sectionTitle}>Covid-19 Vaccine Survey</Text>

            <View style={styles.sectionContainer}>
              <Input
                iconName="user-alt"
                name="name"
                onChangeText={(text) => setName(text)}
                placeholder="Name"
                type="text"
                value={name}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Input
                iconName="canadian-maple-leaf"
                name="surname"
                onChangeText={(text) => setSurname(text)}
                placeholder="Surname"
                type="text"
                value={surname}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Input
                data={Constants.Genders}
                iconName="venus-mars"
                name="gender"
                onChange={(itemValue) => setGender(itemValue)}
                type="dropdown"
                value={gender}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Input
                defaultLabel={Constants.Birthday}
                iconName="calendar"
                maximumDate={new Date()}
                mode="date"
                name="birthday"
                onChange={(event, date) => setBirthday(date)}
                type="date"
                value={birthday}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Input
                data={Constants.Cities}
                iconName="city"
                name="city"
                onChange={(itemValue) => setCity(itemValue)}
                type="dropdown"
                value={city}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Input
                data={Constants.Vaccines}
                iconName="syringe"
                name="vaccineType"
                onChange={(itemValue) => setVaccineType(itemValue)}
                type="dropdown"
                value={vaccineType}
              />
            </View>
            {
              (vaccineType == -1) && (
                <View style={styles.sectionContainer}>
                  <Input
                    name="otherVaccineType"
                    onChangeText={(text) => setOtherVaccineType(text)}
                    placeholder="Please type another vaccine type"
                    type="text"
                    value={otherVaccineType}
                  />
                </View>
              )
            }
            <View style={styles.sectionContainer}>
              <Input
                iconName="comment"
                name="sideEffect"
                onChangeText={(text) => setSideEffect(text)}
                placeholder="Any side affect (Optional)"
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
