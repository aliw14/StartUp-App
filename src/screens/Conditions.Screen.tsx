import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
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
        <View style={{marginBottom: 20, padding: 10, marginTop: -20}}>
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
          onPress={() => navigation.navigate(Routes.register)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
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
});

const vectors = {
  arrow_left: {
    icon: require('../assets/vectors/arrow_left.svg'),
    width: 24,
    height: 24,
  },
};
