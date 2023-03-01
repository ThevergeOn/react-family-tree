import { useState } from "react";
import styled from "styled-components";
const Form = styled.div`
  margin: 10px 50px;
  display: flex;
  gap: 10px;
  align-items: center;
  > p {
    font-weight: bold;
    font-size: 20px;
  }
  > input {
    border: 2px solid rgb(101, 202, 241);
    width: 300px;
    height: 30px;
    border-radius: 5px;
    font-size: 15px;
    padding: 10px 15px;
    background-color: inherit;
    color: rgb(27, 99, 255);
    &:focus {
      border: 2px solid rgb(27, 99, 255);
      outline: none;
    }
  }
  > button {
    width: 100px;
    border: 2px solid rgb(101, 202, 241);
    height: 54px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;
    align-text: center;
    padding: 10px 15px;
    background-color: inherit;
    color: inherit;
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
  }
`;

const FormComponent = ({ onCreate }) => {
  const [inputValue, setInputValue] = useState("");

  const handleCreateBtn = (event) => {
    const items = inputValue.split(" ");
    onCreate(items);
  };
  return (
    <Form>
      <p>Type something you want to create your tree with it :</p>
      <input
        placeholder="Type here ..."
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button disabled={!inputValue} onClick={handleCreateBtn}>
        Create
      </button>
    </Form>
  );
};
export default FormComponent;
