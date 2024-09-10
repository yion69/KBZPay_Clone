import React, { useEffect, useState } from 'react';
import Sidebar from './ui/Sidebar';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Style from '../App.css'
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Headset, Home, Info, MonitorSmartphone, Search, Settings, Settings2, User} from 'lucide-react';
import { Link } from 'react-router-dom';


type accountT = {
    user_name: String,
    user_telephone: number,
    user_picture: Blob | undefined
}

//could process blob data from backend if there were any ToT
async function processImage(img:Blob | undefined) {

    const request = await fetch('src/assets/profileone.jpg');
    const response = await request.blob();
    let blobUrl = null;

    try {
        if(img === undefined) {
            blobUrl = URL.createObjectURL(response);
        } else {
            blobUrl = URL.createObjectURL(img);
        }
    } catch (e) {
        console.error(e);
    }

    return blobUrl;
}

function Account(props: accountT) {
    return (
        <NavigationMenu  className='bg-zinc-950'>
            <NavigationMenuList className='bg-zinc-950'>
                <NavigationMenuItem  className='bg-zinc-950'>
                    <NavigationMenuTrigger className='flex items-center justify-center bg-zinc-950'>
                        <User />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className='bg-zinc-950'>
                        <div className='w-[275px] h-[100px] flex items-center p-2 gap-2 text-zinc-300 bg-zinc-950'>
                            <img src="src\assets\profileone.jpg" alt="profile-picture" className='h-full my-1 rounded-md border-2 border-zinc-700' />
                            <div className='w-full h-full border-y-2 border-zinc-800 bg-zinc-900 '>
                                <p className='w-full px-2'>Name: {props.user_name}</p>
                                <p className='w-full px-2 text-sm'>Number: 09{props.user_telephone}</p>
                            </div>
                        </div>
                        <NavigationMenuLink>
                            <div className='grid grid-cols-2 h-8 pb-1 w-full text-zinc-500 text-xs'>
                                <a href="#" className='flex items-center justify-center hover:text-zinc-300 transition-all'>
                                    <Settings2 />
                                    Account Setting
                                </a>
                            </div>
                        </NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default function Navbar() {
    let tempImg = processImage(undefined);
    const [user, setUser] = useState<accountT>({
        user_name: "yion",
        user_telephone: 5190175,
        user_picture: undefined,
    });
    
    return ( 
        <div className='h-20 w-full px-4 bg-zinc-950 text-white dark:text-black font-body
                        flex items-center'
        >
            <h3 className='h-10 md:h-11 lg:h-full w-1/4 md:w-3/6 lg:w-1/6 text-xl md:text-3xl lg:text-2xl
                            flex place-items-center place-content-start lg:place-content-center'
            >
                <p>KBZPay</p>
            </h3>
            
            <ul className='hidden md:hidden lg:grid grid-cols-4 w-2/6 h-full mx-auto'>
                <li className='flex items-center justify-center'>
                    <Link className='flex items-center justify-center h-1/2 w-11/12 gap-2 rounded-full 
                                  hover:scale-110 hover:bg-zinc-900 transition-all' to="/">
                        <Home />
                        Home
                    </Link>
                </li>
                <li className='flex items-center justify-center'>
                    <a className='flex items-center justify-center h-1/2 w-11/12 gap-2 rounded-full 
                                  hover:scale-110 hover:bg-zinc-900 transition-all' href="#">
                        <Info />
                        About
                    </a>
                </li>
                <li className='flex items-center justify-center'>
                    <a className='flex items-center justify-center h-1/2 w-11/12 gap-2 rounded-full 
                                  hover:scale-110 hover:bg-zinc-900 transition-all' href="#">
                        <Headset />
                        Contact
                    </a>
                </li>
                <li className='flex items-center justify-center'>
                    <Link className='flex items-center justify-center h-1/2 w-11/12 gap-2 rounded-full 
                                  hover:scale-110 hover:bg-zinc-900 transition-all' to="/Demo">
                        <MonitorSmartphone />
                        Demo
                    </Link>
                </li>
            </ul>
            <div className='hidden md:hidden lg:flex items-center justify-center h-full mx-2'>
                <Account {...user} />
            </div>
            <div className='flex w-3/4 md:w-3/4 lg:w-1/6 border-2 border-zinc-900 rounded-lg'>
                <Input 
                    id='navbar-input'
                    placeholder='Search...' 
                    className='border border-zinc-800 rounded-r-none bg-zinc-900 focus-visible:ring-0 focus-visible:ring-offset-0   ' 
                />
                <Button className='border border-zinc-800 rounded-l-none rounded-r-md text-zinc-400'><Search/></Button>
            </div>
        </div>
     );
}
