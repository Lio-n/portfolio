import sendEmail from "@/lib/emailjs";
import { Paragraph } from "@/ui/texts";
import { RainbowText } from "@/ui/texts/rainbowText";
import { indieFlower } from "@/utils/fonts";
import validateEmail from "@/utils/validateEmail";
import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  position: relative;
  z-index: 1;
  max-width: 30rem;

  * {
    font-family: ${indieFlower.style.fontFamily};
    border-radius: 5px;
    font-weight: 600;
    border: none;
  }

  .container_inputs {
    margin-bottom: 1.5rem;
  }

  .input_email,
  .input_message {
    background-color: var(--black);
    padding: 0.5rem;
    width: 100%;
    color: var(--white);
    font-size: var(--fs-p);
    text-align: center;
  }

  .input_email::placeholder,
  .input_message::placeholder {
    opacity: 1;
  }
  .input_message {
    margin-top: 2rem;
  }

  .form_button {
    background-color: var(--black);
    border: solid 2px var(--white);
    padding: 0.5rem 2rem;
    cursor: pointer;
    transition: all 0.2s ease-out;
  }

  .form_button:hover {
    background-color: var(--white);
    border-color: var(--black);
  }

  .alert_notification-wrong,
  .alert_notification-rigth {
    display: contents;
    margin-top: 0.2rem;
  }
  .alert_notification-wrong {
    color: var(--red);
  }
  .alert_notification-right {
    color: var(--green);
  }
`;

const FormContact = () => {
  const [alerts, setAlerts] = useState<{ email: string; message: string; isSended: boolean }>({ email: "", message: "", isSended: false });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (!email) {
      setAlerts({ ...alerts, email: "Empty Email!", isSended: false });
      return;
    }

    if (!validateEmail(email)) {
      setAlerts({ ...alerts, email: "Invalid Email!", isSended: false });
      return;
    }

    if (!message) {
      setAlerts({ email: "", message: "Empty Message!", isSended: false });
      return;
    }

    sendEmail({ from_name: email, message });
    setAlerts({ email: "", message: "", isSended: true });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="container_inputs">
        <input name="email" className="input_email" type="text" placeholder="E-mail" />
        {alerts.email && <Paragraph className="alert_notification-wrong">{alerts.email}</Paragraph>}

        <textarea name="message" className="input_message" placeholder="Your messsage" />
        {alerts.message && <Paragraph className="alert_notification-wrong">{alerts.message}</Paragraph>}
      </div>
      <button className="form_button">
        <RainbowText typeOfTag="p">Send</RainbowText>
      </button>
      {alerts.isSended && <Paragraph className="alert_notification-right">E-mail sent!</Paragraph>}
    </Form>
  );
};

export { FormContact };
