import {Modal, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Header} from '../components/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '../types/navigation.type';
import {Routes} from '../router/routes';
import {FlashList} from '@shopify/flash-list';
import {ConditionsCart, IConditionsCart} from '../components/ConditionsCart';
import {Conditions, advanceInformation} from '../mock/ConditonsMock';
import {Button} from '../components/Button';
import {colors} from '../theme/colors';

export const ConditionsScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.conditions>
> = ({navigation}) => {
  const renderItem = ({
    item,
    index,
  }: {
    item: IConditionsCart;
    index: number;
  }) => {
    const isLast = index === advanceInformation.length - 1;
    return (
      <ConditionsCart
        descriptionStyle={{width: 327}}
        id={item.id}
        titleColor={colors.bg.blue}
        title={item.title}
        description={item.description}
        linkText={item.linkText}
        isLast={isLast}
        additoinalText={item.additoinalText}
        additoinalTextTwo={item.additoinalTextTwo}
      />
    );
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Header
        leftActionType="icon"
        onLeftPress={navigation.goBack}
        left={vectors.arrow_left}
        title="Terms & Conditions"
        titleColor={colors.white}
      />
      <ScrollView>
        <View style={{marginBottom: 20, padding: 10,marginTop:-20}}>
          <FlashList
            scrollEnabled={false}
            data={Conditions}
            renderItem={renderItem}
            keyExtractor={(item, index) =>
              item.id ? item.id.toString() : index.toString()
            }
          />
        </View>
      </ScrollView>

      <View style={styles.buttons}>
        <Button
          width={58}
          height={19}
          textColor={colors.bg.openBlue}
          style={styles.button}
          text="DECLINE"
          onPress={() => navigation.goBack()}
        />
        <Button
          width={58}
          height={21}
          style={styles.button}
          text="ACCEPT"
          textColor={colors.bg.openBlue}
          onPress={toggleModal}
        />
      </View>
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              “CBP One” Wants to Use “login.gov” to Sign In
            </Text>
            <Text style={styles.modalMessage}>
              This allows the app and website to share information about you.
            </Text>
            <View style={styles.modalButtons}>
              <Button
                text="Cancel"
                textColor={colors.bg.openBlue}
                backgroundColor={colors.white}
                style={[styles.modalButton, styles.cancelButton]}
                onPress={toggleModal}
              />
              <Button
                text="Continue"
                textColor={colors.white}
                backgroundColor={colors.bg.openBlue}
                style={[styles.modalButton, styles.continueButton]}
                onPress={() => {
                  toggleModal();
                  setTimeout(() => navigation.navigate(Routes.register), 300);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  titleView: {
    alignItems: 'center',
    marginTop: 22,
  },
  title: {
    color: colors.bg.blue,
    fontSize: 20,
    fontWeight: '600',
  },
  description: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 14,
    width: 319,
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.black,
    marginBottom: 12,
    textAlign: 'center',
  },
  modalMessage: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 24,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 'auto',
    maxWidth: '100%',
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: colors.bg.openBlue,
  },
  continueButton: {
    backgroundColor: colors.bg.openBlue,
  },
});

const vectors = {
  arrow_left: {
    icon: require('../assets/vectors/arrow_left.svg'),
    width: 24,
    height: 24,
  },
};
