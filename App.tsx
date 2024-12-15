import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Router from './src/router/Router';
import {LogBox} from 'react-native';
import i18next from './services/i18next';
import {I18nextProvider} from 'react-i18next';

function App(): React.JSX.Element {
  LogBox.ignoreAllLogs();

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    i18next
      .init()
      .then(() => {
        setIsInitialized(true);
      })
      .catch(err => {
        console.error('i18next initialization error:', err);
      });
  }, []);

  if (!isInitialized) {
    return <Text>Loading...</Text>;
  }

  return (
    <I18nextProvider i18n={i18next}>
      <SafeAreaView style={styles.safeArea}>
        <Router />
      </SafeAreaView>
    </I18nextProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
