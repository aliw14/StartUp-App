import React, {useState, useRef, useCallback} from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Header} from '../components/Header';
import {colors} from '../theme/colors';
import {FlashList} from '@shopify/flash-list';
import {ConditionsCart} from '../components/ConditionsCart';
import {advanceInformation} from '../mock/ConditonsMock';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '../types/navigation.type';
import {Routes} from '../router/routes';
import {Button} from '../components/Button';
import FastImage from 'react-native-fast-image';
import Captcha from '../components/Captcha';

export const AdvanceInformationScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.advanceInformation>
> = ({navigation}) => {
  const [captcha, setCaptcha] = useState<string>('');
  const [validateResult, setValidateResult] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const captchaRef = useRef<any>(null);

  const handleRefresh = useCallback((newCaptcha: string) => {
    console.log('New CAPTCHA:', newCaptcha);
  }, []);

  const handleContinuePress = () => {
    setModalVisible(true);
  };

  const handleVerifyPress = () => {
    setLoading(true);
    const check = captchaRef.current?.validateCaptcha(captcha);

    setTimeout(() => {
      setLoading(false);

      if (check) {
        setModalVisible(false);
        navigation.navigate(Routes.userList);
      } else {
        setValidateResult('Please enter the matching letters and numbers');
      }
    }, 2000);
  };

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
      <Text style={styles.text}>INSTRUCTIONS</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{left: 20, marginTop: 13, width: '82%'}}>
        <FlashList
          scrollEnabled={false}
          data={advanceInformation}
          renderItem={({item, index}) => {
            const isLast = index === advanceInformation.length - 1;
            return (
              <ConditionsCart
                id={item.id}
                titleColor={colors.black}
                title={item.title}
                description={item.description}
                additoinalText={item.additoinalText}
                additoinalTextTwo={item.additoinalTextTwo}
                linkText={item.linkText}
                isLast={isLast}
                style={{marginVertical: 0}}
              />
            );
          }}
          keyExtractor={(item, index) =>
            item.id ? item.id.toString() : index.toString()
          }
        />
      </ScrollView>
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
          onPress={handleContinuePress}
        />
      </View>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          {loading ? (
            <FastImage
              style={styles.loadingImage}
              source={require('../assets/images/main.gif')}
              resizeMode={FastImage.resizeMode.contain}
            />
          ) : (
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                Enter the matching letters and numbers
              </Text>
              <Captcha
                ref={captchaRef}
                backgroundImage={require('../assets/images/refreshBg.png')}
                onRefresh={handleRefresh}
              />
              <View style={styles.rowContainer}>
                <TextInput
                  style={styles.input}
                  value={captcha}
                  onChangeText={setCaptcha}
                  cursorColor={'#333'}
                  placeholder="Enter match"
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  style={styles.verifyButton}
                  onPress={handleVerifyPress}>
                  <Text style={styles.buttonText}>Verify</Text>
                </TouchableOpacity>
              </View>
              <Text style={{color: 'red'}}>{validateResult}</Text>
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.bg.blue,
    paddingVertical: 15,
    paddingLeft: 20,
    backgroundColor: '#F2F2F2',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
    height: 250,
  },
  loadingImage: {
    width: 260,
    height: 260,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.bg.blue,
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  verifyButton: {
    backgroundColor: colors.bg.blue,
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
  },
  modalText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 13,
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

export default AdvanceInformationScreen;
