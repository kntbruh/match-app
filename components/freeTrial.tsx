import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { FC } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { GradientText } from './GradientText';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../screens/paywall';

type FreeTrialProps = {
  navigation: HomeScreenNavigationProp;
};

export const FreeTrial: FC<FreeTrialProps> = ({ navigation }) => {
  return (
    <View style={styles.mainBox}>
      <View>
        <GradientText text={'Elevate Your Game'} />
      </View>
      <Pressable
        onPress={() => navigation.navigate('Regular')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Unlock Free Trial</Text>
      </Pressable>
      <View>
        <Text style={styles.risk}>risk-free trial then $8.67/week</Text>
      </View>
      <LinearGradient colors={['#00A676', '#46B1C9']} style={styles.rizzGod}>
        <Text style={styles.rizzText}>RIZZ GOD</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  freeTrial: { paddingTop: 50, position: 'relative' },
  rizzGod: {
    position: 'absolute',
    backgroundColor: '#00A676',
    top: -15, // Настройте это значение, чтобы разместить кнопку на верхней границе
    left: 166,
    transform: [{ translateX: -55.5 }], // Половина ширины кнопки для центрирования
    borderRadius: 50,
    width: 111,
    padding: 4,
    zIndex: 1,
  },
  rizzText: { fontSize: 15, color: 'white', textAlign: 'center' },
  mainBox: {
    padding: 27,
    width: 342,
    height: 200,
    backgroundColor: 'gray',
    alignItems: 'center',
    gap: 10,
    borderRadius: 40,
    borderColor: '#00A676',
    borderWidth: 3,
    shadowColor: '#FFFF',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 6,
  },
  elevate: { fontSize: 30 },
  button: {
    backgroundColor: '#00A676',
    paddingHorizontal: 54,
    paddingVertical: 14,
    borderRadius: 40,
  },
  buttonText: { color: 'white', fontSize: 20 },
  risk: { color: 'white', fontSize: 15 },
});
