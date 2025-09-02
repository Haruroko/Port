import Image from "next/image";
import { Infolist } from "./infolist/infolist";


const Main2: React.FC = () => {
    const infoClass = "flex flex-col items-start md:min-w-[214px] sm:mt-20 text-black text-xs md:text-sm xl:text-base break-keep";
    return (
        <div className="w-full h-screen md:h-auto lg:h-screen flex sm:flex-row flex-col py-10 p-4 md:p-6 xl:p-10 gap-x-10 lg:gap-x-5 xl:gap-x-28 justify-start">
            <div className="flex flex-col w-auto items-start h-auto">
                <div className="flex items-center gap-x-4 w-full">
                    <h2 className="text-xl lg:text-2xl xl:text-3xl">소개</h2>
                    <div className="h-2 w-2 bg-black rounded-full"/>
                </div>
                <div className="flex flex-row sm:flex-col md:h-full w-full sm:w-auto justify-between mt-5 sm:mt-20 items-center">
                    {/* 프로필 */}
                    <div className="flex flex-col items-center w-auto">
                        <div className="w-28 h-28 md:w-40 md:h-40 xl:w-60 xl:h-60 aspect-auto relative rounded-full overflow-hidden object-cover drop-shadow-2xl">
                            <Image
                                fill
                                src={"/profile.webp"}
                                alt=""
                                className="object-cover"
                            />
                        </div>
                        <p className="text-black text-base sm:text-xl mt-4">김준서 / 21</p>
                    </div>
                    {/* 정보 */}
                    <div className={infoClass}>
                        <p>Phone : 010-2162-1905</p>
                        <p>Mail : digyrh456789@gmail.com</p>
                        <p>Velog : @digyrh456789</p>
                        <a>GitHub : Haruroko</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-wrap gap-y-10 gap-x-10 xl:gap-x-20 lg:py-20 lg:max-w-[800px] w-auto lg:w-full overflow-y-scroll scrollbar-hide md:overflow-visible sm:mt-0 mt-10">
                {Infolist.map((data, index) => {
                    return(
                        <div className="flex flex-col items-start">
                            <h2 className="text-xl lg:text-2xl xl:text-3xl">{data.category}</h2>
                            <div className="flex flex-col gap-y-2.5 mt-2">
                                {data.list && data.list.map((data, index) => {
                                    return (
                                        <p className="ml-2">{'- ' + data}</p>
                                    );
                                })}
                            </div>
                            <div className="flex flex-col w-full gap-y-2">
                                {data.yearlist && data.yearlist.map((data, index) => {
                                    return (
                                        <div className="flex flex-col">
                                            <p className="ml-2 text-lg lg:text-xl xl:text-2xl">{data.year}</p>
                                            <div className="flex flex-col gap-y-1.5 mt-2">
                                                {
                                                    data.list && data.list.map((data, index) => {
                                                        return (
                                                            <p className="ml-4 break-all">{'- ' + data}</p>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
export default Main2;