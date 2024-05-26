import { Facebook, Home, Instagram, LayoutGrid, Linkedin, MessageCircleMore, Twitter, UserRound, Youtube } from "lucide-react";
import {Link} from 'react-router-dom';

function Footer () {
     return(
        <>
            <div className="fixed bottom-0 grid md:grid lg:hidden grid-cols-4 grid-rows-1 w-full h-[4.5rem] bg-zinc-950 text-zinc-400">
                <Link to="/" className="flex flex-col place-items-center place-content-center size-full focus:text-white">
                    <Home />
                    <p>Home</p>
                </Link>
                <Link to="/Market" className="flex flex-col place-items-center place-content-center focus:text-white">
                    <LayoutGrid />
                    <p>Market</p>
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
            <div className="hidden md:hidden lg:flex w-full h-24 bg-zinc-950 text-zinc-400">
                <div className="grid grid-cols-[10%,40%,50%] grid-rows-1 h-full w-4/6 mx-auto">
                    <div className="place-content-center">
                        <img src="/logo.png" alt="KBZPay" className="h-12 mx-auto"/>
                    </div>
                    <div className="font-body font-light">
                        <ul className="grid grid-cols-5 place-content-center place-items-center h-full"> 
                            <Link to='/' className="hover:scale-110 hover:text-zinc-100 transition-all duration-200 hover:font-normal">
                                <li>Home</li>
                            </Link>
                            <Link to='/Profile' className="hover:scale-110 hover:text-zinc-100 transition-all duration-200 hover:font-normal">
                                <li>About</li>
                            </Link>
                            <Link to='/Market' className="hover:scale-110 hover:text-zinc-100 transition-all duration-200 hover:font-normal">
                                <li>Market</li>
                            </Link>
                            <Link to='/Messages' className="hover:scale-110 hover:text-zinc-100 transition-all duration-200 hover:font-normal">
                                <li>Message</li>
                            </Link>
                            <Link to='/Profile' className="hover:scale-110 hover:text-zinc-100 transition-all duration-200 hover:font-normal">
                                <li>Profile</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="flex place-items-center place-content-end h-14 my-auto px-5 space-x-5">
                        <a href="#" className="hover:scale-110 hover:text-zinc-100 transition-all duration-300">
                            <Facebook />
                        </a>
                        <a href="#" className="hover:scale-110 hover:text-zinc-100 transition-all duration-300">
                            <Instagram />
                        </a>
                        <a href="#" className="hover:scale-110 hover:text-zinc-100 transition-all duration-300">
                            <Twitter />
                        </a>
                        <a href="#" className="hover:scale-110 hover:text-zinc-100 transition-all duration-300">
                            <Youtube />
                        </a>
                        <a href="#" className="hover:scale-110 hover:text-zinc-100 transition-all duration-300">
                            <Linkedin />
                        </a>
                    </div>
                </div>
            </div>
        </>
     )
}

export default Footer;