import { Pressable, View, StyleSheet } from "react-native";
import { FormikProvider, useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";

import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import useAuth from "../hooks/useAuth";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 10,
    padding: 15,
    backgroundColor: "white",
  },
  buttonContainer: {
    backgroundColor: "#0165d4",
    padding: 10,
    borderRadius: 5,
  },
});

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export const SignInContainer = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <FormikProvider value={formik}>
      <View style={styles.container}>
        <FormikTextInput name="username" placeholder="Username" />
        <FormikTextInput
          name="password"
          placeholder="Password"
          secureTextEntry
        />
        <Pressable onPress={formik.handleSubmit} style={styles.buttonContainer}>
          <Text color={"textSecondary"} style={{ textAlign: "center" }}>
            Sign In
          </Text>
        </Pressable>
      </View>
    </FormikProvider>
  );
};

const SignIn = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signIn({ username, password });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
