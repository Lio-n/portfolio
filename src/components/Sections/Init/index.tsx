import { LeafBranchSvg } from "@/ui/icons";
import { H2 } from "@/ui/texts";
import { BrushCard } from "@/ui/texts/brushCard";
import { RainbowText } from "@/ui/texts/rainbowText";
import styled from "styled-components";

const Section = styled.section`
  padding-top: 10rem;

  .LeafBranchSvg {
    position: absolute;
    top: 0;
    right: 0;
    max-height: 15rem;
    min-width: 30rem;
    transition: all 0.5s ease-out;
  }

  @media (min-width: 770px) {
    .LeafBranchSvg {
      top: -5rem;
      max-height: 20rem;
    }
  }
`;

const InitSection = () => {
  return (
    <Section className="centerGrid">
      <LeafBranchSvg className="LeafBranchSvg" viewBox="0 0 828 355" />
      <div>
        <RainbowText style={{ textAlign: "center" }}>Hello World!</RainbowText>
        <div style={{ margin: "0 auto", width: "max-content" }}>
          <div style={{ display: "flex" }}>
            <H2 fontFamily="montez">I`m &nbsp;&nbsp;&nbsp;</H2>
            <BrushCard>Leonardo Fontan,</BrushCard>
          </div>
          <div style={{ display: "flex" }}>
            <BrushCard>Web Developer</BrushCard>
            <H2 fontFamily="montez">&nbsp;&nbsp;&nbsp; Full Stack</H2>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default InitSection;
