import { useEffect, useState } from "react";
import { CircleChevronLeft } from "lucide-react";
import QRCode from "react-qr-code";

type TUserinformation = {
    username: string,
    phone_number: string,
}

export default function Receive (props:TUserinformation) {
    
    const [userInformation, setUserInformation] = useState<TUserinformation>({
                                        username: props.username,
                                        phone_number: props.phone_number,    
                                    });
    const [val, setVal] = useState<string>("Hello World");
    useEffect(() => {
        setVal( _prev => _prev = Math.random().toString())
        //could use ph num instead here 
    }, [])
    
    return(
        <div className='h-[90dvh] w-full bg-zinc-950 text-zinc-400'>
            <a href="/" className='text-zinc-300' title='back'><CircleChevronLeft size={30} className='mx-5 mt-5'/></a>
            <div className='grid grid-rows-[20%,60%,20%] w-full h-2/3'>
                <div className="flex place-items-end place-content-center">
                    <h3 className="text-xl font-body font-semibold">Scan to pay me</h3>
                </div>
                <div className="flex place-content-center place-items-center size-full">
                    <QRCode 
                        value={val}
                        bgColor="#18181b"
                        fgColor="#d4d4d8"
                        className="h-5/6"
                    />
                </div>
                <div className="flex flex-col place-items-center place-content-center size-full font-body text-zinc-200 text-2xl space-y-3">
                    <button title="btnSaveImage" type="button" className="w-32 h-14 text-base text-blue-400 my-5">
                        Save Image
                    </button>
                    <h3>{userInformation.username}</h3>
                    <p>{userInformation.phone_number}</p>
                </div>
            </div>
        </div>
    )
}