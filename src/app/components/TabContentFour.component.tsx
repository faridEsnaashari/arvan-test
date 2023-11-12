import ContentImage4 from "@images/contentImage4.svg";
import { liTexts, linkText, paraf1Text } from "../texts";
import Link from "next/link";
import { ArrowIcon, CircleWithTickIcon } from "@/common/components/svg-icons";
import Image from "next/image";
import { Button } from "@/common/components/forms";

function TabContentFour() {
  return (
    <article className="flex flex-wrap justify-between gap-16 pt-16 sm:flex-nowrap">
      <div className="w-full sm:w-1/2 sm:pl-3">
        <p className="mb-16 text-sm font-medium leading-[1.875rem] tracking-[0.0225rem] text-gray-800 xsm:text-4.5">
          {paraf1Text}
        </p>
        <div className="mb-12">
          <ul>
            {liTexts.map((liText, index) => (
              <li
                key={index}
                className="flex items-center gap-4 text-sm/normal font-bold leading-7 tracking-[0.0.125rem] text-gray-900 xsm:text-base/normal"
              >
                <div className="h-5 w-5 text-green-600">
                  <CircleWithTickIcon />
                </div>
                <span>{liText}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden w-fit cursor-pointer text-base/normal font-bold tracking-[0.02875rem] before:h-6 before:w-0.5 before:bg-green-700 before:content-[''] xsm:flex">
          <Link className="mx-3 text-green-600" href="/">
            {linkText}
          </Link>
          <div className="h-6 w-6 text-green-700">
            <ArrowIcon />
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2">
        <Image src={ContentImage4} alt="content image1" />
      </div>
      <Button className="coursor-pointer mt-4 flex w-full justify-center rounded-lg border-2 border-green-600 px-6 py-3 font-bold text-green-600 xsm:hidden">
        <span className="text-base/normal tracking-[0.02875rem]">{linkText}</span>
      </Button>
    </article>
  );
}

export default TabContentFour;
