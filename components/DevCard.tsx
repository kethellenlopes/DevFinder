import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import { User } from "../utils/users";
import { Text } from "./Themed";

export default function DevCard(user: User) {
  let techColors = getColors();

  return (
    <Card style={styles.card}>
      <Card.Cover 
        source={{
          uri: user.image,
        }}
      />
      <Card.Content style={styles.content}>
        <Title style={[{ fontSize: 17 }, styles.text]}>
          {user.name}
        </Title>

        <View style={styles.techView}>
          <Paragraph style={styles.text}>Techs: </Paragraph>
          {user.techs.map((tech) => {
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
        <Paragraph style={styles.text}>Email: <Text style={styles.subText}>{user.email}</Text></Paragraph>
        <Paragraph style={styles.text}>Telefone: <Text style={styles.subText}>{user.phone}</Text></Paragraph>
      </Card.Content>
    </Card>
  );
}

function getColors() {
  let techColors: { [id: string]: string } = {
    python: "#F7F48B",
    react: "#70A1D7",
    java: "#F47C7C",
    ruby: "#F47C7C",
    "c#": "#B4A5D1",
    "c++": "#B4A5D1",
    c: "#B4A5D1",
    vue: "#80BFA0",
    javascript: "#F7F48B",
    html: "#F47C7C",
    css: "#70A1D7",
    go: "#70A1D7",
    angular: "#F47C7C",
    php: "#70A1D7",
    kotlin: "#B4A5D1",
    perl: "#B4A5D1",
    ".net": "#B4A5D1",
    typescript: "#70A1D7",
    swift: "#F47C7C",
    node: "#80BFA0",
    quality: "#80BFA0",
    testing: "#F7F48B",
    "ux/ui design": "#80BFA0",
    database: "#F47C7C",
    scrum: "#80BFA0",
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
    fontFamily: 'serif',
  },

  techView: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
