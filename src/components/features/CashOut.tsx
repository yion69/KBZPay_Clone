import { CircleChevronLeft } from 'lucide-react';
import FeaturesButtons from './features_buttons/Buttons';
import {KBZBank, Store, ATM} from './features_buttons/Features_Icons_import';

export default function CashOut () {
    const featuresData = [
        {name: "Agent", logo: Store},
        {name: "ATM", logo: ATM},
        {name: "KBZ Bank Account", logo: KBZBank},
    ];
    return (
        <div className="h-[90dvh] w-full py-5 bg-zinc-950">
            <a href="/" className='text-zinc-300' title='back'><CircleChevronLeft size={30} className='mx-5'/></a>
            { featuresData.map((e,i) => (
                <FeaturesButtons key={i} props_data={e}/>
            ))
            }
        </div>
    ) 
}