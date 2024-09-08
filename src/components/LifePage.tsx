import { 
    Box, BriefcaseMedical, BusFront, CarTaxiFront, CircleDollarSign, CloudMoon, CreditCard, Disc3, Drama, Ghost, HandCoins, HeartHandshake, Hospital, Landmark, MapPinned, MessageCircleQuestion, Plane, Search , Sparkles, Store, TabletSmartphone, Ticket, UtensilsCrossed, Wallet
 } from "lucide-react"


type itemT = {
    innerText: string,
    icon: JSX.Element
}

export function Item(props:itemT) {
    return (
        <button className="flex flex-col items-center justify-center">
            {props.icon}
            <span>{props.innerText}</span>
        </button>
    );
}

export default function LifePage () {
    return(
        <div className="w-full p-4 bg-zinc-950 text-zinc-300">
            <section className="h-dvh w-full">
                <div className="flex items-center w-full h-10 px-4 gap-2 bg-zinc-900 rounded-full text-zinc-500">
                    <Search className="h-full w-1/12" />
                    <input title="searchbar" type="text" className="h-full w-11/12 px-4 bg-transparent focus-within:outline-none" />
                </div>
                {/* Okay these codes might looks ugly but hear me out. Nuh, I cant defend for them those looks ugly asf
                */}
                <div className="w-full h-2/6 my-4 px-2 py-2 rounded-md bg-zinc-900">
                    <h3 className="flex items-center w-full h-1/5 px-4 text-xl font-semibold">Mini Apps</h3>
                    <div className="grid grid-cols-4 grid-rows-2 h-5/6 w-full">
                        <Item innerText="Travel" icon={<Plane />} />
                        <Item innerText="Food" icon={<UtensilsCrossed />} />
                        <Item innerText="Shows" icon={<Drama />} />
                        <Item innerText="Nearby" icon={<MapPinned />} />
                        <Item innerText="Market" icon={<Store />} />
                        <Item innerText="Pac-man" icon={<Ghost />} />
                        <Item innerText="Music" icon={<Disc3 />} />
                        <Item innerText="Weather" icon={<CloudMoon />} />
                    </div>
                </div>
                <div className="w-full h-2/6 my-4 rounded-md bg-zinc-900">
                    <h3 className="flex items-center w-full h-1/5 px-4 text-xl font-semibold">My Services</h3>
                    <div className="grid grid-cols-4 grid-rows-2 h-5/6 w-full">

                        <Item innerText="Health" icon={<BriefcaseMedical />} />
                        <Item innerText="Top-up" icon={<TabletSmartphone />} />
                        <Item innerText="Bus Ticket" icon={<BusFront />} />
                        <Item innerText="Cargo" icon={<Box />} />
                        
                        <Item innerText="Taxi" icon={<CarTaxiFront />} />   
                        <Item innerText="ATM" icon={<CreditCard />} />
                        
                    </div>               
                </div>
                <div className="w-full h-1/6 my-4 p-2 rounded-md bg-zinc-900">
                    <h3 className="h-2/6 w-full px-2 text-xl font-semibold">Finance & Loan Services</h3>
                    <div className="grid grid-cols-4 items-center h-4/6 w-full">
                        <Item innerText="Loan" icon={<HandCoins />} />
                        <Item innerText="KyoPay" icon={<CircleDollarSign />} />
                        <Item innerText="Bank" icon={<Landmark />} />
                        <Item innerText="Wallet" icon={<Wallet />} />
                    </div>
                </div>
            </section>
            <section className="h-[50dvh] w-full">
                <div className="w-full h-5/6 bg-zinc-900 rounded-md">
                    <h3 className="flex items-center w-full h-1/5 px-4 text-xl font-semibold">Other Services</h3>
                    <div className="grid grid-cols-4 grid-rows-3 h-5/6 w-full">

                        <Item innerText="Health" icon={<BriefcaseMedical />} />
                        <Item innerText="Top-up" icon={<TabletSmartphone />} />
                        <Item innerText="Bus Ticket" icon={<BusFront />} />
                        <Item innerText="Cargo" icon={<Box />} />
                        
                        <Item innerText="Taxi" icon={<CarTaxiFront />} />   
                        <Item innerText="ATM" icon={<CreditCard />} />
                        <Item innerText="Donation" icon={<HeartHandshake />} />
                        <Item innerText="Covid-19" icon={<Hospital />} />
                        
                        <Item innerText="Updates" icon={<Sparkles />} />
                        <Item innerText="FAQ" icon={<MessageCircleQuestion />} />
                        
                    </div>  
                </div>
            </section>
        </div>
    )
}