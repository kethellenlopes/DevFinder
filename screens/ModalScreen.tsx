import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';
import SelectBox from "react-native-multi-selectbox-typescript";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ModalScreen({route}) {
  const {myTechs, selectedTechs, onMultiChange} = route.params
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/ModalScreen.tsx" />
      <SelectBox
        label="Techs"
        options={myTechs}
        selectedValues={selectedTechs}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
        inputPlaceholder={"Selecionar tecnologias"}
        listEmptyText={"Nenhuma tech encontrada"}
      />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
