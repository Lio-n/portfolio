import emailjs from "@emailjs/browser";

const sendEmail = ({ from_name, message }: { from_name: string; message: string }) => {
  try {
    emailjs.send(
      process.env.EMAILJS_SERVICE_ID as string,
      process.env.EMAILJS_TEMPLATE_ID as string,
      {
        from_name,
        message,
      },
      process.env.EMAILJS_PUBLIC_KEY as string
    );
  } catch (err) {
    console.log({ err });
  }
};

export default sendEmail;
