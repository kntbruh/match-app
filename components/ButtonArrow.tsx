import { View, Text, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

type buttonProps = {
  text: string;
};

const ButtonArrow: FC<buttonProps> = ({ text }) => {
  return (
    <View style={styles.pinkBox}>
      <View style={styles.struggle}>
        <Text style={styles.title}>{text}</Text>
        <AntDesign name='right' size={28} color='black' />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  pinkBox: {
    backgroundColor: '#FD96C3',
    marginTop: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 7,
    paddingVertical: 18,
  },
  struggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: { fontSize: 28, fontWeight: 'bold' },
});

export default ButtonArrow;
