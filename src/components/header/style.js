import { Button } from "antd";
import styled from "styled-components";


export const StyleButton = styled(Button)`
  border: none;
  background-color: transparent;
  color: white;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    border :2px solid green !important;
    background-color: inherit !important;
    box-shadow: 0px 3px 10px rgba(20,247, 87), 0 2px 6px rgba(0, 0, 0, 0.12) !important;
    cursor: pointer;
  }
`;


export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 60%;
`;
