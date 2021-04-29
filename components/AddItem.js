import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Button, TextInput } from "react-native-paper";

export default function AddItem({ addHandler }) {
  const [text, setText] = React.useState("");
  const [info, setInfo] = React.useState("");
  return (
    <View>
      <TextInput
        label="Nazev polozky"
        placeholder="..."
        mode="flat"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <TextInput
        label="Info"
        placeholder="..."
        mode="flat"
        value={info}
        onChangeText={(info) => setInfo(info)}
      />
      <Button
        compatct="true"
        mode="contained"
        onPress={() => addHandler(text, info)}
      >
        Pridat
      </Button>
    </View>
  );
}
