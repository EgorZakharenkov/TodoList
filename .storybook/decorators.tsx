import { Provider as StoreProvider } from "react-redux";
import { store } from "../src/redux/store";
import { DecoratorFn } from "@storybook/react";

export const withStore: DecoratorFn = (StoryFn) => {
  return (
    <StoreProvider store={store}>
      <StoryFn />
    </StoreProvider>
  );
};

export const globalDecorators = [withStore];
