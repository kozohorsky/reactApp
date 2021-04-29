import React, { useState, useEffect } from "react";
import { Alert, ScrollView, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Header from "./components/Header";
import ListCard from "./components/ListCard";
import AddItem from "./components/AddItem";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  const [image, setImage] = useState(null);
  const [list, setList] = useState([
    {
      text: "Kava",
      info: "Jihlavanka 1kg",
      image:
        "https://thumbs.dreamstime.com/z/coffee-cup-coffee-beans-time-36795894.jpg",
      id: 1,
    },
    {
      text: "Mouka",
      info: "Polohruba",
      image:
        "https://thumbs.dreamstime.com/z/wheat-flour-heap-isolated-white-background-35930573.jpg",
      id: 2,
    },
    {
      text: "Ovoce",
      info: "Banany, Pomerance",
      image:
        "https://thumbs.dreamstime.com/z/fruit-wood-bowl-food-fresh-white-background-reflection-31017507.jpg",
      id: 3,
    },
    {
      text: "Zelenina",
      info: "Papriky, Okurky, Mrkev, Celer",
      image: "https://thumbs.dreamstime.com/z/vegetables-1430407.jpg",
      id: 4,
    },
  ]);

  const pressHandler = (id) => {
    setList((prevList) => {
      return prevList.filter((listItem) => listItem.id != id);
    });
  };

  const addHandler = (text, info) => {
    if (text.length > 2) {
      setList((prevList) => {
        return [
          {
            text: text,
            info: info,
            image: "../assets/favicon.png",
            id: Math.random(),
          },
          ...prevList,
        ];
      });
    } else {
      Alert.alert("OOPS!", "Jmeno polozky musi byt vyplnene!", [
        { text: "Rozumim", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      console.log(result.uri);
    }
  };

  return (
    <PaperProvider>
      <ScrollView>
        <Header></Header>
        <View>
          <AddItem addHandler={addHandler} />
          {list.map((item) => {
            return (
              <View key={item.id}>
                <ListCard
                  item={item}
                  pressHandler={pressHandler}
                  pickImage={pickImage}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </PaperProvider>
  );
}
