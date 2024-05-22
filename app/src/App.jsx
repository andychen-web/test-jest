import React, { useState } from "react";
import Control from "./components/Control.js";
import Content from "./components/Content.js";
import { Container, Title } from "./Style.css.js";
import { TEST_ID } from "./config/testId.js";
import TestLodash from "./components/TestLodash.jsx";
import TestForm from "./views/TestForm.jsx";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import TestAlgorithm from "./components/TestAlgorithm.jsx";

// test only
const App = () => {
  const [list, setList] = useState([]);
  return (
    <Container>
      <Title data-testid={TEST_ID.APP_TITLE}>Test List Sample</Title>
      <Control list={list} setList={setList} />
      <Content list={list} setList={setList} />
      <TestLodash />
      <TestAlgorithm />
      <TestForm />
    </Container>
  );
};

export default App;
