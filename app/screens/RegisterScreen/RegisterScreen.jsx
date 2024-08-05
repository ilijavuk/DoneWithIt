import Screen from "../../components/Screen";
import registerScreenStyles from "../../screens/RegisterScreen/RegisterScreen.styles";
import { Image, View } from "react-native";
import Button from "../../components/Button";
import colors from "../../config/colors";
import { Formik } from "formik";
import * as Yup from "yup";
import AppFormField from "../../components/AppFormField";
import authApi from "../../api/auth";
import { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import useApi from "../../hooks/useApi";
import ActivityIndicator from "../../components/ActivityIndicator";
import useAuth from "../../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .label("Confirm Password"),
});

const RegisterScreen = ({ navigation }) => {
  const [error, setError] = useState("");
  const registerApi = useApi(authApi.register);
  const loginApi = useApi(authApi.login);
  const authContext = useAuth();

  const handleSubmit = async (values) => {
    const { confirmPassword, ...payload } = values;
    console.log("1");
    const result = await registerApi.fetch(payload);
    console.log("a");
    if (!result.ok) {
      setError(result.data?.error);
      return;
    }
    console.log("b");
    setError("");
    const loginResponse = await loginApi.fetch(payload.email, payload.password);
    console.log(loginResponse.data);
    authContext.login(loginResponse.data);
  };

  return (
    <>
      <ActivityIndicator
        isVisible={registerApi.isLoading || loginApi.isLoading}
      />
      <Screen style={registerScreenStyles.container}>
        <Image
          source={require("../../assets/logo-red.png")}
          style={registerScreenStyles.logo}
        />
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <View style={registerScreenStyles.form}>
            <ErrorMessage message={error} isVisible={error} />
            <AppFormField
              name="name"
              placeholder="Name"
              autoCapitalize="none"
              autoCorrect={false}
              icon="account"
            />
            <AppFormField
              name="email"
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <AppFormField
              name="password"
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              secureTextEntry
              textContentType="password"
            />
            <AppFormField
              name="confirmPassword"
              placeholder="Confirm Password"
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              secureTextEntry
              textContentType="password"
            />
            <Button
              type="submit"
              color={colors.primary}
              text="Register"
              style={registerScreenStyles.button}
            />
          </View>
        </Formik>
      </Screen>
    </>
  );
};

export default RegisterScreen;
