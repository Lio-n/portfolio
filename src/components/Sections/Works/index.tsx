import { FernBranchSvg } from "@/ui/icons";
import { RainbowText } from "@/ui/texts/rainbowText";
import styled from "styled-components";
import { ListOfItems } from "./listOfItems";
import { HangingP3Svg } from "@/ui/icons/hanging_plants";
import { general_works, frontend_mentor_works, current_works } from "@/data/works";
import { useState } from "react";
import Switch from "./Switch";

const Section = styled.section`
  position: relative;

  .fernBranch {
    position: absolute;
    right: clamp(-25rem, -35vw, -20rem);
    width: 100%;
    min-width: 40rem;
    max-width: 55rem;
    z-index: -1;
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

  .container_switch {
    margin-bottom: 2rem;

    display: flex;
    place-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const WorkSection = () => {
  const [works, setWork] = useState(general_works);

  const handleSwitchSection = ({ e, activeBtn }: { e: any; activeBtn: "switch_general_works" | "switch_fm_works" | "switch_current_works" }) => {
    e.preventDefault();

    const container_switch = document.querySelector(`.container_switch`);
    // @ts-ignore
    container_switch?.childNodes.forEach((childNode) => childNode.classList.remove("actived_btn"));

    const activeButton = document.getElementById(activeBtn);
    activeButton?.classList.add("actived_btn");

    const data = {
      switch_general_works: general_works,
      switch_fm_works: frontend_mentor_works,
      switch_current_works: current_works,
    };

    setWork(data[activeBtn]);
  };

  return (
    <Section>
      <FernBranchSvg className="fernBranch" viewBox="0 0 552 1000" />
      <Content>
        <div className="container_title">
          <RainbowText typeOfTag="h2" className="work_title">
            My Works
          </RainbowText>
          <HangingP3Svg className="hanging_svg" />
        </div>
        <div style={{ marginTop: "10rem" }}>
          <div className="container_switch">
            <Switch id="switch_general_works" className="actived_btn" onClick={(e) => handleSwitchSection({ e, activeBtn: "switch_general_works" })}>
              General
            </Switch>
            <Switch id="switch_fm_works" onClick={(e) => handleSwitchSection({ e, activeBtn: "switch_fm_works" })}>
              Frontend Mentor
            </Switch>
            <Switch id="switch_current_works" onClick={(e) => handleSwitchSection({ e, activeBtn: "switch_current_works" })}>
              Current Works
            </Switch>
          </div>

          <ListOfItems items={works} />
        </div>
      </Content>
    </Section>
  );
};

export default WorkSection;
