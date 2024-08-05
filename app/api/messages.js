import apiClient from "./client";

const messagesEndpoint = "/messages";

const createMessage = (message, listingId) =>
  apiClient.post(messagesEndpoint, {
    message,
    listingId,
  });

const messagesApi = {
  createMessage,
};

export default messagesApi;
