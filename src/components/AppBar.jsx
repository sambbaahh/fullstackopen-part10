import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";
import { useQuery } from "@apollo/client";

import Text from "./Text";
import { ME } from "../graphql/queries";
import useAuth from "../hooks/useAuth";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
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
  <Link to={props.route} onPress={props.onPress}>
    <Text color="textSecondary" style={{ fontSize: 20 }}>
      {props.title}
    </Text>
  </Link>
);

const AppBar = () => {
  const { loading, data } = useQuery(ME);
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (e) {
      console.log(e);
    }
  };

  if (loading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollView}
        scrollEnabled
      >
        <AppBarTab title={"Repositories"} route={"/"} />
        {data?.me ? (
          <>
            <AppBarTab title={"Create a review"} route={"/review"} />
            <AppBarTab
              title={"Sign out"}
              route={"/sign-in"}
              onPress={handleSignOut}
            />
          </>
        ) : (
          <>
            <AppBarTab title={"Sign in"} route={"/sign-in"} />
            <AppBarTab title={"Sign up"} route={"/sign-up"} />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
