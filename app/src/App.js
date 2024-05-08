import React, { useState } from "react";
import Control from "./components/Control";
import Content from "./components/Content";
import { Container, Title } from "./Style.css";
import { TEST_ID } from "./config/testId";
// test only
import TestLodash from "./components/TestLodash.jsx";

const App = () => {
  const [list, setList] = useState([]);
  return (
    <Container>
      <Title data-testid={TEST_ID.APP_TITLE}>Todo List Sample</Title>
      <Control list={list} setList={setList} />
      <Content list={list} setList={setList} />
      <TestLodash />
    </Container>
  );
};

export default App;
