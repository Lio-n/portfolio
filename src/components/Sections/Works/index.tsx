import { BrushCardSvg, FernBranchSvg, HangingP3Svg } from "@/ui/icons";
import { Paragraph } from "@/ui/texts";
import { RainbowText } from "@/ui/texts/rainbowText";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  height: var(--height-section);
  /* width: 100vw; */
  margin-top: 8rem;

  .fernBranch {
    display: none;
    position: absolute;
  }

  @media (min-width: 500px) {
    .fernBranch {
      display: initial;
      right: -15rem;
    }
  }

  @media (min-width: 900px) {
    .fernBranch {
      right: -5rem;
    }
  }
`;

const Content = styled.div`
  display: grid;
  place-content: center;
  max-width: 15rem;
  margin: 0 auto;

  @media (min-width: 500px) {
    max-width: 20rem;
  }

  @media (min-width: 600px) {
    max-width: 30rem;
  }

  .work_title {
    width: max-content;
    text-decoration: double underline #fff 2px;
  }

  .container_title {
    position: relative;
  }

  .hanging_svg {
    position: absolute;
    left: -1rem;
  }

  @media (min-width: 500px) {
    .hanging_svg {
      left: 0rem;
    }
  }
`;

const ListOfCard = styled.div`
  margin-top: 10rem;
`;

const Card = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  max-width: 14rem;

  .brushCard_svg {
    position: absolute;
    top: -2rem;
    z-index: -1;
  }
`;

const WorkSection = () => {
  return (
    <Section>
      <FernBranchSvg className="fernBranch" />
      <Content>
        <div className="container_title">
          <RainbowText typeOfTag="h2" className="work_title">
            My Works
          </RainbowText>
          <HangingP3Svg className="hanging_svg" />
        </div>
        <ListOfCard>
          <Card>
            <Paragraph style={{ color: "blue" }}>Probando API de MELI</Paragraph>
            <Paragraph style={{ color: "blue" }}>
              Para este desafío, consumis datos de la API de Mercado Libre y los integres a este diseño usando Fetch.
            </Paragraph>
            <BrushCardSvg className="brushCard_svg" />
          </Card>
        </ListOfCard>
      </Content>
    </Section>
  );
};

export default WorkSection;
