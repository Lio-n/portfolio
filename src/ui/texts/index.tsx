import styled from "styled-components";
import { CSSProperties, ReactNode } from "react";
import { indieFlower, montez } from "@/utils/fonts";

type TextProps = {
  style?: CSSProperties;
  children: string | ReactNode;
  color?: string;
  fontFamily?: "indieFlower" | "montez";
  fontWeight?: "bold" | "regular" | "light";
  onClick?: (any: any) => any;
};

const weight = { bold: 700, regular: 400, light: 300 };
const fontFamilies = { indieFlower, montez };

const H1 = styled.h1<TextProps>`
  font-weight: ${({ fontWeight = "bold" }) => weight[fontWeight]};
  color: ${({ color }) => color || "#fff"};
  font-family: ${({ fontFamily = "indieFlower" }) => fontFamilies[fontFamily].style.fontFamily};
  font-size: var(--fs-h1);
`;

const H2 = ({ style, children, ...data }: TextProps) => {
  return (
    <H1 as="h2" {...data} style={{ ...style, fontSize: "var(--fs-h2)" }}>
      {children}
    </H1>
  );
};

const Paragraph = ({ style, children, ...data }: TextProps) => {
  return (
    <H1 as="p" {...data} style={{ ...style, fontSize: "var(--fs-p)" }}>
      {children}
    </H1>
  );
};

export { H1, H2, Paragraph };
