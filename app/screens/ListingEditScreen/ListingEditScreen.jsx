import Screen from "../../components/Screen";
import { Formik } from "formik";
import * as Yup from "yup";
import AppFormField from "../../components/AppFormField";
import AppFormPicker from "../../components/AppFormPicker/AppFormPicker";
import Button from "../../components/Button";
import colors from "../../config/colors";
import listingEditScreenStyles from "./ListingEditScreen.styles";
import { View } from "react-native";
import CategoryPickerItem from "../../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.number().required().label("Category"),
  description: Yup.string().label("Description"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    icon: "floor-lamp",
    backgroundColor: colors.danger,
  },
  {
    label: "Clothing",
    value: 2,
    icon: "shoe-heel",
    backgroundColor: colors.primary,
  },
  { label: "Camera", value: 3, icon: "camera", backgroundColor: colors.yellow },
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
            numberOfColumns={3}
            PickerItemComponent={({ item, onPress }) => (
              <CategoryPickerItem item={item} onPress={onPress} />
            )}
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
