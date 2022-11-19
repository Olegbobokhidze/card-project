import {
  ThankYou,
  Holder,
  ContinueButton,
  Paragraph,
  Circle,
  Img,
} from "./Thanks.styles";
import check from "./check.png";
const Thanks = () => {
  return (
    <Holder>
      <Circle>
        <Img alt="check" src={check} />
      </Circle>
      <ThankYou>thank you!</ThankYou>
      <Paragraph>We've added your card details</Paragraph>
      <ContinueButton>Continue</ContinueButton>
    </Holder>
  );
};

export default Thanks;
