import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 286px;
  height: 157px;
  border-radius: 6px;
  padding: 20px;
  background: linear-gradient(
    135deg,
    #6348fe,
    1%,
    #610595,
    40%,
    #ff834a,
    80%,
    #d53aff
  );
  position: relative;
  top: -60px;
  left: -30px;
  @media screen and (min-width: 1440px) {
    height: 245px;
    width: 447px;
    border-radius: 10px;
    top: -300px;
    left: -200px;
  }
`;
export const WhiteCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  margin-right: 10px;
  @media screen and (min-width: 1440px) {
    width: 46px;
    height: 47px;
  }
`;
export const SmallCircle = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: none;
  border: solid 1px #fff;
  @media screen and (min-width: 1440px) {
    width: 21px;
    height: 21px;
  }
`;
export const CirclesHolder = styled.div`
  display: flex;
  align-items: center;
`;
export const NumbersHolder = styled.p`
  color: #fff;
  height: 20px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2px;
  margin-top: 25px;
  margin-bottom: 17px;
  @media screen and (min-width: 1440px) {
    margin-top: 60px;
    margin-bottom: 30px;
    font-size: 28px;
  }
`;
export const NameDateHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Name = styled.p`
  font-size: 9px;
  color: #fff;
  letter-spacing: 1.29px;
  text-transform: uppercase;
  @media screen and (min-width: 1440px) {
    font-size: 14px;
  }
`;
export const Date = styled.p`
  font-size: 9px;
  color: #fff;
  letter-spacing: 1.29px;
  @media screen and (min-width: 1440px) {
    font-size: 14px;
  }
`;
