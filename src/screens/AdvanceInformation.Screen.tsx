import React, {useState, useEffect, useCallback, useRef} from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AppState,
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';
import {useTranslation} from 'react-i18next';

export const AdvanceInformationScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.advanceInformation>
> = ({navigation}) => {
  const [captcha, setCaptcha] = useState<string>('');
  const [validateResult, setValidateResult] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isCaptchaPassed, setIsCaptchaPassed] = useState<boolean>(false);
  const [initialModalShown, setInitialModalShown] = useState<boolean>(false);

  const {t} = useTranslation();

  useEffect(() => {
    if (!i18next.isInitialized) {
      console.warn('i18next is not initialized yet!');
    }
  }, []);

  const captchaRef = useRef<any>(null);

  useEffect(() => {
    const checkFirstTimeModal = async () => {
      try {
        const modalShown = await AsyncStorage.getItem('modalShown');
        if (!modalShown) {
          setModalVisible(true);
          setInitialModalShown(true);
        }
      } catch (error) {
        console.error('Error checking modal status:', error);
      }
    };

    const appStateListener = AppState.addEventListener(
      'change',
      nextAppState => {
        if (nextAppState === 'active') {
          checkFirstTimeModal();
        }
      },
    );

    return () => {
      appStateListener.remove();
    };
  }, []);

  const handleRefresh = useCallback((newCaptcha: string) => {
    console.log('New CAPTCHA:', newCaptcha);
  }, []);

  const handleContinuePress = async () => {
    if (isCaptchaPassed || initialModalShown) {
      navigation.navigate(Routes.userList);
    } else {
      setModalVisible(true);
      setCaptcha('');
      setValidateResult('');
    }
  };

  const handleVerifyPress = async () => {
    setLoading(true);
    const check = captchaRef.current?.validateCaptcha(captcha);

    setTimeout(async () => {
      setLoading(false);

      if (check) {
        setModalVisible(false);
        setIsCaptchaPassed(true);

        try {
          await AsyncStorage.setItem('modalShown', 'true');
        } catch (error) {
          console.error('Error saving captcha status:', error);
        }

        navigation.navigate(Routes.userList);
      } else {
        setValidateResult(t('errorMessage'));
      }
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Header
        leftActionType="icon"
        onLeftPress={navigation.goBack}
        left={vectors.arrow_left}
        title={t('headerText')}
        titleColor={colors.white}
        rightActionType="icon"
        right={vectors.human}
      />
      <Text style={styles.text}>{t('title')}</Text>
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
                title={t(item.title)}
                description={t(item.description)}
                additoinalText={t(item.additoinalText || '')}
                additoinalTextTwo={t(item.additoinalTextTwo || '')}
                linkText={t(item.linkText || '')}
                isLast={isLast}
                style={{marginVertical: 0}}
                titleFontSize={15}
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
          text={t('backBtn')}
          onPress={() => navigation.goBack()}
        />
        <Button
          width={58}
          height={21}
          style={styles.button}
          text={t('continueBtn')}
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
              <Text style={styles.modalText}>{t('modalTitle')}</Text>
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
                  placeholder={t('modalPlaceholder')}
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  style={styles.verifyButton}
                  onPress={handleVerifyPress}>
                  <Text style={styles.buttonText}>{t('VerifyBtn')}</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 12,
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
    marginTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  verifyButton: {
    backgroundColor: colors.bg.openBlue,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
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
  modalText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});
