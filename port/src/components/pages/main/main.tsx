
"use client";
import { ArrowLongDownIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";

const Main1: React.FC = () => {
    const [show, setShow] = useState(false);
    const [text, setText] = useState(false);
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
        <div className="flex flex-col items-center w-full h-screen bg-white">
            <div className={`flex gap-x-18 pt-[120px] mx-auto items-center justify-center transition-all duration-700 ease-out ${show ? "opacity-100" : "opacity-0"}`}>
                <div className="flex gap-x-[70px] items-center">
                    <p className="text-black font-light text-2xl">Responsibility</p>
                    <div className="max-w-[200px] w-[200px] bg-black h-[1px]"/>
                    <p className="text-black font-light text-2xl">thoughtful</p>
                </div>
                <div className="w-1.5 h-1.5 bg-black rounded-full"/>
                <div className="flex gap-x-[70px] items-center">
                    <p className="text-black font-light text-2xl">altruistic</p>
                    <div className="max-w-[270px] w-[270px] bg-black h-[1px]"/>
                    <p className="text-black font-light text-2xl">tactful</p>
                </div>
            </div>
            <div className="absolute left-0 top-0 right-0 bottom-0 flex flex-col gap-y-[35px] items-center justify-center">
                <p className={`text-black font-light text-7xl transition-all duration-[3000ms] east-in ${text ? "opacity-100" : "opacity-0"}`}>Considerate Deep Thinker</p>
                <div className={`bg-black h-[1px] transition-all duration-700 ease-out ${show ? "w-1/3 opacity-100" : "w-0 opacity-0"}`}/>
            </div>
            <ArrowLongDownIcon className={`text-black w-10 h-16 absolute bottom-10 animate-bounce`} strokeWidth={1} />
        </div>
    );
}

export default Main1;