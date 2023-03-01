import styled from "styled-components";

const WrapperHeader = styled.div`
  border: 2px solid rgb(101, 202, 241);
  width: 50%;
  height: 50px;
  border-radius: 5px;
  margin: 30px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 25px;
  // color:#fff
`;
const Header=()=>{
  return(
    <WrapperHeader>React Tree Family</WrapperHeader>
  )
}
export default Header;