import React, { useState } from "react";
import Control from "./components/Control.js";
import Content from "./components/Content.js";
import { Container, Title } from "./Style.css.js";
import { TEST_ID } from "./config/testId.js";
import TestLodash from "./components/TestLodash.jsx";
import TestFormPage from "./views/TestFormPage.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TestAlgorithm from "./components/TestAlgorithm.jsx";

// test only
const App = () => {
  return (
    <Router>
      <Container>
        {/* <Title data-testid={TEST_ID.APP_TITLE}>Test List Sample</Title>
    <Control list={list} setList={setList} />
  <Content list={list} setList={setList} /> */}
        {/* create Route for below */}
        <Routes>
          <Route path="/test-form" element={<TestFormPage />} />
          <Route path="/test-lodash" element={<TestLodash />} />
          <Route path="/test-algorithm" element={<TestAlgorithm />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
