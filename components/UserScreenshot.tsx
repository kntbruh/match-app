import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';

const UserScreenshot = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>User's screenshot</Text>
      <Entypo style={styles.icon} name='cross' size={24} color='white' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    aspectRatio: 1,
    borderRadius: 20,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4, // Отступы между элементами
  },
  text: { color: 'white' },
  icon: { marginLeft: 50, marginTop: 20 },
});

export default UserScreenshot;
