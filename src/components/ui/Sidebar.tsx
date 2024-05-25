import {useState} from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { AlignJustify, ChevronRight, QrCode, User, UserCog, BellDot, FileClock, CircleHelp, LayoutGrid, Settings, LogOut } from "lucide-react";
import { Separator } from "./separator";

function Sidebar () {

    let [isActive, setIsActive] = useState(false);
    let handleToggle = () => {
        let sidebar = document.querySelector('.sidebar') as HTMLDivElement;
        isActive ? sidebar.style.transform = "translateX(100%)" : sidebar.style.transform = "translateX(0px)";
        setIsActive( prev => prev = !prev);
    }
    
    return(
        <>
            <button 
                    className='size-10 block md:block lg:hidden'
                    title='sidebar-button'
                    type='button'
                    onClick={handleToggle}
                >
                    <AlignJustify size={35} className='mx-auto my-auto'/>
            </button>
            <div 
                className='sidebar fixed h-full w-2/3 top-0 right-0 bg-zinc-900 font-body
                            transition-all duration-200 translate-x-full
                            grid grid-cols-1 grid-rows-[10%,10%,70%,10%]'
            >
                <div className="h-full flex place-items-center text-lg border-b-[1px] border-zinc-600 font-body">
                    <button title="sidebar-close" type="button" onClick={handleToggle} className="size-10 md:size-12 mx-3 md:mx-5 my-auto p-1 rounded-md shadow-md">
                        <AlignJustify size={30} className="size-7 md:size-12"/>
                    </button>
                    <p className="mx-4 text-base md:text-2xl">Sidebar</p>
                </div>
                <div className="grid grid-cols-[25%,55%,15%,5%] place-items-center p-1 border-b-[1px] border-zinc-600">
                    <img src="src\assets\profileone.jpg" alt="profile" className="bg-zinc-300 size-14 md:size-20 border-2 border-zinc-500 rounded-full" />
                    <div className="h-full w-full ml-5 md:ml-0 grid grid-cols-[60%,40%] place-items-center ">
                        <div>
                            <p className="text-xs md:text-lg">Yion</p>
                            <p className="text-sm md:text-xl">09-5190175</p>
                        </div>
                        <QrCode className="ms-2 md:ms-5 mr-auto size-7 md:size-12"/>
                    </div>
                    <button title="sidebar-profile" type="button" className="ms-auto">
                        <ChevronRight size={25} className="size-7 md:size-12"/>
                    </button>
                </div>
                <ul className="grid grid-rows-6 px-5 py-10">
                    <li>
                        <div className="flex text-lg space-x-5 font-semibold mb-4">
                            <LayoutGrid  />
                            <a href="#">
                                Home
                            </a>
                        </div>
                        <Separator />
                    </li>
                    <li >
                        <div className="flex text-lg space-x-5 font-semibold mb-4">
                            <Settings />
                            <a href="#">
                                Setting
                            </a>
                        </div>
                        <Separator />
                    </li>
                    <li >
                        <div className="flex text-lg space-x-5 font-semibold mb-4">
                            <CircleHelp />
                            <a href="#">
                                Support
                            </a>
                        </div>
                        <Separator />
                    </li>
                    <li className=" row-span-2">
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    <div className="flex space-x-5 text-lg">
                                        <UserCog />
                                        <p>Manage Account</p>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <a href="#" className="flex ms-5 place-items-center space-x-3">
                                        <BellDot/>
                                        <p>Notifications</p>
                                    </a>
                                </AccordionContent>
                                <AccordionContent>
                                    <a href="#" className="flex ms-5 place-items-center space-x-3">
                                        <User/>
                                        <p>Profile</p>
                                    </a>
                                </AccordionContent>
                                <AccordionContent>
                                    <a href="#" className="flex ms-5 place-items-center space-x-3">
                                        <FileClock/>
                                        <p>History</p>
                                    </a>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </li>
                </ul>
                <div className="w-full flex place-content-center">
                    <Button variant="destructive" size="xl"><LogOut /> Log Out</Button>
                </div>
            </div>
        </>
    )
}

export default Sidebar;