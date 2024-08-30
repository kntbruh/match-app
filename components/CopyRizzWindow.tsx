import { View, Text, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

type CopyProps = {
  icon: string;
};

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ';
export const icons = ['❤️', '👑', '🧠'];

export const CopyRizzWindow: FC<CopyProps> = ({ icon }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(0,0,0,0.3)', 'transparent']}
        style={styles.background}
      >
        <View style={styles.textIcon}>
          <Text style={{ fontSize: 23 }}>{icon}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    borderRadius: 20,
  },
  background: {
    borderRadius: 30,
  },
  textIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    gap: 10,
  },
  text: { color: 'white', fontSize: 23 },
});
