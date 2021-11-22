import * as React from "react";
import { StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";


export default function LoginScreen({
  navigation,
}: RootStackScreenProps<"Root">) {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isHidden, setIsHidden] = React.useState(true);
  const [icon, setIcon] = React.useState("eye");

  function changePasswordVisible() {
    setIsHidden(!isHidden);
    setIcon(icon === "eye" ? "eye-off" : "eye");
  }

  function lineSeparator() {
    return (
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dev Finder</Text>

      {lineSeparator()}

      <TextInput
        style={styles.input}
        autoComplete="false"
        label="Usuário"
        value={user}
        onChangeText={(text) => setUser(text)}
        mode="outlined"
      />
      <TextInput
        style={styles.input}
        autoComplete={false}
        label="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
        mode="outlined"
        secureTextEntry={isHidden}
        right={
          <TextInput.Icon name={icon} onPress={() => changePasswordVisible()} />
        }
        autoCorrect={false}
      />

      {lineSeparator()}

      <Button style={styles.button} contentStyle={{height: styles.button.height}} mode="contained" onPress={() => navigation.navigate('Home')}>Entrar</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    bottom: 60,
    alignSelf: "center",
    fontSize: 50,
    fontFamily: "squada-one",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    width: "80%",
    marginBottom: 40,
  },
  button: {
    top: 60,
    width: "80%",
    height: 50,
    justifyContent: "center",
  },
});
