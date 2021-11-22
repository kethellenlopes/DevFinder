import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import { Company } from "../utils/companies";
import { Text } from "./Themed";

export default function CompanyCard(company: Company) {
  let techColors = getColors();

  return (
    <Card style={styles.card}>
      <Card.Cover
        source={{
          uri: company.image,
        }}
      />
      <Card.Content style={styles.content}>
        <Title style={[{ fontSize: 17 }, styles.text]}>{company.name}</Title>

        <View style={styles.techView}>
          <Paragraph style={styles.text}>Jobs: </Paragraph>
          {company.jobs.map((job) => {
            return (
              <Text
                style={[
                  styles.badge,
                  {
                    backgroundColor:
                      techColors[job.toLowerCase()] !== undefined
                        ? techColors[job.toLowerCase()]
                        : "#D3D3D3",
                  },
                ]}
              >
                {job.toLowerCase() + " "}
              </Text>
            );
          })}
        </View>
        <Paragraph style={styles.text}>
          Email: <Text style={styles.subText}>{company.email}</Text>
        </Paragraph>
        <Paragraph style={styles.text}>
          Localização: <Text style={styles.subText}>{company.location}</Text>
        </Paragraph>
      </Card.Content>
    </Card>
  );
}

function getColors() {
  let techColors: { [id: string]: string } = {
    estágio: "#F7F48B",
    junior: "#70A1D7",
    pleno: "#F47C7C",
    senior: "#B4A5D1",
    quality: "#80BFA0",
    tester: "#F7F48B",
    devops: "#70A1D7",
    'database administrator': "#F47C7C",
    'scrum master': "#80BFA0",
    'tech lead': "#70A1D7",
    design: "#B4A5D1",
    analista: "#F47C7C"
  };
  return techColors;
}

const styles = StyleSheet.create({
  card: {
    width: "80%",
    alignSelf: "center",
    marginBottom: 30,
  },

  content: {
    paddingTop: 10,
  },

  badge: {
    opacity: 0.9,
    borderRadius: 20,
    marginEnd: 4,
    paddingLeft: 5,
    paddingRight: 2,
    paddingBottom: 2,
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
    fontWeight: "bold",
  },

  text: {
    fontFamily: "squada-one",
  },

  subText: {
    fontFamily: "serif",
  },

  techView: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
