import { Home, LayoutGrid, MessageCircleMore, UserRound } from "lucide-react";
import {Link} from 'react-router-dom';

function Footer () {
     return(
        <>
            <div className="fixed bottom-0 grid md:grid lg:hidden grid-cols-4 grid-rows-1 w-full h-[4.5rem] bg-zinc-950 text-zinc-400">
                <Link to="/" className="flex flex-col place-items-center place-content-center size-full focus:text-white">
                    <Home />
                    <p>Home</p>
                </Link>
                <a href="#" className="flex flex-col place-items-center place-content-center focus:text-white">
                    <LayoutGrid />
                    <p>Apps</p>
                </a>
                <a href="#" className="flex flex-col place-items-center place-content-center focus:text-white">
                    <MessageCircleMore />
                    <p>Message</p>
                </a>
                <Link to="/profile" className="flex flex-col place-items-center place-content-center size-full focus:text-white">
                    <UserRound />
                    <p>Profile</p>
                </Link>
            </div>
            <div className="hidden md:hidden lg:grid grid-cols-4 grid-rows-1 w-full h-24 bg-zinc-950 text-zinc-400">
                <h3>This is Footer (In progress)</h3>
            </div>
        </>
     )
}

export default Footer;