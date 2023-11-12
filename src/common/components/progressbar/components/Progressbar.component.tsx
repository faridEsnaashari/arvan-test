"use client";

import { isValidElement, useState, useEffect, useRef } from "react";
import { ProgressbarProps } from "./progressbar.types";
import { StepProps } from "./step.types";
import { Step } from "..";
import Tab from "./Tab.component";

function Progressbar({ children, duration }: ProgressbarProps) {
  const intervalRef = useRef<number>();

  const [stepsProps, setStepProps] = useState<StepProps[]>([]);
  const [activeStep, setActiveStep] = useState(0);
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const props: StepProps[] = [];
    children.forEach(
      (child) => isValidElement<StepProps>(child) && child.type.name === Step.name && props.push(child.props),
    );
    setStepProps(props);

    const isMobileView = document.documentElement.clientWidth <= 480;

    !isMobileView && (intervalRef.current = setDurationInterval(props.length - 1));

    setMobileView(isMobileView);

    return () => clearInterval(intervalRef.current);
  }, []);

  const setDurationInterval = (numberOfSteps: number, runAtBegin?: boolean) => {
    if (mobileView) {
      return;
    }

    if (runAtBegin) {
      setActiveStep((activeStep) => (activeStep === numberOfSteps ? 0 : activeStep + 1));
    }

    const intervalId = setInterval(
      () => setActiveStep((activeStep) => (activeStep === numberOfSteps ? 0 : activeStep + 1)),
      duration,
    );

    return intervalId as unknown as number;
  };

  const onTabClicked = (tabId: number) => {
    setActiveStep(tabId);
  };

  const onHovered = () => clearInterval(intervalRef.current);
  const onHoveredCancelled = () => {
    intervalRef.current = setDurationInterval(stepsProps.length - 1, true);
  };

  const getTabs = () => {
    return stepsProps.map((stepProps, index) => (
      <Tab key={index} onClick={() => onTabClicked(index)} active={activeStep === index} duration={duration}>
        {stepProps.title}
      </Tab>
    ));
  };

  const getContent = () => {
    const activeStepProps = stepsProps.find((stepProps, index) => index === activeStep);
    return activeStepProps?.children;
  };

  return (
    <div className="w-full" onMouseOver={onHovered} onMouseLeave={onHoveredCancelled}>
      <div className="flex w-full flex-wrap xsm:flex-nowrap xsm:justify-between">{getTabs()}</div>
      <div className="w-full">{getContent()}</div>
    </div>
  );
}

export default Progressbar;
