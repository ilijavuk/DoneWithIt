import client from "./client";

const listingsEndpoint = "/listings";

const getListings = () => client.get(listingsEndpoint);
const createListing = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.categoryId);
  data.append("description", listing.description);

  listing.images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    }),
  );

  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  console.log("posting data");
  return client.post(listingsEndpoint, data, {
    onUploadProgress: (progress) => {
      console.log("progress in axiosconfig", progress);
      return onUploadProgress(progress.loaded / progress.total);
    },
  });
};

const listingsApi = {
  getListings,
  createListing,
};

export default listingsApi;
