import { DandelionSvg, SeedsBranchSvg } from "@/ui/icons";
import { Paragraph } from "@/ui/texts";
import styled from "styled-components";
import { RainbowText } from "@/ui/texts/rainbowText";

const Section = styled.section`
  position: relative;

  .seedsBranch,
  .dandelion {
    position: absolute;
    z-index: -1;
  }
  .seedsBranch {
    left: -4rem;
    top: -35vw;
    max-width: 55vw;
    min-width: 14rem;
    top: clamp(-9rem, -35vw, 10rem);
  }
  .dandelion {
    right: -8rem;
    top: -10rem;
    max-width: 15rem;
    transition: all 0.5s ease-out;
  }

  @media (min-width: 500px) {
    .dandelion {
      right: -4rem;
    }
  }

  @media (min-width: 900px) {
    .dandelion {
      right: 0;
    }
  }
`;

const Content = styled.div`
  max-width: 15rem;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 500px) {
    max-width: 50vw;
  }
`;

const AboutSection = () => (
  <Section>
    <SeedsBranchSvg className="seedsBranch" viewBox="0 0 552 1066" />
    <DandelionSvg className="dandelion" viewBox="0 0 288 500" />
    <Content>
      <Paragraph>
        <RainbowText typeOfTag="span">I’m</RainbowText> a <RainbowText typeOfTag="span">curious person</RainbowText> with a great{" "}
        <RainbowText typeOfTag="span">desire to learn</RainbowText>, detail-oriented, introverted, and{" "}
        <RainbowText typeOfTag="span">self-taught</RainbowText>.
      </Paragraph>
      <Paragraph style={{ marginTop: "2rem" }}>I’m currently learning about Nestjs and I’m pursuing a Bachelor’s Degree in Systems.</Paragraph>
    </Content>
  </Section>
);

export default AboutSection;
