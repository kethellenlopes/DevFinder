import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Title } from "react-native-paper";
import DevCard from "../components/DevCard";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { getUsers, User } from "../utils/users";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [users, setUsers]: any[] = React.useState([])

  const getData = async () => {
    let data = await AsyncStorage.getItem('users')
    if(data != null) {
      setUsers(JSON.parse(data))
    }
  }

  getData()

  return (
    <View>
      <ScrollView>
      <Title style={styles.subTitle}>Procurando Vagas ☕</Title>
        {users.map((user) => {
          return (
            <DevCard
              email={user.email}
              image={user.image}
              name={user.name}
              phone={user.phone}
              techs={user.techs}
            ></DevCard>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  subTitle: {
    fontSize: 19,
    fontFamily: "squada-one",
    left: 20,
    marginBottom: 20,
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
