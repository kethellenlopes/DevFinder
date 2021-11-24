import { xorBy } from "lodash";
import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import SelectBox from "react-native-multi-selectbox-typescript";
import { Button, Card, Snackbar, TextInput } from "react-native-paper";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { addCompany } from "../utils/companies";
import jobList from "../utils/jobs";
import techsList from "../utils/techs";
import { addUser } from "../utils/users";

export default function TabThreeScreen({
  navigation,
}: RootTabScreenProps<"TabThree">) {
  const [selected, setSelected] = React.useState("");
  const [selectedTechs, setSelectedTechs]: any[] = React.useState([]);
  const [selectedJobs, setSelectedJobs]: any[] = React.useState([]);
  const myTechs = techsList;
  const myJobs = jobList;
  const [visible, setVisible] = React.useState(false);

  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [foto, setFoto] = React.useState("");
  const [localizacao, setLocalizacao] = React.useState("");

  function onMultiChange() {
    return (item) => setSelectedTechs(xorBy(selectedTechs, [item], "id"));
  }

  function onMultiChangeJob() {
      return (item) => setSelectedJobs(xorBy(selectedJobs, [item], "id"));
  }

  function clear() {
    setNome('')
    setEmail('')
    setSelectedJobs([])
    setSelectedTechs([])
    setTelefone('')
    setFoto('')
    setLocalizacao('')
  }

  return (
    <View>
      <ScrollView>
        <Text
          style={{
            alignSelf: "center",
            fontWeight: "bold",
            fontSize: 17,
            marginTop: 30,
          }}
        >
          Selecione uma categoria
        </Text>
        <View style={styles.select}>
          <Card
            style={[
              styles.content,
              { backgroundColor: selected == "dev" ? "#c7c7c7" : "#ffffff" },
            ]}
            onPress={() => setSelected("dev")}
          >
            <Card.Content>
              <Button icon="xml" labelStyle={{ fontSize: 45, marginRight: -5 }}>
                {" "}
              </Button>
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 25,
                  fontFamily: "squada-one",
                }}
              >
                DEV
              </Text>
            </Card.Content>
          </Card>
          <Card
            style={[
              styles.content,
              {
                backgroundColor: selected == "empresa" ? "#c7c7c7" : "#ffffff",
              },
            ]}
            onPress={() => setSelected("empresa")}
          >
            <Card.Content>
              <Button
                icon="office-building"
                labelStyle={{ fontSize: 45, marginRight: -5 }}
              >
                {" "}
              </Button>
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 25,
                  fontFamily: "squada-one",
                }}
              >
                Empresa
              </Text>
            </Card.Content>
          </Card>
        </View>
        {selected != "" && (
          <View style={{ alignItems: "center" }}>
            <TextInput
              label="Nome"
              autoComplete="false"
              mode="flat"
              style={styles.input}
              placeholder={"Escreva o nome..."}
              onChangeText={(text) => setNome(text)}
              value={nome}
            ></TextInput>
            <TextInput
              label="Email"
              autoComplete="false"
              mode="flat"
              style={styles.input}
              keyboardType={"email-address"}
              placeholder={"Escreva o email..."}
              onChangeText={(text) => setEmail(text)}
              value={email}
            ></TextInput>
            <TextInput
              label={selected == "dev" ? "Telefone" : "Localização"}
              autoComplete="false"
              mode="flat"
              style={styles.input}
              keyboardType={selected == "dev" ? "phone-pad" : "default"}
              placeholder={
                selected == "dev" ? "Digite o telefone" : "Digite a localização"
              }
              value={selected == "dev" ? telefone : localizacao}
              onChangeText={(text) => {
                selected == "dev" ? setTelefone(text) : setLocalizacao(text);
              }}
            ></TextInput>
            <TextInput
              label="Foto"
              autoComplete="false"
              mode="flat"
              style={styles.input}
              keyboardType="default"
              placeholder={"Escreva o link..."}
              autoCorrect={false}
              onChangeText={(text) => setFoto(foto)}
              value={foto}
            ></TextInput>
            <View style={{ width: "80%", marginTop: 30 }}></View>
          </View>
        )}
      </ScrollView>
      {selected != "" && (
        <>
          <View style={{ width: "80%", alignSelf: "center" }}>
            {selected == "dev" && (
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
            )}
            {selected == "empresa" && (
              <SelectBox
                label="Jobs"
                options={myJobs}
                selectedValues={selectedJobs}
                onMultiSelect={onMultiChangeJob()}
                onTapClose={onMultiChangeJob()}
                isMulti
                inputPlaceholder={"Selecionar jobs"}
                listEmptyText={"Nenhum job encontrado"}
              />
            )}
          </View>
          <Button
            disabled={nome == "" || email == ""}
            mode="contained"
            onPress={() => {
              if (selected == "dev") {
                addUser(nome, email, telefone, selectedTechs, foto);
              }
              if (selected == "empresa") {
                addCompany(nome, email, localizacao, selectedJobs, foto);
              }
              clear();
              setVisible(true)
            }}
            style={{
              marginTop: 80,
              marginBottom: 28,
              width: "70%",
              alignSelf: "center",
            }}
          >
            Salvar
          </Button>
          <Snackbar
            visible={visible}
            onDismiss={() => setVisible(false)}
            style={{backgroundColor: 'green'}}
          >
            Dados salvos!
          </Snackbar>
        </>
      )}
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

  select: {
    marginTop: 20,
    flexDirection: "row",
  },

  content: {
    marginLeft: 25,
    width: "40%",
    height: 140,
    marginBottom: 30,
  },

  input: {
    width: "80%",
    marginTop: 5,
    height: 50,
  },
});
