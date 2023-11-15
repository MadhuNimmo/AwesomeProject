/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{ useState } from 'react';
import type {PropsWithChildren} from 'react';
const getRandomCharacter = require('randomCharacter');
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

// Define a few sample functions (f1 through f5)
function f1() {
  return "Function 1 is called.";
}

function f2() {
  return "Function 2 is called.";
}

function f3() {
  return "Function 3 is called.";
}

function f4() {
  return "Function 4 is called.";
}

function f5() {
  return "Function 5 is called.";
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
  const getDummyValue = () => {
    const x = 42; // Replace 42 with your desired value
    return x;
  }
  const result = getDummyValue();

  const [count, setCount] = useState(0);

  // A function to increment the count
  const incrementCount = () => {
    setCount(count + 1);
    
  };
  const randomChar = getRandomCharacter();

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Dummy value is {result}
          </Section>
          <Section title="See Your Changes">
            {f1()}
          </Section>
          <Section title="Debug">
            {f2()}
          </Section>
          <Section title="Learn More">
            {f3()}
          </Section>
          <Section title="Custom Function 4">
            {f4()}
          </Section>
          <Section title="Custom Function 5">
            {f5()}
          </Section>
          <Text>Count: {count}</Text>
          <Button title="Increment" onPress={incrementCount} />
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
