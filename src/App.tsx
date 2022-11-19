import { Globalstyle } from "./GlobalStyle";
import Cards from "./components/cards/Cards";
import CardInfo from "./components/inputs/CardInfo";
import styled from "styled-components";
import Thanks from "./components/thankspage/Thanks";
import { useState } from "react";
import { useAppSelector } from "./store/hooks";

const Holder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const cardNumber = useAppSelector((state) => state.cardNumber);
  const cardName = useAppSelector((state) => state.cardName);
  const month = useAppSelector((state) => state.month);
  const year = useAppSelector((state) => state.year);
  const cvc = useAppSelector((state) => state.cvc);
  function check() {
    if (
      cardNumber.length === 16 &&
      month.length === 2 &&
      year.length === 2 &&
      cvc.length === 3 &&
      !Boolean(cardName.match(/\d/)) &&
      cardName.length < 25
    ) {
      setLoggedIn(true);
    }
  }
  return (
    <>
      <Globalstyle />
      <Holder>
        <Cards />
        {!loggedIn ? <CardInfo check={check} /> : <Thanks />}
      </Holder>
    </>
  );
}

export default App;
