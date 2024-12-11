import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  View,
} from 'react-native';
import {ConditionsCart, IConditionsCart} from '../components/ConditionsCart';
import {Traveler} from '../mock/ConditonsMock';
import {colors} from '../theme/colors';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '../types/navigation.type';
import {Routes} from '../router/routes';
import FastImage from 'react-native-fast-image';

export const HomeScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.home>
> = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const handlePress = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate(Routes.languagePreference);
    }, 2000);
  };
  const renderItem = ({item}: {item: IConditionsCart}) => {
    return (
      <ConditionsCart
        titleColor={colors.bg.blue}
        title={item.title}
        description={item.description}
        onPress={handlePress}
        style={styles.cart}
        rightIcon={require('../assets/vectors/arrow_right.svg')}></ConditionsCart>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Image
        style={{width: 307, height: 155, alignSelf: 'center', marginTop: 35}}
        source={require('../assets/images/bigMap.png')}
      />
      <View style={styles.line}></View>

      <View style={{flex: 1, marginLeft: 10}}>
        <FlatList
          data={Traveler}
          renderItem={renderItem}
          keyExtractor={(item, index) =>
            item.id ? item.id.toString() : index.toString()
          }
        />
      </View>
      <Modal visible={isLoading} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <FastImage
            style={styles.loadingImage}
            source={require('../assets/images/main.gif')}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    borderWidth: 1,
    width: Dimensions.get('screen').width,
    height: 3,
    borderColor: colors.red.line,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 30,
    backgroundColor: colors.red.line,
  },
  bottom: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#00497C',
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    width: 330,
    height: 51,
    marginTop: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  loadingImage: {
    width: 260,
    height: 260,
  },
  cart: {
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
  },
});
