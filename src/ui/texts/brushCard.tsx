import { H2 } from ".";
import { BrushEffectSvg } from "../icons";

const BrushCard = ({ children }: any) => {
  return (
    <div style={{ position: "relative", color: "black", display: "inline-block" }}>
      <BrushEffectSvg width="100%" height="100%" viewBox="0 0 287 52" style={{ position: "absolute", zIndex: "-1", scale: "1.3" }} />
      <H2 fontFamily="montez" color="#000">
        {children}
      </H2>
    </div>
  );
};

export { BrushCard };
