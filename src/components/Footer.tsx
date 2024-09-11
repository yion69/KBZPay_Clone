import { Facebook, Home, Instagram, LayoutGrid, Linkedin, MessageCircleMore, Twitter, UserRound, Youtube } from "lucide-react";
import {Link} from 'react-router-dom';

export function FooterDesktop () {
    return (
        <div className="flex w-full h-full bg-zinc-950 text-zinc-400">
        </div>
    )
}

export function Footer () {
     return(
        <>
            <div className="fixed bottom-0 grid md:grid lg:hidden grid-cols-4 grid-rows-1 w-full h-[4.5rem] bg-zinc-950 text-zinc-400">
                <Link to="/Mobile" className="flex flex-col place-items-center place-content-center size-full focus:text-white">
                    <Home />
                    <p>Home</p>
                </Link>
                <Link to="/LifePage" className="flex flex-col place-items-center place-content-center focus:text-white">
                    <LayoutGrid />
                    <p>Life</p>
                </Link>
                <Link to="/Messages" className="flex flex-col place-items-center place-content-center focus:text-white">
                    <MessageCircleMore />
                    <p>Message</p>
                </Link>
                <Link to="/Profile" className="flex flex-col place-items-center place-content-center size-full focus:text-white">
                    <UserRound />
                    <p>Profile</p>
                </Link>
            </div>
        </>
     )
}