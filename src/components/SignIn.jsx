import { Pressable, View, StyleSheet } from "react-native";
import Text from "./Text";
import { useFormik } from "formik";
import * as yup from "yup";
import FormikTextInput from "./FormikTextInput";

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

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
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
