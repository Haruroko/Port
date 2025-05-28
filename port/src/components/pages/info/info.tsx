import Image from "next/image";

const Main2: React.FC = () => {
    return (
        <div className="w-full h-screen flex p-10 gap-x-10">
            <div className="flex flex-col items-center">
                <div className="flex items-center gap-x-4 w-full">
                    <h2 className="text-3xl">MY INFO</h2>
                    <div className="h-2 w-2 bg-black rounded-full"/>
                </div>
                <div className="flex flex-col h-full justify-between mt-20">
                    {/* 프로필 */}
                    <div className="flex flex-col items-center">
                        <div className="w-60 h-60 aspect-auto relative rounded-full overflow-hidden object-cover">
                            <Image
                                fill
                                src={"https://lh5.googleusercontent.com/proxy/Esa9x8Rrm-HIqAfkD0naeSEAnbPHxLrHhq10yhmb9nrlZ3EPj4HSPAv23vHgGRy7Ej55zDPyWDyxz_XdiHCt0zigu_Vvl2prrJOM9FZQW2MOBJYBf1EESTbOY7Bc38YPA4twpcWkxOPZppVH-RWat2p_ncCg30bUnzzroKxIcW5QrB5CYGPER42_GXS1w8NVn0QmIglcC91W-0BrNzFh1NZV-Hqe"}
                                alt=""
                            />
                        </div>
                        <p className="text-black text-xl">Kim Junseo / 21</p>
                    </div>
                    {/* 정보 */}
                    <div className="flex flex-col items-start">
                        <p className="text-black text-base">Phone : 010-2162-1905</p>
                        <p className="text-black text-base">Mail : digyrh456789@gmail.com</p>
                        <p className="text-black text-base">Velog : @digyrh456789</p>
                        <p className="text-black text-base">GitHub : Haruroko</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                
            </div>
        </div>
    )
}
export default Main2;