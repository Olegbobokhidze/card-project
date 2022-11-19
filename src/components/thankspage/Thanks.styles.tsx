import styled from "styled-components";

export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 67px;
`;
export const Img = styled.img``;
export const Circle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 35px;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(#6348fe, #610595);
`;
export const ThankYou = styled.h1`
  font-size: 28px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 16px;
  color: #21092f;
`;
export const Paragraph = styled.p`
  color: #8f8694;
  font-size: 18px;
`;
export const ContinueButton = styled.button`
  width: 327px;
  height: 53px;
  border-radius: 8px;
  color: #fff;
  font-size: 18px;
  background-color: #21092f;
  margin-top: 30px;
  border: 0;
  cursor: pointer;
  &:hover {
    background: linear-gradient(#6348fe, #610595);
  }
  &:focus {
    outline: none;
  }
  @media screen and (min-width: 1440px) {
    width: 381px;
    margin-top: 50px;
  }
`;
