import { JSX } from "react/jsx-runtime";
import { Task } from "./Task";
import { createStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

export default {
  title: "Task",
  component: Task,
};
const Template = (
  arg: JSX.IntrinsicAttributes & { id: number; title: string; done: boolean },
) => (
  <Provider store={store}>
    <Task {...arg} />
  </Provider>
);
export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  id: 1,
  title: "text",
  done: false,
};
