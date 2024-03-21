import { TextInput } from "react-native";
import { useField } from "formik";

import Text from "./Text";
import styles from "../styles/formikTextInput";

const FormikTextInput = (props) => {
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
