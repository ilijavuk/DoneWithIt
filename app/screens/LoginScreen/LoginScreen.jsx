import Screen from "app/components/Screen";
import loginScreenStyles from "app/screens/LoginScreen/LoginScreen.styles";
import { Image, View } from "react-native";
import Button from "app/components/Button";
import colors from "app/config/colors";
import { Formik } from "formik";
import * as Yup from "yup";
import AppFormField from "app/components/AppFormField";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={loginScreenStyles.container}>
      <Image
        source={require("../../assets/logo-red.png")}
        style={loginScreenStyles.logo}
      />
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit }) => (
          <View style={loginScreenStyles.form}>
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
              color={colors.primary}
              text="Login"
              onPress={handleSubmit}
              style={loginScreenStyles.button}
            />
          </View>
        )}
      </Formik>
    </Screen>
  );
};

export default LoginScreen;
