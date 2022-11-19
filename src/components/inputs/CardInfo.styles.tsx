import styled from "styled-components";
interface Props {
  cardNumber: string;
}
interface Props1 {
  month: any;
}
interface Props2 {
  year: any;
}
interface Props3 {
  cvc: any;
}
interface Props4 {
  cardName: any;
}
export const NameHolder = styled.input<Props4>`
  width: 327px;
  height: 45px;
  border-radius: 8px;
  border: solid 1px
    ${(props) =>
      props.cardName.match(/\d/) || props.cardName.length > 25
        ? "red"
        : "#dfdee0"};
  margin-bottom: 20px;
  color: #21092f;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    border: 2px solid
      ${(props) =>
        props.cardName.match(/\d/) || props.cardName.length > 25
          ? "red"
          : "#610595"};
    padding: 9px;
  }
  &:focus {
    outline-color: ${(props) =>
      props.cardName.match(/\d/) || props.cardName.length > 25
        ? "red"
        : "#610595"};
  }
  @media screen and (min-width: 1440px) {
    width: 381px;
    margin-bottom: 25px;
  }
`;
export const NameError = styled.p<Props4>`
  display: ${(props) =>
    props.cardName.match(/\d/) || props.cardName.length > 25 ? "flex" : "none"};
  position: absolute;
  top: 73px;
  left: 7px;
  color: red;
  font-size: 10px;
  @media screen and (min-width: 1440px) {
    font-size: 12px;
  }
`;
export const Paragraph = styled.p`
  font-size: 14px;
  color: #21092f;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 9px;
`;
export const NumberHolder = styled.input<Props>`
  width: 327px;
  height: 45px;
  border-radius: 8px;
  border: solid 1px
    ${(props) => (props.cardNumber.length > 16 ? "red" : "#dfdee0")};
  margin-bottom: 20px;
  color: #21092f;
  font-size: 18px;
  padding: 10px;
  cursor: pointer;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:hover {
    border: 2px solid
      ${(props) => (props.cardNumber.length > 16 ? "red" : "#610595")};
    padding: 9px;
  }
  &:focus {
    outline-color: ${(props) =>
      props.cardNumber.length > 16 ? "red" : "#610595"};
  }
  @media screen and (min-width: 1440px) {
    width: 381px;
    margin-bottom: 25px;
  }
`;
export const NumberError = styled.p<Props>`
  display: ${(props) => (props.cardNumber.length > 16 ? "flex" : "none")};
  position: absolute;
  top: 168px;
  left: 7px;
  color: red;
  font-size: 10px;
  @media screen and (min-width: 1440px) {
    font-size: 12px;
  }
`;
export const MonthHolder = styled.input<Props1>`
  width: 72px;
  height: 45px;
  border-radius: 8px;
  border: ${(props) =>
    props.month.length > 2 || props.month > 12
      ? "solid 1px red"
      : "solid 1px #dfdee0"};
  margin-right: 9px;
  color: #21092f;
  font-size: 18px;
  padding: 10px;
  cursor: pointer;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:hover {
    border: 2px solid
      ${(props) =>
        props.month.length > 2 || props.month > 12 ? "red" : "#610595"};
    padding: 9px;
  }
  &:focus {
    outline-color: ${(props) =>
      props.month.length > 2 || props.month > 12 ? "red" : "#610595"};
  }
  @media screen and (min-width: 1440px) {
    width: 80px;
    margin-right: 16px;
  }
`;
export const YearHolder = styled.input<Props2>`
  width: 72px;
  height: 45px;
  border-radius: 8px;
  border: solid 1px
    ${(props) =>
      props.year.length === 2 || props.year.length === 0 ? "#dfdee0" : "red"};
  margin-right: 9px;
  color: #21092f;
  font-size: 18px;
  padding: 10px;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  cursor: pointer;
  &:hover {
    border: 2px solid
      ${(props) =>
        props.year.length === 2 || props.year.length === 0 ? "#610595" : "red"};
    padding: 9px;
  }
  &:focus {
    outline-color: ${(props) =>
      props.year.length === 2 || props.year.length === 0 ? "#610595" : "red"};
  }
  @media screen and (min-width: 1440px) {
    width: 80px;
    margin-right: 15px;
  }
`;
export const CvcHolder = styled.input<Props3>`
  width: 164px;
  height: 45px;
  border-radius: 8px;
  border: ${(props) =>
    props.cvc.length === 3 || props.cvc.length === 0
      ? "solid 1px #dfdee0"
      : "solid 1px red"};
  padding: 10px;
  color: #21092f;
  cursor: pointer;
  font-size: 18px;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:hover {
    border: ${(props) =>
      props.cvc.length === 3 || props.cvc.length === 0
        ? "solid 2px #610595"
        : "solid 2px red"};
    padding: 9px;
  }
  &:focus {
    outline-color: ${(props) =>
      props.cvc.length === 3 || props.cvc.length === 0 ? "#610595" : "red"};
  }
  @media screen and (min-width: 1440px) {
    width: 191px;
  }
`;
export const DatesAndCvc = styled.div`
  display: flex;
`;
export const HolderB = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const ConfirmButton = styled.button`
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
export const MonthError = styled.p<Props1>`
  display: ${(props) =>
    props.month.length > 2 || props.month > 12 ? "flex" : "none"};
  position: absolute;
  top: 257px;
  left: 6px;
  color: red;
  font-size: 10px;
  @media screen and (min-width: 1440px) {
    font-size: 12px;
    top: 267px;
  }
`;
export const YearError = styled.p<Props2>`
  display: ${(props) =>
    props.year.length === 2 || props.year.length === 0 ? "none" : "flex"};
  position: absolute;
  top: 257px;
  left: 85px;
  color: red;
  font-size: 10px;
  @media screen and (min-width: 1440px) {
    font-size: 12px;
    top: 267px;
    left: 103px;
  }
`;
export const CvcError = styled.p<Props3>`
  display: ${(props) =>
    props.cvc.length === 3 || props.cvc.length === 0 ? "none" : "flex"};
  position: absolute;
  top: 257px;
  left: 168px;
  color: red;
  font-size: 10px;
  @media screen and (min-width: 1440px) {
    font-size: 12px;
    top: 267px;
    left: 195px;
  }
`;
