import { TextInput, StyleSheet } from "react-native";
import { useField } from "formik";

import Text from "./Text";

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
  },
});

const FormikTextInput = ({ ...props }) => {
  const [field, meta, helpers] = useField(props.name);
  return (
    <>
      <TextInput
        style={[
          styles.textInput,
          meta.touched && meta.error && styles.textInputInvalid,
        ]}
        onChangeText={field.onChange(props.name)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        {...props}
      />
      {meta.touched && meta.error && (
        <Text color={"invalid"} style={styles.errorText}>
          {meta.error}
        </Text>
      )}
    </>
  );
};

export default FormikTextInput;
