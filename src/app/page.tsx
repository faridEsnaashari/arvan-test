"use client";

import { Progressbar, Step } from "@/common/components/progressbar";
import { paraf3Text, tabsTexts, titleDescription1, titleDescription2, titleText1, titleText2 } from "./texts";
import { getRandomId } from "@/tools/helpers.helper";
import { Form, TabContentFour, TabContentOne, TabContentThree, TabContentTwo } from "./components";

function Page() {
  return (
    <>
      <section className="px-[3.73%] pb-[6rem] pt-[6rem] xsm:px-[10%] xsm:py-32 md:px-[19.16%]">
        <h6 className="text-base/normal font-bold text-green-700 xsm:text-4.5/normal">{titleText1}</h6>
        <h1 className="mt-6 text-3xl font-bold leading-14 text-gray-900 xsm:text-10">{titleDescription1}</h1>
        <div className="mt-16">
          <Progressbar duration={2000}>
            <Step key={getRandomId() + ""} title={tabsTexts[0]}>
              <TabContentOne />
            </Step>
            <Step key={getRandomId() + ""} title={tabsTexts[1]}>
              <TabContentTwo />
            </Step>
            <Step key={getRandomId() + ""} title={tabsTexts[2]}>
              <TabContentThree />
            </Step>
            <Step key={getRandomId() + ""} title={tabsTexts[3]}>
              <TabContentFour />
            </Step>
          </Progressbar>
        </div>
      </section>
      <section className="bg-footer-bg flex flex-wrap bg-gradient-footer px-[3.73%] py-32 pb-[6rem] pt-[6rem] xsm:px-[10%] xsm:py-32 sm:flex-nowrap sm:gap-33 md:px-[19.16%]">
        <div className="w-full">
          <h6 className="text-base/normal font-bold leading-normal text-green-400 xsm:text-4.5/normal">{titleText2}</h6>
          <h1 className="mt-6  text-3xl font-bold leading-14 text-white xsm:text-10">{titleDescription2}</h1>
          <p className="mb-16 pt-8 text-4.5 font-medium leading-[1.875rem] tracking-[0.0225rem] text-gray-100">
            {paraf3Text}
          </p>
        </div>
        <div className="w-full">
          <Form />
        </div>
      </section>
    </>
  );
}

export default Page;
