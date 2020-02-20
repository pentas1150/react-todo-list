import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Input(props) {
  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState("");

  const addTodoItem = e => {
    e.preventDefault();

    props.onAddItem({ id: idx, item: input });
    setIdx(idx + 1);
    setInput("");
  };

  const onChangeInput = e => {
    setInput(e.target.value);
  };
  const onKeyInput = e => {
    e.preventDefault();

    if (e.keyCode === 13) {
      props.onAddItem({ id: idx, item: input });
      setIdx(idx + 1);
      setInput("");
    }
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Enter the TODO!!"
        onChange={onChangeInput}
        onKeyDown={onKeyInput}
        value={input}
      />
      <InputGroup.Append>
        <Button variant="link" onClick={addTodoItem}>
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

export default Input;
