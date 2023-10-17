import React from "react";
import { Task } from "../Task/Task";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { TodoType } from "../../redux/slices/TodoSlice";

const TodoList = () => {
  const items = useSelector<RootState, TodoType[]>(
    (state) => state.TodoSlice.items,
  );
  return (
    <div className={"list"}>
      {items.length ? (
        items.map((item) => (
          <Task id={item.id} title={item.title} done={item.done} />
        ))
      ) : (
        <h3>No todos...</h3>
      )}
    </div>
  );
};

export { TodoList };
