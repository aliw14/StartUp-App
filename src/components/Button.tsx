import React from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

interface IButton {
  text: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  textColor?: string;
  width?: number;
  height?: number;
}

export const Button: React.FC<IButton> = ({
  text,
  onPress,
  style,
  backgroundColor,
  textColor,
}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.button, style, {backgroundColor}]}>
        <Text style={[styles.text, {color: textColor}]}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 56,
    borderRadius: 35,
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    width: 'auto',
    height: 'auto',
    fontFamily: 'Lato-Bold',
  },
});
