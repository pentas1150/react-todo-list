import React, { useState } from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Input from "./components/Input";
import Todolist from "./components/Todolist";

function App() {
  const [list, setList] = useState([]);

  const addTodoList = item => {
    setList([...list, item]);
  };

  const removeTodoList = removeIdx => {
    setList(
      list.filter(item => {
        return item.id !== removeIdx;
      })
    );
  };

  return (
    <Container className="App">
      <Row className="justify-content-center">
        <Col md={6}>
          <Input onAddItem={addTodoList} />
          <Todolist onRemoveItem={removeTodoList} list={list} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
