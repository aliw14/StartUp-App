import React from 'react';
import {Text, View} from 'react-native';
import {Header} from '../components/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '../types/navigation.type';
import {Routes} from '../router/routes';

export const EditBrokerScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.editBroker>
> = ({navigation}) => {
  return (
    <View>
      <Header
        title="Edit Broker Profile"
        titleColor="white"
        leftActionType="icon"
        left={vectors.arrow_left}
        onLeftPress={() => navigation.navigate(Routes.brokerScreen)}
      />
      <Text>BROKER INFORMATION</Text>
    </View>
  );
};

const vectors = {
  arrow_left: {
    icon: require('../assets/vectors/arrow_left.svg'),
    width: 24,
    height: 24,
  },
};
