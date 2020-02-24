import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../modules/todos";
import { Card, ListGroup } from "react-bootstrap";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Todolist() {
  const todoList = useSelector(state => state.todos);
  const dispatch = useDispatch();

  console.log(todoList);

  const onClickDeleteBtn = e => {
    e.preventDefault();
    const removeId = e.target.parentNode.parentNode.getAttribute("data-key");

    dispatch(removeTodo(Number(removeId)));
  };

  return (
    <Card>
      <ListGroup variant="flush">
        {todoList.map(elem => {
          return (
            <ListGroup.Item key={elem.id} data-key={elem.id}>
              {elem.text}
              <FontAwesomeIcon icon={faTrashAlt} className="float-right" onClick={onClickDeleteBtn}></FontAwesomeIcon>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Card>
  );
}

export default Todolist;
