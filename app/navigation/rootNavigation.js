import { createRef } from "react";

export const navigationRef = createRef();

const navigate = (name, params) => navigationRef.current?.nav(name, params);

const navigation = {
  navigate,
};

export default navigation;
