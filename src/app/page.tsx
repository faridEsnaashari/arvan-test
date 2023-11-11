"use client";

import { Progressbar, Step } from "@/common/components/progressbar";
import { paraf3Text, tabsTexts, titleDescription1, titleDescription2, titleText1, titleText2 } from "./texts";
import { getRandomId } from "@/tools/helpers.helper";
import { Form, TabContentFour, TabContentOne, TabContentThree, TabContentTwo } from "./components";

function Page() {
  return (
    <>
      <section className="px-1/5.26 py-32">
        <h6 className="text-4.5 font-bold leading-normal text-green-700">{titleText1}</h6>
        <h1 className="mt-6 text-10 font-bold leading-14 text-gray-900">{titleDescription1}</h1>
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
      <section className="bg-footer-bg flex gap-33 bg-gradient-footer px-1/5.26 py-32">
        <div className="w-full">
          <h6 className="text-4.5 font-bold leading-normal text-green-400">{titleText2}</h6>
          <h1 className="mt-6 text-[2.375rem] font-bold leading-14 text-white">{titleDescription2}</h1>
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
