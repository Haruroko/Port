"use client"

import Image from "next/image";
import { Projectlist } from "./projectlist/projectlist";
export const Project = () => {
    return (
        <div className="w-full h-auto flex sm:flex-row flex-col p-4 md:p-6 xl:p-10 gap-x-10 lg:gap-x-5 xl:gap-x-28 justify-start">
            <div className="flex flex-col w-auto items-start h-auto">
                <div className="flex items-center gap-x-4 w-full">
                    <h2 className="text-xl lg:text-2xl xl:text-3xl">참여한 프로젝트</h2>
                    <div className="h-2 w-2 bg-black rounded-full" />
                </div>
                {/* 프로젝트 박스 */}
                <div className="grid grid-cols-2 w-full gap-x-40 gap-y-20 mt-6 pl-4">
                    {Projectlist.map((data: any, index: any) => {
                        return (
                            <div key={index} className="flex flex-col w-full gap-y-2">
                                <div className="w-10 h-1 bg-black"/>
                                <div className="flex flex-row items-center gap-x-2 mt-2">
                                    <h3 className="text-lg lg:text-xl xl:text-3xl">{data.title}</h3>
                                    {data.image && <Image src={data.image} alt={data.title} width={40} height={40} className="rounded-full" />}
                                </div>
                                <p className="text-sm lg:text-base xl:text-lg"> · 개발기간 : {data.period}</p>
                                <p className="text-sm lg:text-base xl:text-lg"> · 개발인원 : {data.people}</p>
                                <p className="text-sm lg:text-base xl:text-lg"> · 간단 설명 : {data.description}</p>
                                {data.video && <iframe 
                                    src={data.video} 
                                    width={600} 
                                    height={360} 
                                    className="rounded-lg"
                                    title="YouTube video player"
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />  
                                }
                                <Image
                                    src={"/logo/github.png"}
                                    alt="GitHub"
                                    width={40}
                                    height={40}
                                    className="rounded-full cursor-pointer mt-4 ml-4"
                                    onClick={() => window.open(data.githubLink, "_blank")}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Project;