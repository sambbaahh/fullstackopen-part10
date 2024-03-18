import { FormikProvider, useFormik } from "formik";
import React from "react";
import { Pressable, View } from "react-native";
import * as yup from "yup";

import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import formStyles from "./styles/formStyles";
import { useNavigate } from "react-router-native";
import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: null,
  text: "",
};
const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .required("Rating is required")
    .min(0, "0 is the minimum value")
    .max(100, "100 is the maximum value"),
  text: yup.string().optional(),
});

const ReviewForm = () => {
  const navigate = useNavigate();
  const [mutate] = useMutation(CREATE_REVIEW);

  const onSubmit = async () => {
    const result = await mutate({
      variables: {
        review: { ...formik.values, rating: Number(formik.values.rating) },
      },
    });
    navigate(`/repository/${result.data.createReview.repositoryId}`);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <FormikProvider value={formik}>
      <View style={formStyles.container}>
        <FormikTextInput name="ownerName" placeholder="Repository owner name" />
        <FormikTextInput name="repositoryName" placeholder="Repository name" />
        <FormikTextInput
          name="rating"
          placeholder="Rating between 0 and 100"
          keyboardType="numeric"
        />
        <FormikTextInput name="text" placeholder="Review" />
        <Pressable
          onPress={formik.handleSubmit}
          style={formStyles.buttonContainer}
        >
          <Text color={"textSecondary"} style={{ textAlign: "center" }}>
            Create a review
          </Text>
        </Pressable>
      </View>
    </FormikProvider>
  );
};

export default ReviewForm;
