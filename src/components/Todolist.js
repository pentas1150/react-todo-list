import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Todolist(props) {
  const onClickDeleteBtn = e => {
    e.preventDefault();
    const removeId = e.target.parentNode.parentNode.getAttribute("data-key");

    props.onRemoveItem(Number(removeId));
  };

  return (
    <Card>
      <ListGroup variant="flush">
        {props.list.map(elem => {
          return (
            <ListGroup.Item key={elem.id} data-key={elem.id}>
              {elem.item}
              <FontAwesomeIcon
                icon={faTrashAlt}
                className="float-right"
                onClick={onClickDeleteBtn}
              ></FontAwesomeIcon>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Card>
  );
}

export default Todolist;
