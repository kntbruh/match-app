import { Text, View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { AntDesign } from '@expo/vector-icons';
import { CopyRizzWindow, icons } from '../components/CopyRizzWindow';
import { useNavigation } from '@react-navigation/native';
import ButtonArrow from '../components/ButtonArrow';

export default function DefaultText() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name='left' size={35} color='white' />
        </Pressable>
        <View style={styles.textContainer}>
          <Text style={styles.text}></Text>
        </View>
        <AntDesign name='plus' size={35} color='black' />
      </View>
      <View style={styles.main}>
        <Text style={styles.textBig}>How to quit social media</Text>
        <Text style={styles.textMid}>and why is it so hard for your brain</Text>
        <Text style={styles.text}>
          Imagine you’re at the peak of a mountain, the world spread out beneath
          you, a panorama of possibilities. But every time you try to take a
          step forward, you’re held back by invisible chains. These chains are
          the subtle, yet powerful, ties of social media. Quitting social media
          can feel like trying to climb a mountain with these chains pulling you
          back. But why is it so difficult for our brains to let go? Let’s dive
          into the science and some practical steps to break free.
        </Text>
        <Text style={styles.textMain}>The Allure of Social Media</Text>
        <Text style={styles.text}>
          Social media platforms are designed to be addictive. They provide
          instant gratification, similar to the rush you get from gambling or
          eating sugary foods. When you receive a notification, a like, or a
          comment, your brain releases dopamine, the “feel-good”
          neurotransmitter. This dopamine release reinforces the behavior,
          making you crave more.
        </Text>
        <Text style={styles.text}>
          In essence, social media hijacks the brain’s reward system. The
          anticipation of social interactions and the validation from peers
          create a cycle that’s hard to break. Over time, this cycle can lead to
          compulsive behavior, where you feel the need to check your phone
          constantly.
        </Text>
        <Text style={styles.textMain}>The Fear of Missing Out (FOMO)</Text>
        <Text style={styles.text}>
          Another psychological aspect that makes quitting social media
          difficult is the Fear of Missing Out (FOMO). Social media platforms
          showcase the highlights of everyone’s lives, often filtered and
          curated to show only the best moments. This creates an illusion that
          everyone else is living a more exciting, fulfilling life.
        </Text>
        <Text style={styles.text}>
          FOMO taps into our natural desire for social belonging and status. The
          thought of missing out on important updates, events, or conversations
          can trigger anxiety and keep you tethered to social media.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 26,
  },
  textContainer: { alignItems: 'center' },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 23,
    paddingVertical: 30,
  },

  topBar: {
    flexDirection: 'row',
    paddingTop: 53,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  main: { paddingTop: 50 },
  textMain: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    lineHeight: 33.41,
  },
  textBig: { fontSize: 34, color: 'white', fontWeight: '700' },
  textMid: { fontSize: 25, color: 'white', fontWeight: '400' },
});
