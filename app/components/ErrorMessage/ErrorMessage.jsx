import AppText from "../../components/AppText";
import errorMessageStyles from "../../components/ErrorMessage/ErrorMessage.styles";

const ErrorMessage = ({ message, isVisible }) => {
  if (!isVisible || !message) return null;

  return <AppText style={errorMessageStyles}>{message}</AppText>;
};

export default ErrorMessage;
