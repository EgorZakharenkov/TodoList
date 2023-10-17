import React, { useState } from "react";
import { Delete, Toggle, Update } from "../../redux/slices/TodoSlice";
import { useDispatch } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import "./style.css";
type Props = {
  id: number;
  title: string;
  done: boolean;
};

export const Task = ({ id, title, done }: Props) => {
  const [update, setUpdate] = useState<boolean>(false);
  const [updateValue, setUpdateValue] = useState<string>("");
  const dispatch = useDispatch();
  const Del = () => {
    dispatch(Delete(id));
  };
  const toggleCompleted = () => {
    dispatch(Toggle(id));
  };
  const UpdateTask = () => {
    const newItem = {
      id: id,
      title: updateValue,
      done: done,
    };
    dispatch(Update(newItem));
    setUpdateValue("");
    setUpdate(!update);
  };
  return (
    <div className="list-item">
      <FaDeleteLeft className={"icon"} onClick={() => Del()} />

      <label htmlFor="title">
        <input
          className={update ? "focus" : ""}
          type="text"
          readOnly={false}
          value={update ? updateValue : title}
          onChange={(e) => setUpdateValue(e.target.value)}
          name="title"
        />
      </label>
      {update ? (
        <button onClick={() => UpdateTask()}>Ok</button>
      ) : (
        <FaEdit className={"icon"} onClick={() => setUpdate(true)} />
      )}
      <label htmlFor="checked">
        <input
          onChange={() => toggleCompleted()}
          checked={done}
          type="checkbox"
        />
      </label>
    </div>
  );
};
