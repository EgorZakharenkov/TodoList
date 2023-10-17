import React, { useState } from "react";
import { Button } from "../../stories/Button";
import { Add, AllComplected, TodoType } from "../../redux/slices/TodoSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./style.css";

const CreateTask = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useDispatch();
  const items = useSelector<RootState, TodoType[]>(
    (state) => state.TodoSlice.items,
  );
  const addTask = () => {
    const item = {
      id: items.length < 1 ? 1 : items.length + 1,
      title: value,
      done: false,
    };
    dispatch(Add(item));
    setValue("");
  };
  return (
    <div className="create-form">
      <input
        className={"create-input"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <Button
        label="Add"
        onClick={() => {
          addTask();
        }}
        primary
      />
      <Button
        label="All completed"
        onClick={() => {
          dispatch(AllComplected());
        }}
        primary
      />
    </div>
  );
};

export { CreateTask };
