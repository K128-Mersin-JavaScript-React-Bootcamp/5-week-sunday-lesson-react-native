import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ColorSchemeName,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text } from "../../../components/Themed";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";
import { User } from "../HomeScreen";
import ProfileImage from "./postHeader/ProfileImage";

type Props = {
  currentUser: User;
};
const PostAddComment = (props: Props) => {
  const colorScheme = useColorScheme();
  const [comment, setComment] = useState("");

  const handleEmojiPress = (emoji: string) => {
    console.log(comment);
    setComment(`${comment} ${emoji}`);
  };
  return (
    <View style={styles.container}>
      <ProfileImage size={25} uri={props.currentUser.avatar} />
      <TextInput
        style={stylesFn(colorScheme).input}
        placeholder="Yorum ekle..."
        defaultValue={comment}
        value={comment}
        onChangeText={setComment}
      />
      <View style={styles.emojis}>
        <TouchableOpacity onPress={() => handleEmojiPress("❤️")}>
          <Text style={{ marginRight: 8 }}>❤️</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleEmojiPress("🙌")}>
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
