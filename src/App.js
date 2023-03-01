import React, { useState } from "react";
import styled from "styled-components";
import Tree from "./components/Tree";
import TreeNode from "./components/TreeNode";
import Header from "./components/Header";
import Form from "./components/Form.jsx"
const Wrapper = styled.div`
  display: flex;
  // justify-content: center;
  align-items:center;
  flex-direction:column;
  width: full;
  height: 100vh;
`;
const createTreeStructure=(items)=>{

  console.log(items)
}
const App = () => {
  return (
    <Wrapper className="">
      <Header />
      <Form onCreate={createTreeStructure} />
    </Wrapper>
  );
};
export default App;
