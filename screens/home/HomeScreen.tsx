import * as React from "react";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import ENDPOINTS from "../../constants/Endpoints";
import { RootTabScreenProps } from "../../types";
import Post from "./post/Post";
import axios from "axios";

export type User = {
  name: string;
  avatar: string;
};
export type Post = {
  id: number;
  user: User;
  image: string;
  location: string;
  likeCount: number;
  description: string;
  commentCount: number;
  time: string;
};

export default function HomeScreen(props: RootTabScreenProps<"Home">) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [user, setUser] = useState<User | undefined>();
  useEffect(() => {
    axios
      .get<Post[]>(ENDPOINTS.URL + "/posts")
      .then((res) => setPosts(res.data));
    axios
      .get<User>(ENDPOINTS.URL + "/currentUser")

      .then((res) => setUser(res.data));
  }, []);
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => (
        <Post currentUser={user} post={item} screenProps={props} />
      )}
      keyExtractor={(post) => `${post.id}`}
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
