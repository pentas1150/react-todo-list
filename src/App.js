import React, { useState } from "react";
import "./App.css";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Card,
  ListGroup
} from "react-bootstrap";
import { faTrashAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [idx, setIdx] = useState(0);
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const addTodoItem = e => {
    e.preventDefault();

    setList([...list, { id: idx, item: input }]);
    setInput("");
    setIdx(idx + 1);
  };
  const removeTodoItem = e => {
    e.preventDefault();
    const removeId = e.target.parentNode.parentNode.getAttribute("data-key");

    setList(
      list.filter(item => {
        return item.id !== Number(removeId);
      })
    );
  };
  const onChangeInput = e => {
    setInput(e.target.value);
  };
  const onKeyInput = e => {
    if (e.keyCode === 13) {
      setList([...list, { id: idx, item: input }]);
      setInput("");
      setIdx(idx + 1);
    }
  };
  return (
    <Container className="App">
      <Row className="justify-content-center">
        <Col md={6}>
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

          <Card>
            <ListGroup variant="flush">
              {list.map(elem => {
                return (
                  <ListGroup.Item key={elem.id} data-key={elem.id}>
                    {elem.item}
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      className="float-right"
                      onClick={removeTodoItem}
                    ></FontAwesomeIcon>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
