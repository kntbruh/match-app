import { View, Text } from 'react-native';
import React from 'react';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

interface IText {
  text: string;
  style?: any;
}

export const GradientText = ({ text, style }: IText) => {
  return (
    <MaskedView maskElement={<Text>{text}</Text>}>
      <LinearGradient
        colors={['#FFFFFF', '#46B1C9']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={[style, { opacity: 0 }]}>{text}</Text>
      </LinearGradient>
    </MaskedView>
  );
};
