import { Scanner } from "@yudiel/react-qr-scanner";
import { Album, Flashlight, Images } from "lucide-react";

export default function Scan () {
    
    let stop = true;
    return(
        <div className="h-dvh w-full bg-zinc-950">
            <div className="flex flex-col w-full h-full mx-auto">
                <div className="w-full h-2/3">
                    { stop && (<Scanner onScan={()=> {stop=!stop; console.log(stop)}} />)}
                </div>
                <div className="flex justify-center items-start w-full h-1/3 p-4">
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