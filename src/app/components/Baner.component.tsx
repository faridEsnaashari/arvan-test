import Image from "next/image";
import BanerImage from "@images/banner.svg";
import { buttonText, headingDescriptionText, headingText } from "../texts";
import { ArrowIcon } from "@/common/components/svg-icons";
import { Button } from "@/common/components/forms";

function Baner() {
  return (
    <div className="relative text-white">
      <Image
        className="absolute top-0 z-[-1] h-full w-full bg-black-100 object-cover"
        src={BanerImage}
        alt="baner image"
      />
      <div className="px-[3.73%] pb-[4.5rem] pt-[15.12rem] xsm:py-[4.5rem] xsm:pl-[20%] xsm:pr-[10%] md:pl-[47.08%] md:pr-[19.16%]">
        <h1 className="text-[2rem] font-bold leading-14 xsm:text-10">{headingText}</h1>
        <p className="mt-6 text-sm font-normal leading-[1.625rem] xsm:text-base xsm:font-medium">
          {headingDescriptionText}
        </p>
        <Button className="coursor-pointer mt-12 flex w-full justify-center rounded-lg bg-white px-6 py-3 font-bold text-green-900 xsm:w-fit">
          <span className="ml-2 text-sm leading-4">{buttonText}</span>
          <div className="h-4 w-4">
            <ArrowIcon />
          </div>
        </Button>
        <Button className="coursor-pointer mt-4 flex w-full justify-center rounded-lg border-2 border-white px-6 py-3 font-bold text-white xsm:hidden">
          <span className="ml-2 text-sm leading-4">{buttonText}</span>
          <div className="h-4 w-4">
            <ArrowIcon />
          </div>
        </Button>
      </div>
    </div>
  );
}

export default Baner;
