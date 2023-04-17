import styled, { keyframes } from "styled-components";
import { H1 } from ".";

const animateRainbow = keyframes`
   0%{
    background-position: 0% 100%;
  }
  50%{
    background-position: 100% 0%;
  }
  100%{
    background-position: 0% 100%;
  }
`;

const RainbowTextBase = styled(H1)`
  color: transparent;
  /* background-image: linear-gradient(to right, #2ecc71, #3498cd, #9b59b6, #f39c12); */
  background-image: linear-gradient(
    to right,
    #ff5858,
    #ffc8c8,
    #f7a2aa,
    #ffed00,
    #f0f20a,
    #28f373,
    #00ff87,
    #60efff,
    #9bf8f4,
    #6f7bf7,
    #439cfb,
    #f187fb
  );

  animation: ${animateRainbow} 10s linear infinite;
  background-size: 500%;
  background-clip: text;
`;

const fontsVar = { h1: "--fs-h1", h2: "--fs-h2", p: "--fs-p", span: "--fs-p" };

type RainbowText = {
  children: string;
  typeOfTag?: "h1" | "h2" | "p" | "span";
  fontFamily?: "indieFlower" | "montez";
  style?: any;
  className?: string;
};
export const RainbowText = ({ children, typeOfTag = "h1", fontFamily, style, className }: RainbowText) => {
  return (
    <RainbowTextBase className={className} as={typeOfTag} fontFamily={fontFamily} style={{ ...style, fontSize: `var(${fontsVar[typeOfTag]})` }}>
      {children}
    </RainbowTextBase>
  );
};
