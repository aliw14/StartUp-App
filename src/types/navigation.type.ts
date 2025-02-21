import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Routes } from '../router/routes';

export type AppNavigation = NativeStackNavigationProp<NavigationParamList>;

export type NavigationParamList = {
    [Routes.test]: undefined;
    [Routes.home]: undefined;
    [Routes.welcome]: undefined;
    [Routes.conditions]: undefined;
    [Routes.register]: undefined;
    [Routes.aboutYou]: undefined;
    [Routes.selectTravel]: undefined;
    [Routes.languagePreference]: undefined;
    [Routes.advanceInformation]: undefined;
    [Routes.userList]: undefined;
    [Routes.userDetails]: undefined;
    [Routes.brokerScreen]: undefined;
    [Routes.editBroker]: undefined;
};
