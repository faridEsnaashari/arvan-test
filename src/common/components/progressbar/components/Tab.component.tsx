import { TabProps } from "./tab.types";

function Tab({ children, active, duration, onClick }: TabProps) {
  return (
    <div className="w-full cursor-pointer text-center" onClick={onClick}>
      <span
        className={`text-4.5 block h-8 font-black leading-normal tracking-[.125rem] text-gray-600 transition-color ${
          active && "!text-green-600"
        }`}
      >
        {children}
      </span>
      {active && (
        <div className="relative my-4 w-full">
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
