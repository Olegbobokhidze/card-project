import {
  Card,
  WhiteCircle,
  SmallCircle,
  CirclesHolder,
  NumbersHolder,
  Name,
  Date,
  NameDateHolder,
} from "./Front.styles";
type FrontCard = {
  cardNumber: string;
  cardName: string;
  month: string;
  year: string;
};
const FrontSideCard = ({ cardNumber, cardName, month, year }: FrontCard) => {
  function space(str: any, after: any) {
    if (!str) {
      return false;
    } else if (str.length > 16) {
      return;
    }
    after = after || 4;
    var v = str.replace(/[^\dA-Z]/g, ""),
      reg = new RegExp(".{" + after + "}", "g");
    return v.replace(reg, function (a: any) {
      return a + " ";
    });
  }
  return (
    <Card>
      <CirclesHolder>
        <WhiteCircle></WhiteCircle>
        <SmallCircle></SmallCircle>
      </CirclesHolder>
      <NumbersHolder>{space(cardNumber, 4)}</NumbersHolder>
      <NameDateHolder>
        <Name>{cardName}</Name>
        <Date>
          {month.length <= 2 ? month : month[0] + month[1]}/
          {year.length <= 2 ? year : year[0] + year[1]}
        </Date>
      </NameDateHolder>
    </Card>
  );
};

export default FrontSideCard;
