import { View, StyleSheet, Text, Pressable, ScrollView } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  scrollView: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 15,
    gap: 15,
    flexGrow: 1,
  },
});

const AppBarTab = (props) => (
  <Pressable>
    <Link to={props.route}>
      <Text style={styles.text}>{props.title}</Text>
    </Link>
  </Pressable>
);

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollView}
        scrollEnabled
      >
        <AppBarTab title={"Repositories"} route={"/"} />
        <AppBarTab title={"Sign in"} route={"/sign-in"} />
      </ScrollView>
    </View>
  );
};

export default AppBar;
