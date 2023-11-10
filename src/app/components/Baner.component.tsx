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
      <div className="py-[3.75%] pl-[47.08%] pr-1/5.26">
        <span className="text-10 font-bold leading-14">{headingText}</span>
        <p className="mt-6 text-base font-medium leading-[1.625rem]">{headingDescriptionText}</p>
        <Button className="coursor-pointer mt-12 flex rounded-lg bg-white px-6 py-3 text-green-900">
          <span className="ml-2 text-sm leading-4 text-green-900">{buttonText}</span>
          <div className="h-4 w-4">
            <ArrowIcon />
          </div>
        </Button>
      </div>
    </div>
  );
}

export default Baner;
