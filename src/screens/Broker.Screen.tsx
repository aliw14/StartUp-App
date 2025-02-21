import React from 'react';
import {Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '../types/navigation.type';
import {Routes} from '../router/routes';

export const BrokerScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.brokerScreen>
> = () => {
  return (
    <View>
      <Text>BrokerScreen</Text>
    </View>
  );
};