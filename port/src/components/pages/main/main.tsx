
"use client";
import { ArrowLongDownIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";

const Main1: React.FC = () => {
    const [show, setShow] = useState(false);
    const [text, setText] = useState(false);
    const textClass = "text-black font-light text-base lg:text-2xl md:max-w-fit max-w-[100px] w-full text-center";
  useEffect(() => {
    const timer = setTimeout(() => {
        setShow(true), 300
    });
    const timers = setTimeout(() => {
        setText(true), 1000
    });
    return () => {
        clearTimeout(timer);
        clearTimeout(timers);
    }
  }, []);
    return(
        <div className="flex flex-col items-center w-full h-screen bg-white p-4 md:p-6 lg:p-10 justify-between">
            <div className={`flex md:flex-row flex-col w-full gap-y-5 gap-x-6 lg:gap-x-18 pt-10 md:pt-[120px] mx-auto items-center justify-center transition-all duration-700 ease-out ${show ? "opacity-100" : "opacity-0"}`}>
                <div className="flex gap-x-5 lg:gap-x-[40px] max-w-[500px] w-full items-center justify-between">
                    <p className={textClass}>Responsibility</p>
                    <div className="max-w-[200px] w-full bg-black h-[1px]"/>
                    <p className={textClass}>thoughtful</p>
                </div>
                <div className="min-w-1.5 min-h-1.5 bg-black rounded-full"/>
                <div className="flex gap-x-5 lg:gap-x-[40px] max-w-[500px] w-full items-center justify-between">
                    <p className={textClass}>altruistic</p>
                    <div className="max-w-[200px] md:max-w-[270px] w-full bg-black h-[1px]"/>
                    <p className={textClass}>tactful</p>
                </div>
            </div>
            <div className="md:absolute left-0 top-0 right-0 bottom-0 flex flex-col gap-y-6 md:gap-y-[35px] items-center justify-center">
                <p className={`text-black font-light text-2xl sm:text-4xl md:text-5xl lg:text-7xl transition-all duration-[3000ms] east-in ${text ? "opacity-100" : "opacity-0"}`}>Considerate Deep Thinker</p>
                <div className={`bg-black h-[1px] transition-all duration-700 ease-out ${show ? "w-1/2 md:w-1/3 opacity-100" : "w-0 opacity-0"}`}/>
            </div>
            <ArrowLongDownIcon className={`text-black w-10 h-16 md:absolute bottom-10 animate-bounce`} strokeWidth={1} />
        </div>
    );
}

export default Main1;