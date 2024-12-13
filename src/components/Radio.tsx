import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {colors} from '../theme/colors';

interface IRadio {
  options: {label: string; value: string; image?: ImageSourcePropType}[];
  checkedValue: string;
  onChange: (value: string) => void;
  style?: StyleProp<ViewStyle>;
  onPress?: (value: string) => void;
}

export const Radio: React.FC<IRadio> = ({
  style,
  options,
  checkedValue,
  onChange,
  onPress,
}) => {
  return (
    <View style={[styles.container, style]}>
      {options.map(option => {
        const isActive = option.value === checkedValue;
        return (
          <TouchableOpacity
            key={option.value}
            style={[styles.radio, isActive && styles.activeRadio]}
            onPress={() => {
              onChange(option.value);
              if (onPress) onPress(option.value);
            }}>
            <View style={styles.content}>
              {option.image && (
                <Image source={option.image} style={styles.image} />
              )}
              <Text
                style={[styles.text, !option.image && styles.textFullWidth]}>
                {option.label}
              </Text>
            </View>
            <View style={styles.circle}>
              {isActive && <View style={styles.innerCircle} />}
            </View>
            <View style={styles.bottomLine} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  radio: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    justifyContent: 'space-between',
    position: 'relative',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  activeRadio: {
    // backgroundColor: '#e0f7fa',
    borderColor: colors.bg.blue,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginRight: 30,
  },
  text: {
    flex: 1,
    fontSize: 14,
    marginLeft: 16,
    color: '#333333',
    fontFamily: 'Lato-Bold',
  },
  textFullWidth: {
    marginLeft: 50,
  },
  circle: {
    height: 18,
    width: 18,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#6b7280',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  innerCircle: {
    height: 9,
    width: 9,
    borderRadius: 6,
    backgroundColor: '#0266B3',
  },
  bottomLine: {
    position: 'absolute',
    bottom: 0,
    left: 70,
    right: 0,
    height: 1,
    backgroundColor: colors.border.bottom,
  },
});
