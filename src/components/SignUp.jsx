import { Pressable, View } from "react-native";
import { FormikProvider, useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";

import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import useAuth from "../hooks/useAuth";
import formStyles from "./styles/formStyles";

const initialValues = {
  username: "",
  password: "",
  passwordConfirm: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required").min(5).max(30),
  password: yup.string().required("Password is required").min(5).max(30),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
});

export const SignUpContainer = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <FormikProvider value={formik}>
      <View style={formStyles.container}>
        <FormikTextInput name="username" placeholder="Username" />
        <FormikTextInput
          name="password"
          placeholder="Password"
          secureTextEntry
        />
        <FormikTextInput
          name="passwordConfirm"
          placeholder="Password confirmation"
          secureTextEntry
        />
        <Pressable
          onPress={formik.handleSubmit}
          style={formStyles.buttonContainer}
        >
          <Text color={"textSecondary"} style={{ textAlign: "center" }}>
            Sign Up
          </Text>
        </Pressable>
      </View>
    </FormikProvider>
  );
};

const SignUp = () => {
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signUp({ username, password });
      await signIn({ username, password });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
