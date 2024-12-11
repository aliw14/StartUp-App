import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Header} from '../components/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '../types/navigation.type';
import {Routes} from '../router/routes';
import {colors} from '../theme/colors';
import {Button} from '../components/Button';
import {SvgImage} from '../components/SvgImage';
import {ConditionsCart} from '../components/ConditionsCart';

export const UserListScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.userList>
> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        leftActionType="icon"
        onLeftPress={navigation.goBack}
        left={vectors.arrow_left}
        title="Advance Information"
        titleColor={colors.white}
        rightActionType="icon"
        right={vectors.human}
      />
      <Button
        onPress={() => navigation.navigate(Routes.userDetails)}
        style={styles.button}
        text="REGISTER TRAVELERS"
        backgroundColor={colors.bg.openBlue}
        textColor={colors.white}
      />
      <View style={styles.userBox}>
        <SvgImage
          source={require('../assets/vectors/check.svg')}
          style={styles.svgImage}
        />
        <ConditionsCart
          onPress={() => navigation.navigate(Routes.userDetails)}
          titleColor={colors.black}
          title="APPOINTMENT SCHEDULED"
          description="Garita El Chaparra / Pedwest San on Nov 15, 2024 at 20:00"
          style={styles.conditionsCart}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    borderRadius: 8,
    width: 328,
    alignSelf: 'center',
    marginTop: 20,
    fontFamily: 'Aragon Sans SC Bold',
    fontWeight: '500',
  },
  userBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
  },
  svgImage: {
    marginRight: 10,
  },
  conditionsCart: {
    flex: 1,
  },
});

const vectors = {
  arrow_left: {
    icon: require('../assets/vectors/arrow_left.svg'),
    width: 24,
    height: 24,
  },
  human: {
    icon: require('../assets/vectors/human.svg'),
    width: 24,
    height: 24,
  },
};
