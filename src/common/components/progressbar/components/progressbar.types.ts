import { JSXElementConstructor, ReactElement } from "react";
import { StepProps } from "./step.types";

export type ProgressbarProps = {
  children: ReactElement<StepProps, JSXElementConstructor<unknown>>[];
  duration: number;
};
