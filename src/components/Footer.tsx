import { Facebook, Github, Home, Instagram, LayoutGrid, Linkedin, MessageCircleMore, Twitter, UserRound, Youtube } from "lucide-react";
import {Link} from 'react-router-dom';

interface clickableIconI {
    icon_link: string,
    icon_svg: JSX.Element,
    icon_text?: string | null
}

const ClickableIcon = (props:clickableIconI) => {
    return(
        <a href={props.icon_link} className="hover:scale-110 hover:translate-y-2 transition-all duration-300">
            {props.icon_svg}
            { props.icon_text && 
                <span>{props.icon_text}</span>
            }
        </a>
    )
}

export function FooterDesktop () {
    return (
        <div className="grid grid-cols-2 w-full h-full bg-zinc-950 border-t border-zinc-600">
            <div className="relative flex items-center justify-center w-full h-full font-light text-zinc-200">
                <img src="/logo.png" className="mx-10 size-8" alt="KBZPay Logo"/>
                <ul className="flex items-center justify-center w-auto h-full gap-10">
                    <li className="footer-links">
                        <Link to="/" className="">KBZ Bank</Link>
                    </li>
                    <li className="footer-links">
                        <Link to="/" className="">Home</Link>
                    </li>
                    <li className="footer-links">
                        <Link to="/" className="">About Us</Link>
                    </li>
                    <li className="footer-links">
                        <Link to="/" className="">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="flex items-center justify-center h-full w-full text-zinc-200">
                <div className="flex items-center justify-center gap-8 w-1/2 h-full">
                    <ClickableIcon icon_link="smth.com" icon_svg={<Facebook strokeWidth={1.5}/>} />
                    <ClickableIcon icon_link="smth.com" icon_svg={<Twitter strokeWidth={1.5}/>} />
                    <ClickableIcon icon_link="smth.com" icon_svg={<Youtube strokeWidth={1.5}/>} />
                    <ClickableIcon icon_link="smth.com" icon_svg={<Linkedin strokeWidth={1.5}/>} />
                    <ClickableIcon icon_link="smth.com" icon_svg={<Github strokeWidth={1.5}/>} />
                </div>
                <div className="flex items-center w-1/2 h-full">
                    <a href="#" className='flex items-center justify-end w-full h-full'>
                        <img src="/assets/badge-appstore.svg" className="h-full w-9/12" alt="download" />
                    </a>
                    <a href="#" className='flex items-center justify-start w-full h-full'>
                        <img src="/assets/badge-playstore.svg" alt="download" />
                    </a>
                </div>
            </div>
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