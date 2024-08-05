import Screen from "app/components/Screen";
import loginScreenStyles from "app/screens/LoginScreen/LoginScreen.styles";
import { Image, View } from "react-native";
import Button from "app/components/Button";
import colors from "app/config/colors";
import { Formik } from "formik";
import * as Yup from "yup";
import AppFormField from "app/components/AppFormField";
import authApi from "../../api/auth";
import ErrorMessage from "../../components/ErrorMessage";
import { useState } from "react";
import useAuth from "../../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const [error, setError] = useState("");
  const authContext = useAuth();

  const handleSubmit = async (values) => {
    const result = await authApi.login(values.email, values.password);
    if (!result.ok) {
      setError(result.data?.error);
      return;
    }
    setError("");
    authContext.login(result.data);
  };

  return (
    <Screen style={loginScreenStyles.container}>
      <Image
        source={require("../../assets/logo-red.png")}
        style={loginScreenStyles.logo}
      />
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <View style={loginScreenStyles.form}>
          <ErrorMessage message={error} isVisible={error} />
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
          <Button
            type="submit"
            color={colors.primary}
            text="Login"
            style={loginScreenStyles.button}
          />
        </View>
      </Formik>
    </Screen>
  );
};

export default LoginScreen;
