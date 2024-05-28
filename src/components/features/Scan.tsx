import { Scanner } from "@yudiel/react-qr-scanner";
import { Album, Flashlight, Images } from "lucide-react";

export default function Scan () {
    
    return(
        <div className=" h-[90dvh] w-full bg-zinc-950">
            <div className="grid grid-rows-[70%,30%] w-full h-2/3 mx-auto my-20">
                <div>

                </div>
                <div className="flex place-items-center place-content-center mt-10">
                    <button title="btnFlash" type="button" className="flex place-content-center place-items-center size-20 mx-10 rounded-full bg-zinc-900 bg-opacity-70 text-zinc-300">
                        <Flashlight size={45}/>
                    </button>
                    <button title="btnFlash" type="button" className="flex place-content-center place-items-center size-20 mx-10 rounded-full bg-zinc-900 bg-opacity-70 text-zinc-300">
                        <Images size={45}/>
                    </button>
                </div>
            </div>
        </div>
    )
}