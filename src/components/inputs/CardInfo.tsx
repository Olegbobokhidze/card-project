import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  NumberHolder,
  NameHolder,
  MonthHolder,
  YearHolder,
  CvcHolder,
  DatesAndCvc,
  HolderB,
  Paragraph,
  ConfirmButton,
  NumberError,
  MonthError,
  YearError,
  CvcError,
  NameError,
} from "./CardInfo.styles";
type CardProps = {
  check: () => void;
};
const CardInfo = ({ check }: CardProps) => {
  const dispatch = useAppDispatch();
  const cardNumber = useAppSelector((state) => state.cardNumber);
  const cardName = useAppSelector((state) => state.cardName);
  const month = useAppSelector((state) => state.month);
  const year = useAppSelector((state) => state.year);
  const cvc = useAppSelector((state) => state.cvc);
  const setCvc = (e: any) => {
    const cvc = e.target.value;
    dispatch({ type: "cvc", cvc });
  };
  const setYear = (e: any) => {
    const year = e.target.value;
    dispatch({ type: "year", year });
  };
  const setMonth = (e: any) => {
    const month = e.target.value;
    dispatch({ type: "month", month });
  };
  const setCardName = (e: any) => {
    const cardName = e.target.value;
    dispatch({ type: "cardName", cardName });
  };
  const setCardNumber = (e: any) => {
    const cardNumber = e.target.value;
    dispatch({ type: "cardNumber", cardNumber });
  };
  return (
    <HolderB>
      <Paragraph>Cardholder Name</Paragraph>
      <NameHolder
        type="text"
        value={cardName}
        onChange={setCardName}
        cardName={cardName}
        placeholder="e.g. Jane Appleseed"
      />
      <NameError cardName={cardName}>Not a valid name</NameError>
      <Paragraph>Card Number</Paragraph>
      <NumberHolder
        cardNumber={cardNumber}
        value={cardNumber}
        type="number"
        onChange={setCardNumber}
        placeholder="e.g. 1234 5678 9123 0000"
      />
      <NumberError cardNumber={cardNumber}>Not a valid number</NumberError>
      <Paragraph>exp.date MM/YY CVC</Paragraph>
      <DatesAndCvc>
        <MonthHolder
          value={month}
          onChange={setMonth}
          placeholder="-MM"
          month={month}
          type="number"
        />
        <MonthError month={month}>Not a valid</MonthError>
        <YearHolder
          value={year}
          onChange={setYear}
          placeholder="-YY"
          year={year}
          type="number"
        />
        <YearError year={year}>Not a valid</YearError>
        <CvcHolder
          value={cvc}
          onChange={setCvc}
          cvc={cvc}
          placeholder="e.g. 123"
          type="number"
        />
        <CvcError cvc={cvc}>Not a valid</CvcError>
      </DatesAndCvc>
      <ConfirmButton onClick={() => check()}>Confirm</ConfirmButton>
    </HolderB>
  );
};

export default CardInfo;
