import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { ColorSchemeName, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text } from "../../../components/Themed";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";
import ProfileImage from "./postHeader/ProfileImage";

const PostAddComment = () => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <ProfileImage size={25} />
      <TextInput
        style={stylesFn(colorScheme).input}
        placeholder="Yorum ekle..."
      />
      <View style={styles.emojis}>
        <TouchableOpacity>
          <Text style={{ marginRight: 8 }}>❤️</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ marginRight: 8 }}>🙌</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome
            name="plus-square-o"
            size={25}
            color={Colors[colorScheme].text}
            style={{ opacity: 0.3 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostAddComment;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 8,
    marginBottom: 8,
  },
  input: {
    marginStart: 8,
    flex: 1,
    color: "#fff",
  },
  emojis: {
    flexDirection: "row",
  },
});

const stylesFn = (colorScheme: NonNullable<ColorSchemeName>) =>
  StyleSheet.create({
    input: {
      marginStart: 8,
      flex: 1,
      color: Colors[colorScheme].text,
    },
  });
