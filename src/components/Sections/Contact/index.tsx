import { EmailIconSvg, FlowerpotSvg, LinkedinIconSvg } from "@/ui/icons";
import { HangingP2Svg, HangingP4Svg } from "@/ui/icons/hanging_plants";
import { GithubIconSvg } from "@/ui/icons/technologies";
import { RainbowText } from "@/ui/texts/rainbowText";
import RainbowBaseStyle from "@/utils/rainbowStyle";
import styled from "styled-components";

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
    margin: 0 auto;
    justify-content: space-evenly;

    .hangingP4_svg,
    .hangingP2_svg {
      opacity: 0.8;
    }

    .LinkContainerContactIcon {
      top: 5.5rem;
      left: 1.5rem;

      .GithubIconSvg,
      .LinkedinIconSvg {
        height: 7rem;
        margin: 0 auto;
      }
    }
  }
`;

const Rainbow = styled.div`
  ${RainbowBaseStyle}

  border-radius: 100%;
  z-index: -1;
  position: relative;
`;

const FormContainer = styled.section`
  max-width: 40rem;
  background-color: var(--white);
  border-radius: 5px;
  padding: 1rem;
  margin: 5rem auto 0;
  position: relative;

  .container_svg {
    position: absolute;
    bottom: 1rem;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;

    .LinkContainerContactIcon {
      top: 9rem;

      .Rainbow {
        height: 5rem;
        padding: 10px;
        width: 5rem;
      }
    }

    .EmailIconSvg {
      height: 100%;
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
          <a href="/" className="LinkContainerContactIcon">
            <Rainbow>
              <GithubIconSvg viewBox="0 0 128 128" className="GithubIconSvg" />
            </Rainbow>
          </a>
        </div>

        <div style={{ position: "relative" }}>
          <HangingP2Svg className="hangingP2_svg" viewBox="0 0 145 296" />
          <a href="/" className="LinkContainerContactIcon">
            <Rainbow>
              <LinkedinIconSvg viewBox="0 0 90 90" className="LinkedinIconSvg" />
            </Rainbow>
          </a>
        </div>
      </div>

      <FormContainer>
        <div className="container_svg">
          <FlowerpotSvg className="FlowerpotSvg" viewBox="0 0 157 263" />

          <a href="/" className="LinkContainerContactIcon">
            <Rainbow className="Rainbow">
              <EmailIconSvg viewBox="0 0 128 102" className="EmailIconSvg" />
            </Rainbow>
          </a>
        </div>
        <form action=""></form>
      </FormContainer>
    </Section>
  );
};

export default ContactSection;
