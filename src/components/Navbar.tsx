import React, { useState } from 'react';
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
import { Search} from 'lucide-react';

function Navbar() {
    return ( 
        <div className='h-20 w-full bg-zinc-950 text-white dark:text-black font-body
                        flex place-items-center'
        >
            <h3 className='h-10 md:h-11 lg:h-full w-1/4 md:w-3/6 lg:w-1/6 ms-5 space-x-1 md:space-x-7 lg:space-x-5 text-xl md:text-3xl lg:text-2xl
                            flex place-items-center place-content-start lg:place-content-center'
            >
                <p>KBZPay</p>
            </h3>
            
            <div className='hidden md:hidden lg:block'>
                <NavigationMenu >
                    <NavigationMenuList >
                        <NavigationMenuItem >
                            <NavigationMenuTrigger className='bg-zinc-950 text-base'>Manage Account</NavigationMenuTrigger>
                            <NavigationMenuContent className='bg-zinc-950'>
                                <ul className='w-[400px] grid grid-cols-2 grid-rows-3 text-white py-5 px-2'>
                                    <li className='row-span-3 px-5'>
                                        <NavigationMenuLink>
                                            <img src="src\assets\profileone.jpg" alt="profile-picture" className='my-1 rounded-md border-2 border-zinc-700' />
                                            <p className='mt-2 ml-2 text-lg text-zinc-400'>Yion</p>
                                            <p className='ml-2 text-base text-zinc-500'> 09-5190-175</p>
                                        </NavigationMenuLink>
                                    </li>
                                    <li className='px-4 pb-3'>
                                        <a href="#">View Profile</a>
                                        <p className='text-sm text-zinc-500'>View or edit your profile page</p>
                                    </li>
                                    <li className='px-4'>
                                        <a href="#">Notifications</a>
                                        <p className='text-sm text-zinc-500'>Check to see your inbox for news</p>
                                    </li>
                                    <li className='px-4 pt-1'>
                                        <a href="#">History</a>
                                        <p className='text-sm text-zinc-500'>Click to see your history of transactions</p>                                    
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className='mx-5 hidden md:hidden lg:block'>
                <a href="#">Setting</a>
            </div>
            <div className='mx-5 hidden md:hidden lg:block'>
                <a href="#">Support</a>
            </div>
            {/* <div className='w-[25%] ms-auto mr-10 hidden md:hidden lg:flex'> */}
            <div className='flex w-3/4 mt-1 ml-auto mr-3 border-2 border-zinc-900 rounded-lg'>
                <Input 
                    id='navbar-input'
                    placeholder='Search...' 
                    className='border border-zinc-800 rounded-r-none bg-zinc-900 focus-visible:ring-0 focus-visible:ring-offset-0   ' 
                />
                <Button className='border border-zinc-800 rounded-l-none rounded-r-md text-zinc-400'><Search/></Button>
            </div>
            {/* <div id='sideBar' className='z-10 ms-auto mr-5 block md:block lg:hidden'>
                <Sidebar /> 
            </div> */}
        </div>
     );
}

export default Navbar ;