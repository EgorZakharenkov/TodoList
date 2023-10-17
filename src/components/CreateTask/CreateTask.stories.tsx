import { JSX } from "react/jsx-runtime";
import { CreateTask } from "./CreateTask";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

export default {
  title: "CreateTask",
  component: CreateTask,
};
const Template = (arg: JSX.IntrinsicAttributes) => (
  <Provider store={store}>
    <CreateTask {...arg} />
  </Provider>
);
export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
