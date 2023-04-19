import { WallBranchesSvg } from "@/ui/icons";
import { HangingP1Svg } from "@/ui/icons/hanging_plants";
import {
  DockerIconSvg,
  FirestoreIconSvg,
  GithubIconSvg,
  GraphqlIconSvg,
  NestjsIconSvg,
  NextjsIconSvg,
  NodejsIconSvg,
  PostgresqlIconSvg,
  SequelizeIconSvg,
  TsIconSvg,
} from "@/ui/icons/technologies";
import { RainbowText } from "@/ui/texts/rainbowText";
import styled from "styled-components";

const Section = styled.section`
  position: relative;

  .WallBranchesSvg {
    position: absolute;
    width: 100%;
    left: clamp(-10rem, -35vw, 0rem);
    max-height: 40rem;
    max-width: 35rem;
    top: -15rem;
  }
`;

const Content = styled.div`
  text-align: center;
  margin: 0 auto;

  .container_title {
    position: relative;

    .work_title {
      width: max-content;
      text-decoration: double underline var(--white) 2px;
    }
  }

  .hanging_svg {
    height: 8rem;
    position: absolute;
    right: -0.8rem;
    z-index: 1;
  }

  .container_technologiesIcons {
    margin-top: 5rem;
    max-width: 55vw;

    svg {
      width: 15vw;
      max-width: 6rem;
      filter: grayscale(1);
      transition: all 0.2s ease-out;
    }

    svg:hover {
      filter: grayscale(0);
    }
  }
`;

const TechnologiesSection = () => {
  return (
    <Section>
      <WallBranchesSvg className="WallBranchesSvg" viewBox="0 0 471 884" />

      <Content className="centerGrid">
        <div className="container_title">
          <RainbowText typeOfTag="h2" className="work_title">
            Technologies
          </RainbowText>
          <HangingP1Svg className="hanging_svg" viewBox="0 0 133 317" />
        </div>
        <div className="container_technologiesIcons FlexWrapList">
          <DockerIconSvg viewBox="0 0 128 128" />
          <FirestoreIconSvg viewBox="0 0 128 128" />
          <GithubIconSvg viewBox="0 0 128 128" />
          <GraphqlIconSvg viewBox="0 0 128 128" />
          <NestjsIconSvg viewBox="0 0 128 128" />
          <NextjsIconSvg viewBox="0 0 128 128" />
          <NodejsIconSvg viewBox="0 0 128 128" />
          <PostgresqlIconSvg viewBox="0 0 128 128" />
          <SequelizeIconSvg viewBox="0 0 128 128" />
          <TsIconSvg viewBox="0 0 128 128" />
        </div>
      </Content>
    </Section>
  );
};

export default TechnologiesSection;
