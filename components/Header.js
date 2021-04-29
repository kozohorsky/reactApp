import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Title } from "react-native-paper";

export default function Header() {
  return (
    <View style={styles.title}>
      <Title style={styles.titleText}>Nakupni seznam</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    padding: 15,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "lightgrey",
  },
  titleText: {
    paddingTop: 40,
  },
});
