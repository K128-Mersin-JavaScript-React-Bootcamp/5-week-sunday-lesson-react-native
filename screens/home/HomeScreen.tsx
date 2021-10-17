import * as React from "react";
import { FlatList, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import Post from "./post/Post";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <FlatList
      data={["1"]}
      renderItem={({ item }) => <Post item={item} />}
      keyExtractor={(item) => item}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
