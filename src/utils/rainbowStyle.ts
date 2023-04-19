const RainbowBaseStyle = `
  color: transparent;
  background-image: linear-gradient(
    to right,
    #ff5858,
    #ffc8c8,
    #f7a2aa,
    #ffed00,
    #f0f20a,
    #28f373,
    #00ff87,
    #60efff,
    #9bf8f4,
    #6f7bf7,
    #439cfb,
    #f187fb
  );

  @keyframes animateRainbow {
    0%{
        background-position: 0% 100%;
    }
    50%{
        background-position: 100% 0%;
    }
    100%{
        background-position: 0% 100%;
    }
  }

  animation: animateRainbow 10s linear infinite;
  background-size: 500%;
`;

export default RainbowBaseStyle;
