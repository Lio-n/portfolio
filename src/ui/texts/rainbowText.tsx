import styled from "styled-components";
import { H1 } from ".";
import RainbowBaseStyle from "@/utils/rainbowStyle";

const RainbowTextBase = styled(H1)`
  ${RainbowBaseStyle}
  background-clip: text;
  -webkit-background-clip: text; /* Chrome */
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
