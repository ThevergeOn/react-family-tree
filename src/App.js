import React, { useState, useRef, useEffect, useMemo } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Form from "./components/Form.jsx";
const Wrapper = styled.div`
  display: flex;
  // justify-content: center;
  align-items: center;
  flex-direction: column;
  width: full;
  height: 100vh;
  > .Tree-section {
    border: 2px solid rgb(101, 202, 241);
    margin: 50px auto;
    width: 75%;
    height: 50vh;
    position: relative;
    > .row {
      display: flex;
      justify-content: center;
      gap: 5px;
      > div > span {
        width: 20px;
        flex-shrink: 0;
        height: 20px;
        display: inline-flex;
        background: blue;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        color: white;
        padding: 10px;
      }
    }
  }
`;

const App = () => {
  const [nodesList, setNodesList] = useState([]);
  const elementRef = useRef([]);
  function textConverter(items) {
    let array = items;
    let tree = [];
    let end = false;
    for (let i = 0; end == false; i++) {
      let start = i == 0 ? 0 : Math.pow(2, i) - 1;
      let sliced = array.slice(start, start + Math.pow(2, i));
      if (sliced.length == 0) {
        end = true;
      } else {
        sliced = sliced.map(function (x, i) {
          return {
            index: i + start,
            value: x,
            x: getElementX(elementRef.current[i + start]),
            y: getElementY(elementRef.current[i + start]),
          };
        });
        tree.push(sliced);
      }
    }
    setNodesList(tree);
  }
  function getElementY(e) {
    if (e) {
      return e.offsetTop + e.offsetHeight / 2;
    } else {
      return 0;
    }
  }

  function getElementX(e) {
    if (e) {
      return e.offsetLeft + e.offsetWidth / 2;
    } else {
      return 0;
    }
  }

  return (
    <Wrapper className="">
      <Header />
      <Form onCreate={textConverter} />
      <div className="Tree-section">
        {nodesList?.map((row, index) => (
          <div className="row" key={index}>
            {row?.map((node, i) => (
              <div className="" key={i}>
                {/* {i > 0 ? (
                  <svg className="line">
                    <line
                      x1={node.x}
                      y1={node.y}
                      x2={nodesList[index - 1][Math.floor(i / 2)].x}
                      y2={nodesList[index - 1][Math.floor(i / 2)].y}
                      style={{ stroke: "rgb(255,0,0)", strokeWidth: "2" }}
                    />
                  </svg>
                ) : null} */}
                <span
                  ref={(ref) => {
                    elementRef.current[i] = ref;
                  }}
                >
                  {node.value}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
export default App;
