import Bugsnag from "@bugsnag/expo";

Bugsnag.start();

const log = (error) => Bugsnag.notify(error);

const start = () => Bugsnag.start();

const logger = {
  start,
  log,
};
export default logger;
