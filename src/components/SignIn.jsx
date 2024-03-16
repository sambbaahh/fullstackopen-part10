import { Pressable, View, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";

import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import useSignIn from "../hooks/useSignIn";

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

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <FormikTextInput
        formik={formik}
        inputName={"username"}
        placeholder="Username"
      />
      <FormikTextInput
        formik={formik}
        inputName={"password"}
        placeholder="Password"
        secureTextEntry
      />
      <Pressable onPress={formik.handleSubmit} style={styles.buttonContainer}>
        <Text color={"textSecondary"} style={{ textAlign: "center" }}>
          Sign In
        </Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
