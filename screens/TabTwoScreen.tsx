import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Title } from "react-native-paper";
import CompanyCard from "../components/CompanyCard";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { getCompanies } from "../utils/companies";

export default function TabTwoScreen({
  navigation,
}: RootTabScreenProps<"TabTwo">) {
  let companies = getCompanies();
  return (
    <View>
      <ScrollView>
        <Title style={styles.subTitle}>Precisando de Devs 👨‍💻</Title>
        {companies.map((company) => {
          return (
            <CompanyCard
              email={company.email}
              image={company.image}
              name={company.name}
              location={company.location}
              jobs={company.jobs}
            ></CompanyCard>
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
