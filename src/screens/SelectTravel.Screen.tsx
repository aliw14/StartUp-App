import React, {useState} from 'react';
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import {Header} from '../components/Header';
import {Radio} from '../components/Radio';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '../types/navigation.type';
import {Routes} from '../router/routes';
import {colors} from '../theme/colors';
import {Button} from '../components/Button';

export const SelectTravelScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.selectTravel>
> = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('');

  const options = [
    {
      label: 'Land | Tierra',
      value: 'Land | Tierra',
      image: require('../assets/images/land.png'),
    },
    {
      label: 'Air | Aire',
      value: 'Air | Aire',
      image: require('../assets/images/air.png'),
    },
    {
      label: 'Sea | Mar',
      value: 'Sea | Mar',
      image: require('../assets/images/sea.png'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftActionType="icon"
        left={vectors.arrow_left}
        title="Select Travel Method"
        onLeftPress={() => navigation.goBack()}
        titleColor={colors.white}
      />
      <Text style={[styles.title]}>
        Please select from the options provided below. | Por favor seleccione
        una de las opciones a continuacion
      </Text>
      <View style={styles.line}></View>
      <Radio
        options={options}
        checkedValue={selectedValue}
        onChange={setSelectedValue}
      />
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
          onPress={() => navigation.navigate(Routes.home)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 13,
    fontWeight: '400',
    margin: 16,
    width: '90%',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 20,
    backgroundColor: '#F2F2F2',
    height: 80,
    marginTop: 'auto',
  },
  button: {
    borderRadius: 8,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border.bottom,
    marginBottom: 13,
  },
});

const vectors = {
  arrow_left: {
    icon: require('../assets/vectors/arrow_left.svg'),
    width: 24,
    height: 24,
  },
};
