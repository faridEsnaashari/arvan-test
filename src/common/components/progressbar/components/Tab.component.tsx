import { TabProps } from "./tab.types";

function Tab({ children, active, duration, onClick }: TabProps) {
  return (
    <div
      className={`mb-3 ml-3 w-fit cursor-pointer cursor-pointer rounded-[2rem] border border-green-700 px-5 py-2 text-center text-sm/normal font-bold font-bold leading-normal text-gray-800 xsm:mb-0 xsm:ml-0 xsm:w-full xsm:rounded-none xsm:border-0 xsm:px-0 xsm:py-0 xsm:text-lg/normal xsm:font-black xsm:text-gray-600 ${
        active && "!bg-gradient-tab !text-white xsm:!bg-none xsm:!text-green-600"
      }`}
      onClick={onClick}
    >
      <span className="block h-fit transition-color xsm:h-16 xl:h-8">{children}</span>
      {active && (
        <div className="relative my-4 hidden w-full xsm:block">
          <div className="absolute w-full border-b-[3px] border-gray-100"></div>
          <div
            className="absolute w-full animate-fillbar border-b-[3px] border-green-700"
            style={{ animationDuration: `${duration}ms` }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default Tab;
