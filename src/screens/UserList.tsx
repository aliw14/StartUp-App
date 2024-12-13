import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Header} from '../components/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '../types/navigation.type';
import {Routes} from '../router/routes';
import {colors} from '../theme/colors';
import {Button} from '../components/Button';
import {SvgImage} from '../components/SvgImage';

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
        backgroundColor={colors.bg.blue}
        textColor={colors.white}
      />
      <View
        style={{
          borderBottomWidth: 1,
          marginTop: 20,
          borderBottomColor: colors.border.line,
        }}></View>
      <View style={styles.userBox}>
        <SvgImage
          source={require('../assets/vectors/check.svg')}
          style={styles.svgImage}
        />
        <View style={styles.customConditionsCart}>
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.userDetails)}
            style={styles.touchableContainer}>
            <Text style={[styles.title, {color: colors.black}]}>
              APPOINTMENT SCHEDULED
            </Text>
            <Text style={styles.description}>
              Garita El Chaparra / Pedwest San on Nov 15, 2024 at 20:00
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    borderRadius: 3,
    width: 328,
    alignSelf: 'center',
    marginTop: 20,
    fontFamily: 'Lato-Bold',
  },
  userBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 20,
  },
  svgImage: {
    marginRight: 10,
  },
  customConditionsCart: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
  },
  touchableContainer: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 14,
    fontFamily: 'Araboto-Normal',
  },
  description: {
    fontSize: 11,
    width: '85%',
    fontFamily: 'Lato-Regular',
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
