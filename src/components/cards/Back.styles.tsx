import styled from "styled-components";
export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 286px;
  height: 157px;
  border-radius: 6px;
  background-color: #d2d3d9;
  padding: 14px;
  left: 20px;
  @media screen and (min-width: 1440px) {
    height: 245px;
    width: 447px;
    border-radius: 10px;
    position: relative;
    padding: 25px;
    top: 250px;
    left: -100px;
  }
`;
export const CardBlackLine = styled.div`
  width: 286px;
  height: 34px;
  background-color: black;
  @media screen and (min-width: 1440px) {
    width: 447px;
  }
`;
export const CardGreyLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 9px;
  font-size: 9px;
  color: #fff;
  margin-top: 20px;
  width: 230px;
  height: 30px;
  background: #adb5be;
  border-radius: 4px;
  @media screen and (min-width: 1440px) {
    height: 38px;
    width: 361px;
    font-size: 14px;
    border-radius: 4px;
  }
`;
