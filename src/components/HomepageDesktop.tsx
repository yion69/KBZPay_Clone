import * as React from 'react';
import {motion} from 'framer-motion'
import { ChevronDown, CircleArrowOutDownLeft, CircleArrowOutUpRight, Coins, Download, QrCode, ScanLine, TabletSmartphone } from 'lucide-react';
import '../App.css';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface Feature {
    id: number,
    name: string,
    description: string,
}
interface FeaturesBoxProps {
    data: Feature[],
}

const ScrollDownFromDownloadBanner = () => {
    
    const scrollDown = () => {
        window.scrollTo({
            top: 800,
            left: 0,
            behavior: 'smooth',
        });
    }


    return(
        <div className='h-[22%] w-full' id='homePageDesktop'>
            <div className='flex flex-col place-content-center h-full w-2/5 ml-auto' id='homePageDesktopDiv'>
                <div className='place-content-center p-5'>
                    <h3 className='text-4xl text-zinc-100 font-semibold my-1'>Download</h3>
                    <p className='text-lg text-zinc-100'>You can download KBZPay app by searching ‘KBZPay’ on your respective app stores. You can also click on the button below to go to the app stores directly.</p>
                </div>
                <div className='grid grid-cols-3 place-items-center h-1/5 w-full'>
                    <a href="#" className='w-4/5 h-20'>
                        <img src="../src/assets/badge-appstore.svg" className='size-full' alt="download" />
                    </a>
                    <a href="#" className=' h-20'>
                        <img src="../src/assets/badge-playstore.png" className='size-full' alt="download" />
                    </a>
                    <a href="#" className='flex place-items-center place-content-center h-[3.35rem] w-[90%] p-1 rounded-lg bg-zinc-950 text-zinc-100 border border-zinc-100'>
                        <Download className='mr-1' />Download KBZPay
                    </a>
                </div>
                <div className='absolute right-[47.5%] top-[90%] text-white'>
                    <button title='btn-scroll' type='button' onClick={scrollDown} className='flex flex-col place-items-center'>
                        <p>Scroll Down</p>
                        <ChevronDown size={50}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

const FadeInAnimation = ({children}:any):JSX.Element => {

    const variants = {
        variantOne: {
            initial: {
                opacity: 1,
                scale: 0.8,
            },
            
            inView: {
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 0.7,
                    delay: 0,
                }
            },
        },
    }

    return(
        <motion.div
            variants={variants.variantOne}
            initial= 'initial'
            whileInView="inView"
            viewport={{
                once: false,
                amount: 0.8,
            }}
        >
            {children}
        </motion.div>
    )
}

//well I have no idea how I debugged this
const FeaturesBoxes = (props:FeaturesBoxProps):JSX.Element => {

    const [functionsInfo, setFunctionsInfo] = React.useState(props.data);
    const iconsSwap = (temp:number) => {
        switch (temp) {
            case 0:
                return(<ScanLine size={90} className='text-zinc-100 mx-auto my-auto'/>)
                break;
            case 1:
                return(<QrCode size={90} className='text-zinc-100 mx-auto my-auto'/>)
                break;
            case 2:
                return(<CircleArrowOutDownLeft size={90} className='text-zinc-100 mx-auto my-auto'/>)
                break;
            case 3:
                return(<CircleArrowOutUpRight size={90} className='text-zinc-100 mx-auto my-auto'/>)
                break;
            case 4:
                return(<TabletSmartphone size={90} className='text-zinc-100 mx-auto my-auto'/>)
                break;
            case 5:
                return(<Coins size={90} className='text-zinc-100 mx-auto my-auto'/>)
                break;
            default:
                break;
        }
    }
    const variant = {
        initial: {
            opacity: 0,
            translateY: -100,
        },
        inView: {
            opacity: 1,
            translateY: 0,
        }
    }
    return(
        <>
            { functionsInfo.map((e,index:number) => (
                <div className=' h-72 w-[90%]' key={index}>
                    <motion.div 
                        initial = {variant.initial}
                        whileInView={variant.inView}
                        transition={ {delay: index * 0.15, duration: 0.5}}
                        viewport={{once: true, amount: 0.8}}
                        className='grid grid-rows-[45%,55%] h-full size-full'
                    >
                        {iconsSwap(index)}
                        <div className='text-center text-zinc-100'>
                            <h3 className='text-2xl'>{e.name}</h3>
                            <p className='text-lg'>{e.description}</p>
                        </div>
                    </motion.div>
                </div>
                   
                ))
            }
        </>
    )
}

const TextReveal = (props:any):JSX.Element => {
    const textArray = props.text.split(' ');
    return(
        <p className='text-lg text-zinc-100'>
            {textArray.map((e:any,i:number)=>(
                <motion.span
                    key={i}
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true}}
                    transition={{
                        duration: 0.5,
                        delay: i/20,
                    }}
                >
                    {e}{' '}
                </motion.span>
            ))}
        </p>
    )
}

const FeedbackCarousel = () => {
 
    return(
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="grid grid-rows-[40%,60%] h-80 w-[95%] mx-2 p-1 bg-zinc-800 rounded-lg">
                <div className='flex place-items-center'>
                    <Avatar className='size-20 mx-5 text-zinc-900 text-2xl'>
                        <AvatarImage src="#" />
                        <AvatarFallback>TN</AvatarFallback>
                    </Avatar>
                    <div className='flex flex-col place-content-center h-full w-3/4 text-start'>
                        <h3>Thuta Naing</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='p-5 border-t border-zinc-500 text-start'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsum quia consequatur libero sapiente maxime iusto sed saepe atque, corrupti architecto obcaecati ab exercitationem nihil omnis! Autem labore quos saepe?</p>
                </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=' text-zinc-100 bg-transparent border-none hover:bg-transparent hover:text-zinc hover:scale-125 transition-all'/>
      <CarouselNext className=' text-zinc-100 bg-transparent border-none hover:bg-transparent hover:text-zinc hover:scale-125 transition-all'/>
    </Carousel>
    )
}

export default function HomepageDesktop() {
    const [aboutUsData, setAboutUsData] = React.useState<string>('KBZPay is the Myanmar’s largest mobile wallet, powered by KBZ Bank, Myanmar’s Largest Privately Owned Bank. Experience unmatched convenience in your daily finances and seamless lifestyle transactions with KBZPay. Join now to embrace the future of financial technology.”');
    const [functionInformation, setFunctionInformation] = React.useState([
                                                            {id: 1, name:'Scan', description: 'Scan to make transaction easily'},
                                                            {id: 2, name: 'Receieve', description: 'Unique QR to accept for any payment'},
                                                            {id: 3, name: 'Cash In', description: 'Cash into your KBZPay account via KBZPay Merchants/Agents, KBZ Bank Account, Mastercard,  Visa Cards and any MPU Cards.'},
                                                            {id: 4, name: 'Cash Out', description: 'Cash out from your KBZPay account via KBZPay Merchants/Agents, ATMs, KBZ Bank Account and any MPU Cards'},
                                                            {id: 5, name: 'Top Up', description: 'Top up your phone for any telecom in Myanmar anywhere by using KBZPay'},
                                                            {id: 6, name: 'Transfer', description: 'Free & instant 24/7 cash transfers with KBZPay'},
                                                        ])
 
    return(
        <div className=' h-[205rem] font-body' style={{backgroundColor: '#141414'}}>
            <ScrollDownFromDownloadBanner />
            <div className='flex place-items-center place-content-center h-[45rem] w-full my-10'>
                <div className='w-4/5 h-5/6 grid grid-cols-2 place-items-center'>
                    <img src="../src/assets/mobileTesting.svg" alt="People" className='size-[90%]' />
                    <div className='p-10'>
                        <h3 className='text-4xl text-zinc-100 mb-10'>About Us</h3>
                        <TextReveal text={aboutUsData} />
                        <div className='w-full mt-10 space-x-3 flex place-content-end'>
                            <Button variant={'primary'} size={'xl2'}>Learn More</Button>
                            <Button variant={'outline2'} size={'xl2'}>Visit KBZMarket</Button>
                        </div>
                    </div>
                </div>  
            </div>
            <div className='grid grid-rows-2 grid-cols-3 place-items-center place-content-center w-3/4 mx-auto my-10 h-[40rem]'>
                <FeaturesBoxes data={functionInformation}/>
            </div>
            <FadeInAnimation >
                <div className='grid grid-rows-[20%,80%] w-3/4 h-[40rem] mt-20 mx-auto p-5 text-center text-zinc-100' style={{backgroundColor: '#141414'}}> 
                    <div className='flex flex-col place-content-end font-body'>
                        <h3 className='text-4xl mb-5'>Testimonials</h3>
                        <p className='text-lg text-start'>Millions have already successfully used KBZPay and they have had a lot of nice things to say about us. Here’s what our users think about KBZPay, in their own words.</p>
                    </div>
                    <div className='flex place-content-center place-items-center w-full'>
                        <FeedbackCarousel />
                    </div>
                </div>
            </FadeInAnimation>
            <div className='h-[25rem] w-full'>
                <FadeInAnimation >
                    <div className='grid grid-cols-[40%,60%] h-[90%] w-[65%] mx-auto p-5 bg-zinc-800 rounded-lg'>
                        <img src="../src/assets/city.svg" alt="City" className='w-[320px]' />
                        <div className='flex flex-col place-content-center h-3/5 my-auto text-zinc-100'>
                            <h3 className='text-3xl'>KBZPay Center</h3>
                            <p className='text-lg'>Learn more about KBZPay Centers in Myanmar and the available services</p>
                                <Button variant={'primary'} size={'xl2'} className='self-end mr-14 mt-3 bg-zinc-900 border-zinc-700'>More Detail</Button>
                        </div>
                    </div>
                </FadeInAnimation>
            </div>
        </div>
    )
}
 