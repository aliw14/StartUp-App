import React from 'react';
import {SvgProps} from 'react-native-svg';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export interface IAboutYou {
  id?: number;
  image?: React.FC<SvgProps> | ImageSourcePropType;
  choice?: string;
  onPress?: () => void;
}

export const AboutYou: React.FC<IAboutYou> = ({image, choice, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.main}>
        {typeof image === 'function' ? (
          <View style={styles.imageContainer}>
            {React.createElement(image)}
          </View>
        ) : (
          image && <Image source={image} style={styles.image} />
        )}
        <Text style={styles.choice}>{choice}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginLeft: 20,
  },
  imageContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderWidth: 1,
  },
  image: {
    width: 58,
    height: 53,
    resizeMode: 'contain',
    marginRight: 10,
  },
  choice: {
    fontSize: 14,
    color: '#00497C',
    flex: 1,
    textAlign: 'left',
    fontFamily: 'Lato-Bold',
  },
});
