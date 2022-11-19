import { Card, CardBlackLine, CardGreyLine } from "./Back.styles";

type BackProps = {
  cvc: string;
};
const BackSideCard = ({ cvc }: BackProps) => {
  return (
    <Card>
      <CardBlackLine></CardBlackLine>
      <CardGreyLine>
        {cvc.length <= 3 ? cvc : cvc[0] + cvc[1] + cvc[2]}
      </CardGreyLine>
    </Card>
  );
};

export default BackSideCard;
