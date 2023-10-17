import { JSX } from "react/jsx-runtime";
import { TodoList } from "./TodoList";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

export default {
  title: "TodoList",
  component: TodoList,
};
const Template = (arg: JSX.IntrinsicAttributes) => (
  <Provider store={store}>
    <TodoList {...arg} />
  </Provider>
);
export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
