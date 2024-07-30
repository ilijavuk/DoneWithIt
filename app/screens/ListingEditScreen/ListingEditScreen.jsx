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
import FormImagePicker from "../../components/FormImagePicker";
import useLocation from "../../hooks/useLocation";
import listingsApi from "../../api/listings";
import { useState } from "react";
import UploadScreen from "../UploadScreen";

const validationSchema = Yup.object().shape({
  images: Yup.array().min(1, "Please select at least one image."),
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  categoryId: Yup.number().required().label("Category"),
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
  const location = useLocation();
  const [loadingProgress, setLoadingProgress] = useState(null);

  return (
    <>
      <Screen>
        <Formik
          initialValues={{
            images: [],
            title: "",
            price: "",
            categoryId: "",
            description: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            const result = await listingsApi.createListing(
              { ...values, location },
              (progress) => setLoadingProgress(progress),
            );

            if (!result.ok) {
              setLoadingProgress(null);
              alert("Could not save the listing.");
              return;
            }

            setLoadingProgress(1);
            resetForm();
          }}
        >
          <View style={listingEditScreenStyles.form}>
            <FormImagePicker name="images" />
            <AppFormField maxLength={255} name="title" placeholder="Title" />
            <AppFormField
              keyboardType="numeric"
              maxLength={8}
              name="price"
              placeholder="Price"
            />
            <AppFormPicker
              items={categories}
              name="categoryId"
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
      <UploadScreen
        progress={loadingProgress}
        onDone={() => setLoadingProgress(null)}
      />
    </>
  );
};

export default ListingEditScreen;
