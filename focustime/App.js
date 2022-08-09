
import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { colors } from './focustime/src/utils/colors'
import { Focus } from './focustime/src/features/Focus'
import { Timer } from './focustime/src/features/Timer'
import { FocusHistory } from './focustime/src/features/FocusHistory'

export default function App() {
  
  const [currentSubject, setCurrentSubject] = useState()
  const [history, setHistory] = useState([])

  return (
    <SafeAreaView style = {styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history = {history} />
        </>
      ) : (
            <Timer
              focusSubject = {currentSubject}
              onTimerEnd = {(subject) => {
                setHistory([...history, subject])
              }}
              clearSubject = {() => setCurrentSubject(null)}
            />
          )
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
