import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {Header} from '../components/Header';
import {Button} from '../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '../types/navigation.type';
import {Routes} from '../router/routes';
import {colors} from '../theme/colors';
import {SvgImage} from '../components/SvgImage';
import {Input} from '../components/Input';
import FastImage from 'react-native-fast-image';

export const RegisterScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.register>
> = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleSignIn = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate(Routes.aboutYou);
    }, 2000);
  };

  return (
    <ScrollView style={{flex: 1}}>
      <Header
        leftActionType="icon"
        left={vectors.flag}
        titleColor={colors.white}
        title="      An official website of the United States government"
      />
      <View style={{alignItems: 'center', gap: 20, paddingHorizontal: 14}}>
        <Image
          style={styles.image}
          source={require('../assets/images/loginAndDepartment.png')}
        />
        <Image
          style={styles.imageTwo}
          source={require('../assets/images/people.png')}
        />
        <Text style={styles.title}>
          <Text style={{fontWeight: '700'}}>CBP One </Text>
          is using Login.gov to allow you to sign in to your account safely and
          securely.
        </Text>
      </View>
      <View style={{paddingHorizontal: 14, flex: 1}}>
        <View style={styles.buttons}>
          <Button
            width={58}
            height={29}
            style={[
              styles.button,
              {
                paddingVertical: 20,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 70,
              },
            ]}
            backgroundColor="#0266B3"
            textColor="#fff"
            text="Sign in"
          />
          <Button
            width={58}
            height={19}
            textColor="#0266B3"
            style={[styles.button, {width: '70%'}]}
            text="Create an account"
          />
        </View>
        <View style={{flexDirection: 'column', flex: 1}}>
          <Text style={styles.formTitle}>Sign in for existing users</Text>
          <View>
            <Input caption="Email address" />
            <Input caption="Password" secureTextEntry={!showPassword} />
          </View>
          <View style={styles.showPasswordContainer}>
            <Pressable onPress={togglePasswordVisibility}>
              <View style={styles.checkbox}>
                {showPassword && <View style={styles.checkmark} />}
              </View>
            </Pressable>
            <Text style={styles.password}>Show password</Text>
          </View>
          <Button
            onPress={handleSignIn}
            text="Sign in"
            textColor={colors.white}
            backgroundColor={colors.bg.openBlue}
            style={styles.signButton}
          />
          <Pressable onPress={() => navigation.goBack()}>
            <View style={styles.bottom}>
              <View style={{flexDirection: 'row'}}>
                <SvgImage
                  source={require('../assets/vectors/arrow_leftt.svg')}
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
                <Text style={styles.linkText}>Back to CBP One</Text>
              </View>
            </View>
          </Pressable>

          <Text style={styles.linkText}>Forgot your password?</Text>
          <Text style={styles.linkText}>
            Security Practices and Privacy Act Statement
          </Text>
          <Text style={styles.linkText}>Privacy Act Statement</Text>

          <Text style={{marginTop: 40, marginBottom: 20}}>
            This site protected by reCAPTCHA and the Google{' '}
            <Text
              style={{
                color: colors.bg.openBlue,
                borderBottomWidth: 1,
                borderBottomColor: colors.bg.openBlue,
              }}>
              Privacy Policy
            </Text>{' '}
            and{' '}
            <Text
              style={{
                color: colors.bg.openBlue,
                borderBottomWidth: 1,
                borderBottomColor: colors.bg.openBlue,
              }}>
              Terms of Service
            </Text>
            {''} apply.
          </Text>
          <View style={styles.footer}>
            <View style={styles.footerTopp}>
              <SvgImage
                width={15}
                height={15}
                source={require('../assets/vectors/globe.svg')}></SvgImage>
              <Text style={styles.footerText}>Language</Text>
              <SvgImage
                width={15}
                height={15}
                color={colors.bg.blue}
                source={require('../assets/vectors/arrow_up.svg')}></SvgImage>
            </View>

            <View style={styles.footerTop}>
              <Text style={styles.footerTextt}>Help</Text>
              <Text style={styles.footerTextt}>Contact</Text>
              <Text style={styles.footerTextt}>Privacy & Security</Text>
            </View>

            <View style={styles.footerTop}>
              <Text style={styles.footerText}>Accessibility Statement</Text>
            </View>

            <View style={styles.footerTop}>
              <SvgImage
                source={require('../assets/vectors/footer_gsa.svg')}></SvgImage>
              <Text style={styles.footerText}>
                Us General Services Administration
              </Text>
            </View>
          </View>
        </View>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 270.5,
    height: 45.3,
    marginTop: 10,
  },
  imageTwo: {
    width: 267,
    height: 86.8,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    width: 296,
    height: 75,
    textAlign: 'center',
  },
  button: {
    borderColor: '#0266B3',
    borderRadius: 8,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#0266B3',
    borderRadius: 8,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  signButton: {
    width: '100%',
    height: 44,
    borderRadius: 8,
    alignContent: 'flex-end',
    marginBottom: 10,
  },
  password: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0266B3',
  },
  bottom: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  // input: {
  //   height: 50,
  //   borderColor: colors.border.bottom,
  //   borderRadius: 8,
  //   marginBottom: 15,
  // },
  showPasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: colors.bg.blue,
    borderRadius: 3,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    width: 12,
    height: 12,
    backgroundColor: colors.bg.blue,
    borderRadius: 2,
  },
  linkText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.bg.openBlue,
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
  footer: {},
  footerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
    left: -14,
    justifyContent: 'center',
    backgroundColor: '#CCE5FF',
    height: 31,
    // borderWidth: 1,
  },
  footerText: {
    color: colors.bg.blue,
    fontSize: 14,
    fontWeight: '500',
    paddingHorizontal: 10,
  },
  footerTextt: {
    color: colors.bg.blue,
    fontSize: 12,
    fontWeight: '500',
    marginRight: 15,
  },
  footerTopp: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
    left: -14,
    justifyContent: 'center',
    backgroundColor: '#CCE5FF',
    height: 31,
    borderBottomWidth: 1,
  },
});

const vectors = {
  flag: {
    icon: require('../assets/vectors/flag.svg'),
    width: 24,
    height: 24,
  },
};
