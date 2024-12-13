import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Header} from '../components/Header';
import {colors} from '../theme/colors';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '../types/navigation.type';
import {Routes} from '../router/routes';
import {Radio} from '../components/Radio';
import {Button} from '../components/Button';

export const LanguagePreferenceScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.languagePreference>
> = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('Land | Tierra');

  const options = [
    {
      label: 'English',
      value: 'English',
    },
    {
      label: 'Español',
      value: 'Español',
    },
    {
      label: 'Kreyòl asisyen',
      value: 'Kreyòl asisyen',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftActionType="icon"
        left={vectors.arrow_left}
        onLeftPress={navigation.goBack}
        title="Language Preference"
        rightActionType="icon"
        right={vectors.human}
        titleColor={colors.white}
      />
      <View style={styles.texts}>
        <Text style={styles.text}>
          Please select from the options provided below.
        </Text>
        <Text style={styles.text}>
          Por favor seleccione una de las opciones a continuacion.
        </Text>
        <Text style={[styles.text, {paddingBottom: 20}]}>
          Tanpri chwazi nan opsyon yo bay anba a.
        </Text>
      </View>
      <View style={styles.line}></View>
      <Radio
        style={{left: -20, marginTop: 20}}
        options={options}
        checkedValue={selectedValue}
        onChange={setSelectedValue}
        onPress={() => console.log('Language selected')}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.buttons}>
          <Button
            width={58}
            height={19}
            textColor={colors.bg.openBlue}
            style={styles.button}
            text="BACK"
            onPress={() => navigation.goBack()}
          />
          <Button
            width={58}
            height={21}
            style={styles.button}
            text="CONTINUE"
            textColor={colors.bg.openBlue}
            onPress={() => navigation.navigate(Routes.advanceInformation)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: '400',
    width: 'auto',
    fontSize: 13,
  },
  texts: {
    gap: 14,
    marginTop: 19,
    alignSelf: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 20,
    backgroundColor: '#F2F2F2',
    height: 80,
  },
  button: {
    borderRadius: 8,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border.bottom,
  },
});

const vectors = {
  arrow_left: {
    icon: require('../assets/vectors/arrow_left.svg'),
    width: 24,
    height: 24,
    color: colors.white,
  },
  human: {
    icon: require('../assets/vectors/human.svg'),
    width: 24,
    height: 24,
    color: colors.white,
  },
};
