"use client";

import { Provider } from "react-redux";
import store from "@/app/store/store";

export const ReduxProvider = (props: React.PropsWithChildren) => {
  return <Provider store={store}>{props.children}</Provider>;
};
