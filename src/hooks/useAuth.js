import { useMutation, useApolloClient } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const [mutate, result] = useMutation(AUTHENTICATE);

  const signIn = async ({ username, password }) => {
    const result = await mutate({
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

  return { signIn, signOut, result };
};

export default useSignIn;
