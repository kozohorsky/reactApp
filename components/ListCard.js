import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export default function ListCard({ item, pressHandler, pickImage }) {
  return (
    <View>
      <Card>
        <Card.Content>
          <Title>{item.text}</Title>
          <Paragraph>{item.info}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: item.image }} />
        <Card.Actions>
          <Button onPress={() => pressHandler(item.id)}>Koupeno</Button>
          <Button icon="camera" onPress={() => pickImage(item.id)}>
            Obrazek
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
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
