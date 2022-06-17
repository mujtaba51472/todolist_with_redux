import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addtodo,
  removeTodo,
  removeAll,
  editTodo,
} from "../redux/actions/todoActions";
import { AiFillDelete, AiOutlineCheck } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

import { v4 as uuid } from "uuid";

const TodoCom = () => {
  const [inpuText, setinputText] = useState("");
  const [todoText, setTodoText] = useState("");

  const [editting, setEditting] = useState(null),
    [text, setText] = useState("");

  const todo = useSelector((state) => state);

  useEffect(() => {
    setTodoText(todo);
    console.log(todo);
  }, [todo]);

  const dispatch = useDispatch();

  return (
    <div className="text-danger main">
      <div className="row mt-5">
        <div className=" offset-4  d-flex col-4">
          <input
            type="text"
            className="form-control"
            placeholder="enter text here"
            value={inpuText}
            onChange={(e) => setinputText(e.target.value)}
          />
          <button
            className="btn-info text-white"
            onClick={() => {
              dispatch(
                addtodo({
                  todo: inpuText,
                  id: uuid(),
                })
              );
              setinputText("");
            }}
          >
            Add
          </button>
        </div>
      </div>

      <div className="row">
        <div className=" offset-4 col-4 bg-info ">
          {todoText?.length ? (
            todoText.map((item) => {
              return (
                <p className="text-white">
                  {editting === item.id ? (
                    <span>
                      <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                      />
                      <span>
                        <AiOutlineCheck
                          onClick={() => {
                            setEditting(null);
                            dispatch(editTodo(item.id, text));
                            setText("");
                          }}
                        />
                      </span>
                    </span>
                  ) : (
                    <span>{item.todo}</span>
                  )}
                  <span>
                    <AiFillDelete
                      onClick={() => dispatch(removeTodo(item.id))}
                    />
                  </span>
                  {!editting && (
                    <span>
                      <FiEdit
                        onClick={() => {
                          setEditting(item.id);
                          setText(item.todo);
                        }}
                      />
                    </span>
                  )}
                </p>
              );
            })
          ) : (
            <p>No List here</p>
          )}
        </div>
        <div className="row">
          <div className="offset-4 col-4">
            <button
              className="btn-info mt-4"
              onClick={() => dispatch(removeAll())}
            >
              Clear List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCom;
