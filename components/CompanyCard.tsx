import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import { Company } from "../utils/companies";
import { jobsColors } from "../utils/jobs";
import { Text } from "./Themed";

export default function CompanyCard(company: Company) {
  let techColors = getColors();

  return (
    <Card style={styles.card}>
      <Card.Cover
        source={{
          uri:
            company.image != ""
              ? company.image
              : "https://cdn.discordapp.com/attachments/713958463180505170/913089257273438208/unknown.png",
        }}
      />
      <Card.Content style={styles.content}>
        <Title style={[{ fontSize: 17 }, styles.text]}>{company.name}</Title>

        <View style={styles.techView}>
          <Paragraph style={styles.text}>Jobs: </Paragraph>
          {company.jobs.map((job) => {
            if(typeof job == 'object') {
              job = job.id
            }
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
  let techColors = jobsColors
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
