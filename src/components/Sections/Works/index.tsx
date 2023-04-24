import { FernBranchSvg } from "@/ui/icons";
import { RainbowText } from "@/ui/texts/rainbowText";
import styled from "styled-components";
import { ListOfItems } from "./listOfItems";
import { HangingP3Svg } from "@/ui/icons/hanging_plants";
import { general_works } from "@/data/works";

const Section = styled.section`
  position: relative;

  .fernBranch {
    position: absolute;
    right: clamp(-25rem, -35vw, -20rem);
    width: 100%;
    min-width: 40rem;
  }
`;

const Content = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  margin: 0 auto;

  .work_title {
    width: max-content;
    text-decoration: double underline var(--white) 2px;
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

const WorkSection = () => (
  <Section>
    <FernBranchSvg className="fernBranch" viewBox="0 0 552 1000" />
    <Content>
      <div className="container_title">
        <RainbowText typeOfTag="h2" className="work_title">
          My Works
        </RainbowText>
        <HangingP3Svg className="hanging_svg" />
      </div>
      <ListOfItems items={general_works} />
    </Content>
  </Section>
);

export default WorkSection;
