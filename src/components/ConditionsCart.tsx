import React, {useState} from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {SvgImage} from './SvgImage';
import {colors} from '../theme/colors';

export interface IConditionsCart {
  id?: number;
  title?: string;
  description?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  icon?: SvgProps;
  titleColor?: string;
  isLast?: boolean;
  linkText?: string;
  additoinalText?: string;
  additoinalTextTwo?: string;
  descriptionStyle?: StyleProp<ViewStyle>;
  rightIcon?: any;
}

export const ConditionsCart: React.FC<IConditionsCart> = ({
  id,
  title,
  description,
  onPress,
  style,
  icon,
  titleColor,
  isLast = false,
  linkText,
  additoinalText,
  additoinalTextTwo,
  descriptionStyle,
  rightIcon,
}) => {
  const [contentHeight, setContentHeight] = useState(0);

  return (
    <View style={[styles.main, style]}>
      <View style={styles.row}>
        <View style={styles.leftSection}>
          {(id || icon) && (
            <View style={[styles.idContainer, icon && !id && {borderWidth: 0}]}>
              {id ? (
                <Text style={styles.id}>{id}</Text>
              ) : (
                icon && <SvgImage style={styles.icon} source={icon} />
              )}
            </View>
          )}
          {(id || icon) && !isLast && (
            <View style={[styles.line, {height: contentHeight - 24}]} />
          )}
        </View>
        <View style={{flex: 1}}>
          <Pressable
            onLayout={e => setContentHeight(e.nativeEvent.layout.height)}
            onPress={onPress}
            style={styles.cart}>
            <View style={styles.contentContainer}>
              <View style={styles.textContainer}>
                <Text style={[styles.title, titleColor && {color: titleColor}]}>
                  {title}
                </Text>
                <Text style={[styles.description, descriptionStyle]}>
                  {description}
                </Text>
                {additoinalText && (
                  <Text style={styles.additionalText}>{additoinalText}</Text>
                )}
                {additoinalTextTwo && (
                  <Text style={styles.additionalText}>{additoinalTextTwo}</Text>
                )}
                {linkText && <Text style={styles.linkText}>{linkText}</Text>}
              </View>
              {rightIcon && (
                <SvgImage source={rightIcon} style={styles.rightIcon} />
              )}
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginVertical: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  leftSection: {
    alignItems: 'center',
    marginRight: 12,
  },
  idContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  id: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    backgroundColor: colors.black,
    borderRadius: 12,
    width: 20,
    height: 20,
    justifyContent: 'center',
  },
  line: {
    width: 2,
    backgroundColor: colors.border.line,
    flexShrink: 1,
  },
  cart: {
    paddingBottom: 10,
    width: '100%',
    borderRadius: 8,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    paddingRight: 16,
  },
  title: {
    fontSize: 18,
    color: colors.bg.blue,
    fontFamily: 'Araboto Normal',
    width: '90%',
  },
  description: {
    fontSize: 14,
    color: colors.black,
    marginTop: 4,
    fontFamily: 'Lato-Regular',
  },
  icon: {
    width: 24,
    height: 24,
  },
  linkText: {
    color: colors.bg.openBlue,
    fontSize: 14,
    marginTop: 4,
    fontFamily: 'Lato-Regular',
  },
  additionalText: {
    color: colors.black,
    fontSize: 14,
    marginTop: 24,
    fontFamily: 'Lato-Regular',
  },
  rightIcon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
});
