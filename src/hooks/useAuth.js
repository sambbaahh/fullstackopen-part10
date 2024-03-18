import { useMutation, useApolloClient } from "@apollo/client";
import { AUTHENTICATE, CREATE_USER } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const [signInMutate] = useMutation(AUTHENTICATE);
  const [signUpMutate] = useMutation(CREATE_USER);

  const signIn = async ({ username, password }) => {
    const result = await signInMutate({
      variables: { credentials: { username, password } },
    });
    await authStorage.setAccessToken(result.data.authenticate.accessToken);
    apolloClient.resetStore();
    return result;
  };

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  const signUp = async ({ username, password }) => {
    const result = await signUpMutate({
      variables: { user: { username, password } },
    });
    return result;
  };

  return { signIn, signOut, signUp };
};

export default useSignIn;
