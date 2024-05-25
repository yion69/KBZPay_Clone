    import { useEffect, useRef, useState,useMemo } from 'react'
    import { Progress } from "@/components/ui/progress"
    import Picture1 from '../assets/InProgess_Icons/Inprogress_1.svg'
    import Picture2 from '../assets/InProgess_Icons/Inprogress_2.svg'
    import Picture3 from '../assets/InProgess_Icons/Inprogress_3.svg'
    import Picture4 from '../assets/InProgess_Icons/Inprogress_4.svg'

    const RandomImage = () => {
        // let random = useRef(Math.floor(Math.random() * (+4 - +0)) + +1);
        let random =  useMemo(() => Math.floor(Math.random() * 4) + 1, []);
        if(random == 1) {return <img src={Picture1} alt='InProgressOne' />} 
        if(random == 2) {return <img src={Picture2} alt='InProgressTwo' />} 
        if(random == 3) {return <img src={Picture3} alt='InProgressThree' />} 
        if(random == 4) {return <img src={Picture4} alt='InProgressFour'/>}
    }

    export default function InProgress () {
        const [progress, setProgress] = useState(0);
        useEffect(() => {
            const maxProgress = 65;
            const interval = setInterval(() => {
                setProgress(prev => {
                    if(prev >= maxProgress){
                        clearInterval(interval);
                        return prev
                    }
                    return prev += 1;
                })
            }, 100)
            console.log(progress)
        },[])
        
        return(
            <div className="flex flex-col place-items-center h-full w-full">
                <div className='grid grid-rows-[60%,40%] w-5/6 h-2/3 my-16'>
                    <div className='place-items-center place-content-center'>
                        <RandomImage />
                    </div>
                    <div className='mt-5 text-zinc-200 text-center font-netto tracking-widest'>
                        <h3 className='text-3xl mb-5'>Website Under Construction</h3>
                        <Progress className='' value={progress} />
                        <p className='text-lg font-thin text-end px-5 py-2'>{progress}%</p>
                    </div> 
                </div>  
            </div>
        )
    }