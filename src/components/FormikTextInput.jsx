import { TextInput, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  textInputInvalid: {
    borderColor: "#d73a4a",
  },
  errorText: {
    paddingVertical: 0,
    marginTop: -5,
    marginBottom: 5,
    color: "#d73a4a",
  },
});

const FormikTextInput = ({ formik, inputName, ...props }) => {
  return (
    <>
      <TextInput
        style={[
          styles.textInput,
          formik.errors.username && styles.textInputInvalid,
        ]}
        value={formik.values[inputName]}
        onChangeText={formik.handleChange(inputName)}
        {...props}
      />
      {formik.touched[inputName] && formik.errors[inputName] && (
        <Text style={styles.errorText}>{formik.errors[inputName]}</Text>
      )}
    </>
  );
};

export default FormikTextInput;
