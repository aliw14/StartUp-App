import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header} from '../components/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '../types/navigation.type';
import {Routes} from '../router/routes';
import {colors} from '../theme/colors';
import {SvgImage} from '../components/SvgImage';
import {Button} from '../components/Button';
import {FlashList} from '@shopify/flash-list';
import {ConditionsCart, IConditionsCart} from '../components/ConditionsCart';
import {Steps} from '../mock/ConditonsMock';

export const UserDetailsScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.userDetails>
> = ({navigation}) => {
  return (
    <ScrollView>
      <Header
        leftActionType="icon"
        onLeftPress={navigation.goBack}
        left={vectors.arrow_left}
        title="Advance Information"
        titleColor={colors.white}
        rightActionType="icon"
        right={vectors.human}
      />
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            width: 329,
            height: 341,
            alignItems: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              marginTop: 21,
              width: 280,
              height: 141,
            }}>
            <SvgImage
              source={require('../assets/vectors/check.svg')}></SvgImage>
            <Text
              style={{
                color: colors.green.open,
                fontSize: 16,
                marginTop: 10,
                fontFamily: 'Lato-Bold',
              }}>
              APPOINTMENT SCHEDULED
            </Text>
            <Text style={styles.description}>
              Your appointment is scheduled: Garita El Chaparra / Pedwest San
              Ysidro on 15 Nov 2024 at 20:00.
            </Text>
          </View>
          <View style={[styles.bottomText, {width: 329, height: 102}]}>
            <Text style={styles.text}>
              Your appointment ay a Port of Entry was successfully scheduled.
            </Text>
            <Text style={styles.text}>
              Please save your confirmation number(s). A confirmation email was
              sent to the email address you used to log in to CBP One.
            </Text>
          </View>
        </View>

        <Button
          style={styles.button}
          backgroundColor="#FBFBFB"
          text="CANCEL APPOINTMENT"
          textColor={colors.red.line}></Button>
        <View style={styles.travelers}>
          <View style={styles.header}>
            <Text style={styles.headerText}>TRAVELERS</Text>
            <Text style={styles.headerText}>CONFIRMATION NUMBER</Text>
          </View>
          <View style={styles.travelersDesc}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>HASAN HASANOV</Text>
              <Text>20465023</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>ELXAN ASADOV</Text>
              <Text>20465024</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>BUGRA ERDOGAN</Text>
              <Text>20465025</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>DAVUD HUSEYNOV</Text>
              <Text>20465026</Text>
            </View>
          </View>
        </View>
        <View style={styles.appointmentDetails}>
          <Text style={[styles.appointmetHeader]}>APPOINTMENT DETAILS</Text>
          <View style={styles.appointmentDesc}>
            <View>
              <Text style={styles.title}>Port of Entry</Text>
              <Text style={styles.desc}>
                Garita El Chaparra / Pedwest San Ysidro
              </Text>
            </View>
            <View>
              <Text style={styles.title}>Date</Text>
              <Text style={styles.desc}>15 Nov 2024</Text>
            </View>
            <View>
              <Text style={styles.title}>Time</Text>
              <Text style={styles.desc}>20:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.appointmentDetails}>
          <Text style={styles.steps}>NEXT STEPS</Text>
          <View style={styles.appointmentDesc}>
            <FlashList
              scrollEnabled={false}
              data={Steps}
              renderItem={({
                item,
                index,
              }: {
                item: IConditionsCart;
                index: number;
              }) => {
                const isLast = index === Steps.length - 1;
                return (
                  <ConditionsCart
                    id={item.id}
                    icon={item.icon}
                    titleColor={colors.black}
                    title={item.title}
                    description={item.description}
                    additoinalText={item.additoinalText}
                    additoinalTextTwo={item.additoinalTextTwo}
                    linkText={item.linkText}
                    isLast={isLast}
                    style={{marginVertical: 0}}
                    titleFontSize={14}
                    titleFontWeight="600"
                  />
                );
              }}
              keyExtractor={(item, index) =>
                item.id ? item.id.toString() : index.toString()
              }
            />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            backgroundColor: '#F2F2F2',
          }}>
          <Button
            backgroundColor="#F2F2F2"
            style={styles.ednButton}
            text="BACK"
            textColor={colors.bg.openBlue}
            onPress={() => navigation.goBack()}></Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  description: {
    width: 280,
    fontSize: 14,
    color: colors.gray.open,
    textAlign: 'center',
    marginTop: 11,
    fontFamily: 'FontsFree-Net-Montserrat-SemiBold',
    fontWeight: 700,
  },
  text: {
    fontSize: 14,
    color: colors.gray.open,
    fontFamily: 'Lato-Regular',
  },
  bottomText: {
    gap: 20,
    marginTop: 30,
    width: 329,
    height: 102,
  },
  button: {
    borderRadius: 8,
    width: 328,
    alignSelf: 'center',
    fontFamily: 'Lato-Bold',
    backgroundColor: colors.border.line,
  },
  travelers: {
    width: '100%',
    height: 161,
    gap: 11,
    alignSelf: 'center',
    marginTop: 20,
  },
  header: {
    width: '100%',
    height: 40,
    backgroundColor: '#F2F2F2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 12,
    color: colors.bg.blue,
    paddingHorizontal: 17,
    fontFamily: 'Lato-Bold',
  },
  travelersDesc: {
    width: '90%',
    gap: 14,
    alignSelf: 'center',
  },
  appointmentDetails: {
    width: '100%',
    gap: 11,
    alignSelf: 'center',
    marginTop: 28,
  },
  appointmetHeader: {
    width: '100%',
    height: 40,
    backgroundColor: '#F2F2F2',
    fontSize: 12,
    color: colors.bg.blue,
    textAlignVertical: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    fontFamily: 'Lato-Bold',
  },
  appointmentDesc: {
    width: Dimensions.get('screen').width - 40,
    padding: 10,
    gap: 20,
    marginLeft: 10,
  },
  steps: {
    width: '100%',
    height: 40,
    backgroundColor: '#F2F2F2',
    fontSize: 12,
    color: colors.bg.blue,
    textAlignVertical: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    fontFamily: 'Lato-Bold',
  },
  title: {
    fontSize: 12.5,
    color: '#878787',
    marginBottom: 5,
  },
  desc: {
    fontFamily: 'Lato-Regular',
  },
  ednButton: {
    backgroundColor: '#F2F2F2',
    height: 80,
    textAlign: 'center',
    justifyContent: 'center',
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
