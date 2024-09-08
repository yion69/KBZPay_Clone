import {KBZBank, MPU, Visa, MasterCard, Store} from './features_buttons/Features_Icons_import';
import FeaturesButtons from "./features_buttons/Buttons";
import { Button } from '../ui/button';
import { CircleChevronLeft } from 'lucide-react';

export default function CashIn () {
    const featuresData = [
        {name: "Agent / Merchant", logo: Store},
        {name: "KBZ Bank Account", logo: KBZBank},
        {name: "MPU Card", logo: MPU},
        {name: "Visa Card", logo: Visa},
        {name: "Master Card", logo: MasterCard},
    ];
    return (
        <div className="h-[80dvh] w-full py-5 bg-zinc-950 overflow-y-scroll">
            <a href="/" className='text-zinc-300' title='back'><CircleChevronLeft size={30} className='mx-5'/></a>
            { featuresData.map((e,i) => (
                <FeaturesButtons key={i} props_data={e}/>
            ))
            }
        </div>
    ) 
}