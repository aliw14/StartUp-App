import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Header} from '../components/Header';
import {AboutYou, IAboutYou} from '../components/AboutYou';
import {About} from '../mock/AboutYouMock';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '../types/navigation.type';
import {Routes} from '../router/routes';
import {colors} from '../theme/colors';

export const AboutYouScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.aboutYou>
> = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate(Routes.selectTravel);
    }, 2000); 
  };

  const renderItem = ({item}: {item: IAboutYou}) => (
    <AboutYou onPress={handlePress} image={item.image} choice={item.choice} />
  );

  return (
    <View style={{flex: 1}}>
      <Header
        rightActionType="icon"
        onLeftPress={navigation.goBack}
        right={vectors.information}
        title="Who are you"
        titleColor={colors.white}
      />
      <Image
        style={{width: 264, height: 196, alignSelf: 'center'}}
        source={require('../assets/images/userLogoTwo.png')}
      />
      <View style={styles.line}></View>
      <View style={styles.bottom}>
        <View style={{width: 330, height: 78, marginTop: 13}}>
          <Text style={styles.title}>I am a... | Soy un...</Text>
          <Text style={styles.description}>
            Please select from the options provided below. | Por favor
            seleccione una de las opciones a continuacion.
          </Text>
        </View>
      </View>
      <ScrollView style={{flex: 1, marginLeft: 10}}>
        <FlatList
          scrollEnabled={false}
          data={About}
          renderItem={renderItem}
          keyExtractor={(item, index) =>
            item.id ? item.id.toString() : index.toString()
          }
        />
        
      </ScrollView>
      <Modal visible={isLoading} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <Image
            style={styles.loadingImage}
            source={require('../assets/images/departmentLogo.png')}
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
});
const vectors = {
  information: {
    icon: require('../assets/vectors/about.svg'),
    width: 24,
    height: 24,
  },
};
