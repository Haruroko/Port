
"use client";
import { ArrowLongDownIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";

const Main1: React.FC = () => {
    const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100); // 약간의 지연 후 실행
    return () => clearTimeout(timer);
  }, []);
    return(
        <div className="flex flex-col items-center w-full h-screen bg-black">
            <div className="flex gap-x-18 pt-[120px] mx-auto items-center justify-center">
                <div className="flex gap-x-[70px] items-center">
                    <p className="text-white font-light text-2xl">Responsibility</p>
                    <div className="max-w-[200px] w-[200px] bg-white h-[1px]"/>
                    <p className="text-white font-light text-2xl">thoughtful</p>
                </div>
                <div className="w-1.5 h-1.5 bg-white rounded-full"/>
                <div className="flex gap-x-[70px] items-center">
                    <p className="text-white font-light text-2xl">altruistic</p>
                    <div className="max-w-[270px] w-[270px] bg-white h-[1px]"/>
                    <p className="text-white font-light text-2xl">tactful</p>
                </div>
            </div>
            <div className="absolute left-0 top-0 right-0 bottom-0 flex flex-col gap-y-[35px] items-center justify-center">
                <p className="text-white font-light text-7xl">Considerate Deep Thinker</p>
                <div className={`
          bg-white h-[1px]
          transition-all duration-700 ease-out
          ${show ? "w-1/3 opacity-100" : "w-0 opacity-0"}
        `}></div>
            </div>
            <ArrowLongDownIcon className="text-white w-10 h-16 absolute bottom-10 animate-bounce" strokeWidth={1} />
        </div>
    );
}

export default Main1;