import ContentImage3 from "@images/contentImage3.svg";
import { liTexts, linkText, paraf1Text } from "../texts";
import Link from "next/link";
import { ArrowIcon, CircleWithTickIcon } from "@/common/components/svg-icons";
import Image from "next/image";

function TabContentThree() {
  return (
    <article className="flex justify-between gap-16 pt-16">
      <div className="w-1/2 pl-3">
        <p className="mb-16 text-4.5 font-medium leading-[1.875rem] tracking-[0.0225rem] text-gray-800">{paraf1Text}</p>
        <div className="mb-12">
          <ul>
            {liTexts.map((liText, index) => (
              <li
                key={index}
                className="flex items-center gap-4 text-base/normal font-bold leading-7 tracking-[0.0.125rem] text-gray-900"
              >
                <div className="h-5 w-5 text-green-600">
                  <CircleWithTickIcon />
                </div>
                <span>{liText}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex w-fit cursor-pointer text-base/normal font-bold tracking-[0.02875rem] before:h-6 before:w-0.5 before:bg-green-700 before:content-['']">
          <Link className="mx-3 text-green-600" href="/">
            {linkText}
          </Link>
          <div className="h-6 w-6 text-green-700">
            <ArrowIcon />
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <Image src={ContentImage3} alt="content image1" />
      </div>
    </article>
  );
}

export default TabContentThree;
