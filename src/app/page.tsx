"use client";

import { Progressbar, Step } from "@/common/components/progressbar";
import { tabsTexts, titleDescription1, titleText1 } from "./texts";
import { getRandomId } from "@/tools/helpers.helper";
import { TabContentFour, TabContentOne, TabContentThree, TabContentTwo } from "./components";

function Page() {
  return (
    <section className="px-1/5.26 py-32">
      <h6 className="text-4.5 font-bold leading-normal text-green-700">{titleText1}</h6>
      <h1 className="mt-6 text-10 font-bold leading-14 text-gray-900">{titleDescription1}</h1>
      <div className="mt-16">
        <Progressbar duration={2000}>
          <Step key={getRandomId() + ""} title={tabsTexts[0]}>
            <div id={getRandomId() + ""}></div>
            <TabContentOne />
          </Step>
          <Step key={getRandomId() + ""} title={tabsTexts[1]}>
            <div id={getRandomId() + ""}></div>
            <TabContentTwo />
          </Step>
          <Step key={getRandomId() + ""} title={tabsTexts[2]}>
            <div id={getRandomId() + ""}></div>
            <TabContentThree />
          </Step>
          <Step key={getRandomId() + ""} title={tabsTexts[3]}>
            <div id={getRandomId() + ""}></div>
            <TabContentFour />
          </Step>
        </Progressbar>
      </div>
    </section>
  );
}

export default Page;
