import Screen from "app/components/Screen";
import registerScreenStyles from "app/screens/RegisterScreen/RegisterScreen.styles";
import { Image, View } from "react-native";
import Button from "app/components/Button";
import colors from "app/config/colors";
import { Formik } from "formik";
import * as Yup from "yup";
import AppFormField from "app/components/AppFormField";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .label("Confirm Password"),
});

const RegisterScreen = () => {
  return (
    <Screen style={registerScreenStyles.container}>
      <Image
        source={require("../../assets/logo-red.png")}
        style={registerScreenStyles.logo}
      />
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <View style={registerScreenStyles.form}>
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
  );
};

export default RegisterScreen;
