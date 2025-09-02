"use client"
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { menuList } from "./menulist";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

export const Menu: React.FC = () => {
    const [click, setClick] = useState<boolean>(false);
    return (
        <div className="fixed bottom-10 right-10">
            <div
                className="w-16 h-16 rounded-full bg-white shadow-2xl border border-neutral-200 cursor-pointer relative z-20 flex flex-col items-center justify-center"
                onClick={() => setClick(!click)}
            >
                <XMarkIcon className={twMerge(classNames("w-6 h-6 transition-all ease-in-out duration-300 rotate-0 absolute", {
                    ["rotate-360 opacity-0"]: !click
                }))} />
                <Bars3Icon className={twMerge(classNames("w-6 h-6 transition-all ease-in-out duration-300 rotate-0 absolute", {
                    ["rotate-360 opacity-0"]: click
                }))} />
                {menuList.map((data, index) => {
                    return (
                        <div
                            style={{ top: `-${48 * (index + 1)}px` }}
                            className={twMerge(classNames(
                                "absolute z-10 w-10 h-10 bg-white shadow-lg rounded-full transition-all ease-in-out duration-300 flex items-center justify-center",
                                {
                                    ["opacity-0 !top-0 pointer-events-none"]: !click // ✅ 닫혔을 땐 클릭 불가
                                }
                            ))}
                            onClick={() => { click ? window.open(`${data.link}`) : null }}
                        >
                            <Image src={data.logo} width={30} height={30} alt="github" />
                        </div>
                    )
                })
                }
            </div>
        </div>
    );
}

export default Menu;