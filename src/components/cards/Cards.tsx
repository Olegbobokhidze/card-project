import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../store/hooks";
import BackSideCard from "./BackSideCard";
import FrontSideCard from "./FrontSideCard";
const Holder = styled.div``;
const Cards = () => {
  const cardNumber = useAppSelector((state) => state.cardNumber);
  const cardName = useAppSelector((state) => state.cardName);
  const month = useAppSelector((state) => state.month);
  const year = useAppSelector((state) => state.year);
  const cvc = useAppSelector((state) => state.cvc);
  return (
    <Holder>
      <BackSideCard cvc={cvc} />
      <FrontSideCard
        cardNumber={cardNumber}
        cardName={cardName}
        month={month}
        year={year}
      />
    </Holder>
  );
};

export default Cards;
