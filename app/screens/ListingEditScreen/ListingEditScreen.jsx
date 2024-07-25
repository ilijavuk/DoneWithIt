import Screen from "../../components/Screen";
import { Formik } from "formik";
import * as Yup from "yup";
import AppFormField from "../../components/AppFormField";
import AppFormPicker from "../../components/AppFormPicker/AppFormPicker";
import Button from "../../components/Button";
import colors from "../../config/colors";
import listingEditScreenStyles from "./ListingEditScreen.styles";
import { View } from "react-native";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1),
  price: Yup.number().required().min(1).max(10000),
  category: Yup.number().required(),
  description: Yup.string(),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

const ListingEditScreen = () => {
  return (
    <Screen>
      <Formik
        initialValues={{
          title: "",
          price: "",
          category: "",
          description: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <View style={listingEditScreenStyles.form}>
          <AppFormField maxLength={255} name="title" placeholder="Title" />
          <AppFormField
            keyboardType="numeric"
            maxLength={8}
            name="price"
            placeholder="Price"
          />
          <AppFormPicker
            items={categories}
            name="category"
            placeholder="Category"
          />
          <AppFormField
            maxLength={255}
            name="description"
            placeholder="Description"
            multiline
          />
          <Button
            type="submit"
            color={colors.primary}
            text="Post"
            style={listingEditScreenStyles.button}
          />
        </View>
      </Formik>
    </Screen>
  );
};

export default ListingEditScreen;
