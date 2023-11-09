import { ProgressbarProps } from "./progressbar.types";
import { StepProps } from "./step.types";

export type TabProps = {
  active: boolean;
  children: StepProps["title"];
  duration: ProgressbarProps["duration"];
  onClick: () => void;
};
