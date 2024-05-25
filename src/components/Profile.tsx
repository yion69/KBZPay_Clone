import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { ChevronRight, ChevronsRight, CircleHelp, FileBadge, Globe, LockKeyhole, MapPinned, Pencil, QrCode, Rocket, Settings, Share   } from "lucide-react";
import ProfileBanner1 from '../assets/profile-banner-1.svg'
import { Button } from "./ui/button";


interface Verify_Props {
    name: string,
    phone_number: string,
    status: boolean,
    level: number,
}

const BadgeAccountStatus = (props:Verify_Props) => {
    const [name, setName] =useState<string>(props.name);
    const [phoneNumber, setPhoneNumber] = useState<string>(props.phone_number);
    const [status, setStatus] = useState<boolean>(props.status);
    const [level, setLevel] = useState<number>(props.level);
    const [skeleton, setSkeleton] = useState<boolean>(true);
 
    useEffect(() => {
        const timer = setTimeout(() => {
            setSkeleton(false)
        },1500);

       return () => clearTimeout(timer);
    },[])

    return(
        <div className="grid grid-rows-3 grid-cols-[60%,40%] grid-flow-row h-28 w-56">
            {skeleton ? 
                <>
                    <Skeleton className="col-span-2 place-self-center h-4/6 w-[90%] mx-auto -mb-3 rounded-sm bg-zinc-800" />
                    <Skeleton className="col-span-2 place-self-center h-4/6 w-[90%] mx-auto rounded-sm bg-zinc-800" />
                    <Skeleton className="h-8 w-[120px] ml-auto mr-1 rounded-sm bg-zinc-800" />
                    <Skeleton className="h-8 w-[75px] mr-auto ml-1 rounded-sm bg-zinc-800" /> 
                </>
                    :
                <>
                    <h3 className="col-span-1 place-self-center h-5/6 w-[90%] mx-auto p-1 text-zinc-100 text-xl font-body">
                        {name}
                    </h3>
                    <div className="row-span-2 col-span-1 size-8 my-[5px] bg-zinc-700 text-zinc-100 rounded-lg border-2 border-zinc-600">
                        <a href="#" title="profile_edit_link" className="flex place-content-center place-items-center size-full">
                            <Pencil size={20}/>
                        </a>
                    </div>
                    <div className=" place-self-center h-5/6 w-[90%] mx-auto px-1 text-zinc-100 text-xl font-thin font-body">
                        {phoneNumber}
                    </div>
                    <div className="row-span-1 col-span-1 h-8 w-[120px] ml-auto mr-1 p-1 text-center font-semibold rounded-sm bg-zinc-700 text-zinc-300">
                        { status ? <>Verified</> : <>Not Verified</>}
                    </div>
                    <div className=" h-8 w-[75px] mr-auto ml-1 p-1 text-center font-semibold rounded-sm bg-zinc-300 text-zinc-900">
                        <span className="font-extrabold">LV </span>{level}
                    </div>
                </>
            }
        </div>
    )
}

const Banner = () => {
    const [bannerBackground, SetBannerBackground] = useState(ProfileBanner1);
    return(
        <div className="grid grid-cols-[70%,30%]
                        w-[90%] h-full mx-auto ps-5 rounded-lg" style={{backgroundImage: `url(${ bannerBackground })`, backgroundSize: 'cover' }}
        >
            {/* <div className="flex place-items-center place-content-center text-zinc-400 ">
                <ShieldPlus size={60} />
            </div> */}
            <div className="flex flex-col place-content-center text-zinc-200 font-body font-semibold">
                <h3 className="text-xl">Upgrade your account</h3>
                <p className="text-zinc-400">To enjoy more features!</p>
            </div>
            <div className="flex place-items-center place-content-end p-5 text-zinc-400 ">
                <a href="#" title="account-upgrade" className="active:text-zinc-100 active:scale-110">
                    <ChevronsRight size={35} />
                </a>
            </div>
        </div>
    )
}

const FirstSection = () => {
    //User's Qr code, Account Upgrade, Nearby Map, Limits ad Fees 
    return(
        <div className="grid grid-rows-3
                        w-[90%] h-full mx-auto bg-zinc-900 rounded-lg"
        >
            <div className="font-body text-zinc-300">
                <a href="#" className="grid grid-cols-[20%,60%,20%] place-items-center place-content-center h-full w-full">
                    <QrCode size={30} />
                    <p className="mr-auto text-lg">My QR</p>
                    <ChevronRight className="text-zinc-500" />
                </a>
            </div>
            <div className="font-body text-zinc-300">
                <a href="#" className="grid grid-cols-[20%,60%,20%] place-items-center place-content-center h-full w-full">
                    <MapPinned size={30} />
                    <p className="mr-auto text-lg">Nearby Map</p>
                    <ChevronRight className="text-zinc-500" />
                </a>
            </div>
            <div className="font-body text-zinc-300">
                <a href="#" className="grid grid-cols-[20%,60%,20%] place-items-center place-content-center h-full w-full">
                    <FileBadge size={30} />
                    <p className="mr-auto text-lg">Limits and Fees</p>
                    <ChevronRight className="text-zinc-500" />
                </a>
            </div>
        </div>
    )
}

const SecondSection = () => {
    return (
        <div className="grid grid-rows-6 w-[90%] h-full mx-auto bg-zinc-900 rounded-lg font-body text-zinc-300">
            <div className="">
                <a href="#" className="grid grid-cols-[20%,60%,20%] place-items-center place-content-center h-full w-full">
                    <LockKeyhole size={30} />
                    <p className="mr-auto text-lg">PIN Management</p>
                    <ChevronRight className="text-zinc-500" />
                </a>
            </div>
            <div className="">
                <a href="#" className="grid grid-cols-[20%,60%,20%] place-items-center place-content-center h-full w-full">
                    <Globe size={30} />
                    <p className="mr-auto text-lg">Choose Language</p>
                    <ChevronRight className="text-zinc-500" />

                </a>
            </div>
            <div className="">
                <a href="#" className="grid grid-cols-[20%,60%,20%] place-items-center place-content-center h-full w-full">
                    <CircleHelp size={30} />
                    <p className="mr-auto text-lg">Help & Feedback</p>
                    <ChevronRight className="text-zinc-500" />
                </a>
            </div>
            <div className="">
                <a href="#" className="grid grid-cols-[20%,60%,20%] place-items-center place-content-center h-full w-full">
                    <Share size={30} />
                    <p className="mr-auto text-lg">Share App</p>
                    <ChevronRight className="text-zinc-500" />
                </a>
            </div>
            <div className="">
                <a href="#" className="grid grid-cols-[20%,60%,20%] place-items-center place-content-center h-full w-full">
                    <Settings size={30} />
                    <p className="mr-auto text-lg">Settings</p>
                    <ChevronRight className="text-zinc-500" />
                </a>
            </div>
            <div className="">
                <a href="#" className="grid grid-cols-[20%,60%,20%] place-items-center place-content-center h-full w-full">
                    <Rocket size={30} />
                    <p className="mr-auto text-lg">About KBZPay Version</p>
                    <ChevronRight className="text-zinc-500" />
                </a>
            </div>

        </div>
    )
}

const ThirdSection = () => {
    return (
        <div className="w-[90%] h-full mx-auto bg-zinc-900 rounded-lg">
            <Button variant={"outline"} size={"xl"} className="size-full bg-zinc-300 font-semibold text-lg">Log Out</Button>
        </div>
    )
}

export default function Profile () {
    return(
        <div className="h-[120vh] w-full bg-zinc-950">
            <div className="flex place-items-center h-[20%] w-full bg-zinc-950 ">
                <div className="size-[100px] mx-5">
                    <img src="src\assets\profileone.jpg" alt="Profile" className="my-1 border-4 border-zinc-800 rounded-xl" />
                </div>
                <div className="flex place-items-center place-content-start w-2/3 h-full font-body">
                    <BadgeAccountStatus name="Thuta Naing" phone_number="09-5190175" status={true} level={2} />
                </div>
            </div>
            <div className="h-[10%] w-full mb-5">
                <Banner />
            </div>
            <section className="h-[15%] w-full mb-5">
                <FirstSection />
            </section>
            <section className="h-[35%] w-full mb-5">
                <SecondSection />
            </section>
            <section className="h-[5%] w-full ">
                <ThirdSection />
            </section>
        </div>
    )
}
