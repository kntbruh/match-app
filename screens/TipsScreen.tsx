import { Text, View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { AntDesign } from '@expo/vector-icons';
import { CopyRizzWindow, icons } from '../components/CopyRizzWindow';
import { useNavigation } from '@react-navigation/native';
import ButtonArrow from '../components/ButtonArrow';
import { RegularScreenNavigationProp } from './regular';
import { FC } from 'react';

type TipsProps = {
  navigation: RegularScreenNavigationProp;
};

const textArray = [
  'What Attracts People?',
  'First Impressions Matter',
  'First Date Success',
  'Tips for a successful first date',
  'Engaging Conversations',
  'Avoid These Mistakes',
  'Date Dress Tips',
];

export const TipsScreen: FC<TipsProps> = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name='left' size={35} color='white' />
        </Pressable>
        <View style={styles.textContainer}>
          <Text style={styles.text}>TIPS</Text>
        </View>
        <AntDesign name='plus' size={35} color='black' />
      </View>
      <Pressable
        onPress={() => navigation.navigate('DefaultText')}
        style={styles.main}
      >
        {textArray.map((title, index) => (
          <ButtonArrow key={index} text={title} />
        ))}
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
  },
  textContainer: { alignItems: 'center' },
  text: {
    color: 'white',
    fontSize: 44,
    fontWeight: '700',
    lineHeight: 45.8,
  },

  topBar: {
    flexDirection: 'row',
    paddingTop: 73,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  main: { paddingTop: 50 },
  textMain: {
    fontSize: 28,
    lineHeight: 33.41,
    textAlign: 'center',
  },
});
