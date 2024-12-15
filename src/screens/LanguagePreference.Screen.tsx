import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';
import {Button} from '../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Routes} from '../router/routes';
import {NavigationParamList} from '../types/navigation.type';
import {Radio} from '../components/Radio';
import {Header} from '../components/Header';
import {colors} from '../theme/colors';

export const LanguagePreferenceScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.languagePreference>
> = ({navigation}) => {
  const {t} = useTranslation();
  const [selectedValue, setSelectedValue] = useState(i18next.language);
  const [_, setRender] = useState(false);

  useEffect(() => {
    if (!i18next.isInitialized) {
      console.warn('i18next is not initialized yet!');
    }
  }, []);

  const changeLng = (lng: string) => {
    i18next.changeLanguage(lng).then(() => {
      setSelectedValue(lng);
      setRender(prev => !prev);
    });
  };

  const options = [
    {label: 'English', value: 'en'},
    {label: 'Español', value: 'esp'},
    {label: 'Kreyòl asisyen', value: 'kre'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftActionType="icon"
        left={{
          icon: require('../assets/vectors/arrow_left.svg'),
          width: 24,
          height: 24,
          color: colors.white,
        }}
        onLeftPress={navigation.goBack}
        title="Language Preference"
        rightActionType="icon"
        right={{
          icon: require('../assets/vectors/human.svg'),
          width: 24,
          height: 24,
          color: colors.white,
        }}
        titleColor={colors.white}
      />
      <View style={styles.texts}>
        <Text style={styles.text}>
          {t('Please select from the options below.')}
        </Text>
        <Text style={styles.text}>
          {t('Por favor seleccione una de las opciones a continuación.')}
        </Text>
        <Text style={[styles.text, {paddingBottom: 20}]}>
          {t('Tanpri chwazi nan opsyon yo bay anba a.')}
        </Text>
      </View>

      <View style={styles.line}></View>

      <Radio
        style={{left: -20, marginTop: 20}}
        options={options}
        checkedValue={selectedValue}
        onChange={value => {
          setSelectedValue(value);
          changeLng(value);
        }}
      />

      <View style={styles.buttonContainer}>
        <View style={styles.buttons}>
          <Button
            width={58}
            height={21}
            style={styles.button}
            text={t('backBtn')}
            textColor={colors.bg.openBlue}
            onPress={() => navigation.goBack()}
          />

          <Button
            width={58}
            height={21}
            style={styles.button}
            text={t('continueBtn')}
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

// const vectors = {
//   arrow_left: {
//     icon: require('../assets/vectors/arrow_left.svg'),
//     width: 24,
//     height: 24,
//     color: colors.white,
//   },
//   human: {
//     icon: require('../assets/vectors/human.svg'),
//     width: 24,
//     height: 24,
//     color: colors.white,
//   },
// };
