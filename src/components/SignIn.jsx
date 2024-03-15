import { Pressable, Text, TextInput, View, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 10,
    padding: 15,
    backgroundColor: "white",
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  textInputInvalid: {
    borderColor: "#d73a4a",
  },
  buttonContainer: {
    backgroundColor: "#0165d4",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  errorText: {
    paddingVertical: 0,
    marginTop: -5,
    marginBottom: 5,
    color: "#d73a4a",
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
      <TextInput
        style={[
          styles.textInput,
          formik.errors.username && styles.textInputInvalid,
        ]}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={styles.errorText}>{formik.errors.username}</Text>
      )}
      <TextInput
        style={[
          styles.textInput,
          formik.errors.password && styles.textInputInvalid,
        ]}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        secureTextEntry
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={styles.errorText}>{formik.errors.password}</Text>
      )}
      <Pressable onPress={formik.handleSubmit} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
