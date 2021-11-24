import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "react-native-multi-selectbox-typescript/src/constants/Colors";
import { Card, Paragraph, Title } from "react-native-paper";
import { techColors } from "../utils/techs";
import { User } from "../utils/users";
import { Text } from "./Themed";

export default function DevCard(user: User) {
  let techColors = getColors();

  return (
    <Card style={styles.card}>
      <Card.Cover
        source={{
          uri:
            user.image != ""
              ? user.image
              : "https://cdn.discordapp.com/attachments/713958463180505170/913085642525782046/unknown.png",
        }}
      />
      <Card.Content style={styles.content}>
        <Title style={[{ fontSize: 17 }, styles.text]}>{user.name}</Title>

        <View style={styles.techView}>
          <Paragraph style={styles.text}>Techs: </Paragraph>
          {user.techs.map((tech) => {
            let type = typeof tech;
            if (type == "object") {
              tech = tech.id;
            }
            return (
              <Text
                style={[
                  styles.badge,
                  {
                    backgroundColor:
                      techColors[tech.toLowerCase()] !== undefined
                        ? techColors[tech.toLowerCase()]
                        : "#D3D3D3",
                  },
                ]}
              >
                {tech.toLowerCase() + " "}
              </Text>
            );
          })}
        </View>
        <Paragraph style={styles.text}>
          Email: <Text style={styles.subText}>{user.email}</Text>
        </Paragraph>
        <Paragraph style={styles.text}>
          Telefone: <Text style={styles.subText}>{user.phone}</Text>
        </Paragraph>
      </Card.Content>
    </Card>
  );
}

function getColors() {
  let colors = techColors;
  return colors;
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
