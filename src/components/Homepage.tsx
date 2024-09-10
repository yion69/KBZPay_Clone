import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from 'embla-carousel-autoplay';
import {Bitcon, Kfc, Spotify, Dell, Grab, Shell, Starbuck, Heineken} from '../assets/Apps_Icons/IconModule.tsx'
import { ArrowRight, CircleArrowOutDownLeft, CircleArrowOutUpRight, CircleDollarSignIcon, CreditCard, Eye, EyeOff, GalleryHorizontalEnd, Gift, HandCoins, Layers, Newspaper, QrCode, ReceiptText, ScanLine, Smartphone, X } from "lucide-react";

import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer.tsx";

import "../App.css"

interface NewsCardProps {
    data: {
        Item_Name: string,
        Item_Avatar: string,
    }
}

//man this code suck I regreted asking GPT for it lmao
const NewsCard = ({data}:NewsCardProps) => {
    const [info, setInfo] = useState(data);
    return(
        <div className="flex place-items-center size-16 mx-1 text-zinc-100">
            <a href="#" title="apps" className="flex flex-col place-content-center place-items-center size-full">
                <img src={info.Item_Avatar} className="size-[70%] bg-contain rounded-full" alt="Icon" />
                <p className="w-full h-[30%] text-xs text-center font-body">{info.Item_Name}</p>
            </a>
        </div>
    )
}
//Please man for the love of God make modules, instead of putting everything in here, this looks horrible I dont even know how I coded this 

export default function Homepage () {
    const [server, setServer] = useState<string>('https://api.currencyapi.com/v3/latest apikey=cur_live_CpDYXeaTwqZcFHn7O09Zj8oMqhD6dPbm222sO3yN&currencies=MMK');
    const [balance, setBalance] = useState<number>(99999);
    const [currency, setCurrency] = useState<number>(2100);
    const [balanceVisible, setBalanceVisible] = useState<boolean>(false);
    const plugin = useRef(
        Autoplay({ delay: 4000, stopOnInteraction: false })
    )
    useEffect(() => {
        const balanceText = document.getElementById('balanceText') as HTMLSpanElement;
        const decimalText = document.getElementById('decimalText') as HTMLSpanElement;
        if(balanceVisible){
            balanceText.innerText = balance.toString();
            decimalText.innerText = '.00';         
        } else {
            balanceText.innerText = '******';
            decimalText.innerText = '';         
        }
    },[balanceVisible])

    useEffect( () => {
        try{
            const fetchCurrency = async () => {
                const res = await fetch(server);
                if(!res.ok) {
                    throw new Error('Err:Cannot connect to server');
                }
                const data = await res.json();
                setCurrency( _prev => _prev = data.data.MMK.value.toFixed(2)); 
            }
        } catch(err) {
            console.error('err: currency api', err);
            setCurrency(_prev => _prev=2100);
        }
        console.log(currency);
    },[server, currency])
    let info = [
        {Item_Name: "KFC",Item_Avatar: Kfc},
        {Item_Name: "Grab",Item_Avatar: Grab},
        {Item_Name: "Dell",Item_Avatar: Dell},
        {Item_Name: "Spotify",Item_Avatar: Spotify},
        {Item_Name: "Shell",Item_Avatar: Shell},
        {Item_Name: "Starbuck",Item_Avatar: Starbuck},
        {Item_Name: "Bitcon",Item_Avatar: Bitcon},
        {Item_Name: "Heineken",Item_Avatar: Heineken},
    ]
    return(
        <div className="grid grid-rows-[10%,15%,25%,18%,5%,12.5%,3%] h-[110vh] w-full bg-zinc-950">
            <div className="h-full grid grid-cols-4 py-5">
                <Link to='/Scan'>
                    <button 
                        type="button" 
                        title="btn-transfer" 
                        className="flex flex-col place-items-center place-content-center h-full mx-auto text-zinc-100">
                            <ScanLine size={33}  />
                            <p>Scan</p>
                    </button>
                </Link>
                <Link to='/Receive'> 
                    <button 
                        type="button" 
                        title="btn-receive" 
                        className="flex flex-col place-items-center place-content-center h-full mx-auto text-zinc-100 ">
                        <QrCode size={33}  />
                        <p>Receive</p>
                    </button>
                </Link>
                <Link to='/CashIn'>
                    <button type="button" title="btn-transfer" className="flex flex-col place-items-center place-content-center h-full mx-auto text-zinc-100 ">
                            <CircleArrowOutDownLeft size={33}  />
                            <p>Cash In</p>
                    </button>
                </Link>
                <Link to='/CashOut'>
                    <button type="button" title="btn-transfer" className="flex flex-col place-items-center place-content-center h-full mx-auto text-zinc-100 ">
                        <CircleArrowOutUpRight size={33}  />
                        <p>CashOut</p>
                    </button>
                </Link>
            </div>
            <div className="h-full mx-3 my-5 p-1 grid grid-rows-[40%,60%] bg-zinc-800 rounded-lg">
                <div className="col-span-2 grid grid-cols-[35%,10%,55%] place-items-center w-full text-zinc-400 ">
                    <p className="w-full h-full flex place-content-center text-xl ">Balance (ks)</p>
                    <button type="button" title="btn-reveal" className="size-full flex p-1 " onClick={ () => setBalanceVisible( prev => prev = !prev)}>
                        { balanceVisible ? <Eye /> : <EyeOff />}
                    </button>
                    <p className="flex size-full place-content-end px-3 py-1 text-sm text-zinc-400">
                        1 USD = {currency} MMK
                    </p>
                </div>

                <div className="col-span-2 size-full px-3 pb-3 text-zinc-100">
                    <h3  className="text-3xl font-semibold h-full flex place-items-center ">
                        <span id="balanceText">{balance}</span><span id="decimalText" className="text-lg">.99</span>
                    </h3>
                </div>
            </div>
            <div className="grid grid-rows-2 grid-cols-4 h-5/6 w-full my-5 text-zinc-100">
                <div className="size-full flex flex-col place-content-center place-items-center">
                    <a href="#" title="topup">
                        <Smartphone />
                    </a>
                    <p>Top Up</p>
                </div>
                <div className="size-full flex flex-col place-content-center place-items-center">
                    <a href="#" title="transfer">
                        <CircleDollarSignIcon />
                    </a>
                    <p>Transfer</p>
                </div>
                <div className="size-full flex flex-col place-content-center place-items-center">
                    <a href="#" title="bank-account">
                        <CreditCard />
                    </a>
                    <p>Bank</p>
                </div>
                <div className="size-full flex flex-col place-content-center place-items-center">
                    <a href="#" title="history">
                        <GalleryHorizontalEnd />
                    </a>
                    <p>History</p>
                </div>
                <div className="size-full flex flex-col place-content-center place-items-center">
                    <a href="#" title="quick-pay">
                        <HandCoins />
                    </a>
                    <p>Quick Pay</p>
                </div>
                <div className="size-full flex flex-col place-content-center place-items-center">
                    <a href="#" title="gift-cards">
                        <Gift />
                    </a>
                    <p>Gift Cards</p>
                </div>
                <div className="size-full flex flex-col place-content-center place-items-center">
                    <a href="#" title="bill-payment">
                        <ReceiptText />
                    </a>
                    <p>Bill Payment</p>
                </div>
                <div className="size-full flex flex-col place-content-center place-items-center">
                    <a href="#" title="market">
                        <Layers />
                    </a>
                    <p>Market</p>
                </div>  
            </div>
            <div className=" flex place-content-center size-full my-1">
                <div className="w-[95%] h-5/6 flex place-items-center">
                    <Carousel plugins={[plugin.current]} opts={{loop: true}}>
                        <CarouselContent className="-ml-2 md:-ml-4">
                            <CarouselItem className="pl-2 md:pl-4">
                                <img src="/assets/banner1.jpg" alt="banner" className="rounded-lg"/>
                            </CarouselItem>
                            <CarouselItem className="pl-2 md:pl-4">
                                <img src="/assets/banner2.jpg" alt="banner" className="rounded-lg"/>
                            </CarouselItem>
                            <CarouselItem className="pl-2 md:pl-4">
                                <img src="/assets/banner3.jpg" alt="banner" className="rounded-lg" />
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </div>
            </div> 
            <h3 className="mt-1 mb-1 px-6 font-body font-semibold text-lg text-zinc-300">Apps</h3> 
            <div 
                className="grid grid-rows-1 grid-cols-auto grid-flow-col place-items-end overflow-x-scroll overflow-y-hidden w-[95%] h-3/4 mx-auto"
                style={{scrollbarWidth: 'none'}}
            >
                {info.map((e,i)=>(
                    <NewsCard key={i} data={e} />
                ))
                }
            </div>
            <div className="flex place-items-center w-[95%] mx-auto -mt-2 px-5 rounded-lg bg-zinc-800 text-zinc-400">
                <Newspaper/>
                <p className="mx-5">Click here for KBZPay tutorials</p>
                <ArrowRight className="ms-auto" />
            </div>
            <Footer />
        </div>
    )
}
