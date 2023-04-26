import { EmailIconSvg, FlowerpotSvg, LargeLeafSvg, LinkedinIconSvg } from "@/ui/icons";
import { HangingP2Svg, HangingP4Svg } from "@/ui/icons/hanging_plants";
import { GithubIconSvg } from "@/ui/icons/technologies";
import { RainbowText } from "@/ui/texts/rainbowText";
import RainbowBaseStyle from "@/utils/rainbowStyle";
import styled from "styled-components";
import { FormContact } from "./formContact";
import { Paragraph } from "@/ui/texts";

const Section = styled.section`
  position: relative;
  height: 90vh;
  text-align: center;

  .contact_title {
    border-bottom: double 5px var(--white);
    margin: 0 auto;
    max-width: 40rem;
    min-width: 20rem;
  }

  .container_plants {
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
    max-width: 40rem;

    .hangingP4_svg,
    .hangingP2_svg {
      opacity: 0.8;
    }

    .plants_link-container {
      top: 5.5rem;
      left: 1.5rem;
      position: absolute;
      border-radius: 100%;
      transition: all 0.2s ease-out;

      &:hover {
        transform: translateY(-1rem);
      }

      .GithubIconSvg,
      .LinkedinIconSvg {
        height: 7rem;
        margin: 0 auto;
      }
    }
  }

  .LargeLeafSvg {
    position: absolute;
    top: 30rem;
    max-width: 45rem;
    z-index: -1;
  }
`;

const Rainbow = styled.div`
  ${RainbowBaseStyle}

  border-radius: 100%;
  z-index: -1;
  position: relative;
`;

const FormContainer = styled.div`
  max-width: fit-content;
  background-color: var(--white);
  border-radius: 5px;
  padding: 2rem;
  margin: 5rem auto 0;
  position: relative;

  .container_svg {
    position: absolute;
    top: -15rem;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;

    .svg_link-container {
      display: grid;
      place-items: center;
      position: absolute;
      top: 9rem;

      .Rainbow {
        height: 5rem;
        padding: 10px;
        width: 5rem;
      }

      .link-container_popup {
        display: none;
        position: absolute;
        border-radius: 5px;
        padding: 0.5rem;
        background-color: var(--black);
        border: dotted 2px var(--white);
        top: -4rem;
      }

      &:hover,
      &:active {
        .link-container_popup {
          display: initial;
        }
      }
    }

    .EmailIconSvg {
      height: 100%;
      width: 100%;
    }
    .FlowerpotSvg {
      opacity: 0.8;
    }
  }
`;

const ContactSection = () => {
  return (
    <Section>
      <RainbowText typeOfTag="h2" className="contact_title">
        Contact
      </RainbowText>
      <div className="container_plants">
        <div style={{ position: "relative" }}>
          <HangingP4Svg className="hangingP4_svg" viewBox="0 0 165 360" />
          <a
            href="https://github.com/Lio-n"
            target="_black"
            className="plants_link-container"
            title={`Click here to open a new tab to the Lio-n github profile.`}>
            <Rainbow>
              <GithubIconSvg viewBox="0 0 128 128" className="GithubIconSvg" />
            </Rainbow>
          </a>
        </div>

        <div style={{ position: "relative" }}>
          <HangingP2Svg className="hangingP2_svg" viewBox="0 0 145 296" />
          <a
            href="https://www.linkedin.com/in/leonardo-fontan/"
            target="_black"
            className="plants_link-container"
            title={`Click here to open a new tab to the Leonardo Fontan linkedin profile.`}>
            <Rainbow>
              <LinkedinIconSvg viewBox="0 0 90 90" className="LinkedinIconSvg" />
            </Rainbow>
          </a>
        </div>
      </div>

      <FormContainer>
        <div className="container_svg">
          <FlowerpotSvg className="FlowerpotSvg" viewBox="0 0 157 263" />
          <div className="svg_link-container">
            <div className="link-container_popup">
              <Paragraph color="var(--white)">leonardofontan14@gmail.com</Paragraph>
            </div>
            <Rainbow className="Rainbow">
              <EmailIconSvg viewBox="0 0 128 102" className="EmailIconSvg" />
            </Rainbow>
          </div>
        </div>

        <FormContact />
      </FormContainer>
      <LargeLeafSvg className="LargeLeafSvg" viewBox="0 0 1123 1070" />
    </Section>
  );
};

export default ContactSection;
