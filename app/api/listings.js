import client from "./client";

const listingsEndpoint = "/listings";

const getListings = () => client.get(listingsEndpoint);

const listingsApi = {
  getListings,
};

export default listingsApi;
