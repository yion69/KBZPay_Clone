import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {motion} from 'framer-motion'
import { Button } from './ui/button';
import { FooterDesktop } from './Footer';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
    ChevronDown, CircleArrowOutDownLeft, CircleArrowOutUpRight, Coins, Download, LucideIcon, QrCode, ScanLine, TabletSmartphone, X 
} from 'lucide-react';

import '../App.css';
import { centers , features } from '@/MockData';

interface featureI {
    feature_name: string,
    feature_description: string,
    feature_icon: JSX.Element
}
type featurePropsT = {
    index: number,
    feature: featureI
}

interface centerInformationT {
    center_name: string,
    center_code: string,
    center_location: string   
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
        <div className='h-full w-full' id='homePageDesktop'>
            <div 
                className='flex flex-col place-content-end lg:place-content-center bg-zinc-950 lg:bg-transparent
                            h-full w-full lg:h-full lg:w-2/5 ml-0 lg:ml-auto' 
                id='homePageDesktopDiv'
            >
                <div className='place-content-center text-center lg:text-start p-5'>
                    <h3 className='my-1 text-4xl text-zinc-100 font-semibold'>Download</h3>
                    <p className='text-lg text-zinc-100'>You can download KBZPay app by searching ‘KBZPay’ on your respective app stores. You can also click on the button below to go to the app stores directly.</p>
                </div>
                <div className='grid grid-cols-2 grid-rows-2 lg:grid-cols-3 lg:grid-rows-1
                                 place-items-center h-1/5 w-full mb-28'
                >
                    <a href="#" className='w-40 h-24 lg:w-4/5 lg:h-20'>
                        <img src="/assets/badge-appstore.svg" className='size-full' alt="download" />
                    </a>
                    <a href="#" className='h-20 lg:h-20'>
                        <img src="/assets/badge-playstore.png" className='size-full' alt="download" />
                    </a>
                    <a  href="#" 
                        className='flex place-items-center place-content-center col-span-2 lg:col-span-1
                                    h-14 w-42 lg:h-[3.35rem] lg:w-[90%] p-1 rounded-lg bg-zinc-950 text-zinc-100 border border-zinc-100'>
                        <Download className='mr-1' />Download KBZPay
                    </a>
                </div>
                <div className='absolute right-[42.5%] top-[88.5%] lg:right-[47.5%] lg:top-[90%] text-white'>
                    <button title='btn-scroll' type='button' onClick={scrollDown} className='flex flex-col place-items-center'>
                        <p className='hidden lg:block'>Scroll Down</p>
                        <ChevronDown size={50}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

const FeaturesBoxes = ({index,feature}:featurePropsT) => {

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
    return (
        <>
            <div className='h-52 w-full lg:h-72 lg:w-[90%]'>
                <motion.div
                    initial={variant.initial}
                    whileInView={variant.inView}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className='h-full w-ful text-zinc-200'
                >
                    <div className='flex items-center justify-center h-1/2 w-full'>
                        {feature.feature_icon}
                    </div>
                    <div className='w-full h-1/2 text-center line-clamp-3 lg:line-clamp-0'>
                        <h3 className='text-2xl'>{feature.feature_name}</h3>
                        <p className='text-lg'>{feature.feature_description}</p>
                    </div>
                </motion.div>
            </div>
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
          <CarouselItem key={index} className="pl-1 basis-1/1 md:basis-1/2 lg:basis-1/3">
            <div className="grid grid-rows-[40%,60%] h-96 lg:h-80 w-[280px] lg:w-[95%] mx-2 p-1 bg-zinc-800 rounded-lg">
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
      <CarouselPrevious className='hidden md:block lg:block text-zinc-100 bg-transparent border-none hover:bg-transparent hover:text-zinc hover:scale-125 transition-all'/>
      <CarouselNext className='hidden md:block lg:block text-zinc-100 bg-transparent border-none hover:bg-transparent hover:text-zinc hover:scale-125 transition-all'/>
    </Carousel>
    )
}

const CenterLocation = (centerInfo:centerInformationT) => {
    return (
        <li className='flex flex-col w-full h-28 p-4 '>
            <h3 className='w-full text-lg font-semibold'>
                {centerInfo.center_name}
                <span className='mx-2 text-xs'>({centerInfo.center_code})</span>
            </h3>
            <p className='text-sm'>{centerInfo.center_location}</p>
        </li>
    )
}

export default function HomepageDesktop() {
                                                
    return(
        <div className='w-full font-body overflow-x-hidden bg-zinc-950'>
            <div className='h-dvh w-full'>
                <ScrollDownFromDownloadBanner />
            </div>
            <div className='flex place-items-center place-content-center h-dvh w-full my-20 lg:my-10'>
                <div className='w-full h-full lg:w-4/5 lg:h-5/6
                                 grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 place-items-center'
                >
                    <img src="/assets/mobileTesting.svg" alt="People" className='size-[90%]' />
                    <div className='p-4 lg:p-10'>
                        <h3 className='text-4xl text-zinc-100 mb-10'>About Us</h3>
                        <TextReveal 
                            text='KBZPay is the Myanmar’s largest mobile wallet, powered by KBZ Bank, Myanmar’s Largest Privately Owned Bank. Experience unmatched convenience in your daily finances and seamless lifestyle transactions with KBZPay. Join now to embrace the future of financial technology.”' 
                        />
                        <div className='w-full mt-10 space-x-3 flex place-content-end'>
                            <Button variant={'primary'} size={'xl2'}>Learn More</Button>
                            <Button variant={'outline2'} size={'xl2'}>Visit KBZMarket</Button>
                        </div>
                    </div>
                </div>  
            </div>
            <div className='grid grid-rows-3 grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 place-items-center place-content-center w-3/4 mx-auto mt-20 mb-32 lg:my-10 h-[40rem]'>
                {Object.entries(features).map(([_,e],i) => (
                    <FeaturesBoxes index={i} feature={e}/>
                ))}
            </div>
            <motion.div
                    initial={{
                        x: -200,
                        opacity: 0
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}
                    viewport={{
                        amount: 0.3
                    }}
                    transition={{
                        duration: 0.5,
                    }}
            >
                <div className='grid grid-rows-[20%,80%] w-[90%] lg:w-3/4 h-[40rem] mt-20 mx-auto p-5 text-center text-zinc-100'> 
                    <div className='flex flex-col place-content-end font-body'>
                        <h3 className='text-4xl mb-5'>Testimonials</h3>
                        <p className='text-lg text-start'>Millions have already successfully used KBZPay and they have had a lot of nice things to say about us. Here’s what our users think about KBZPay, in their own words.</p>
                    </div>
                    <div className='flex place-content-center place-items-center w-72 lg:w-full'>
                        <FeedbackCarousel />
                    </div>
                </div>
            </motion.div>

            <div className='h-dvh w-full'>
                <motion.div 
                    initial={{
                        x: 200,
                        opacity: 0
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}
                    viewport={{
                        amount: 0.3
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                    className='h-5/6'
                >
                    <div className='relative grid grid-cols-2 grid-rows-[15%,85%] h-full w-10/12 mx-auto p-4
                     text-zinc-200'>
                        <div className='col-span-2 flex items-start justify-center h-full w-full'>
                            <h3 className='text-3xl'>KBZPay Centers</h3>
                        </div>
                        <div className='flex flex-col items-center w-full h-full p-2'>
                            <ul className='flex flex-col w-full h-full gap-4 overflow-y-auto'>
                                {Object.entries(centers).map(([i,e]) => (
                                    <CenterLocation {...e}/>
                                ))}
                            </ul>
                        </div>
                        <div className='w-full h-full p-2'>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d122212.53473611378!2d96.1344300089569!3d16.819324517419602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1skbzpay!5e0!3m2!1sen!2smm!4v1726067735598!5m2!1sen!2smm" 
                                style={{border: 0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-full'></iframe>
                        </div>
                        {/* <Button variant={'primary'} size={'xl2'} className='absolute bg-zinc-900 border-zinc-700'>More Detail</Button> */}
                    </div>
                </motion.div>
            </div>
            <div className='w-full h-[50dvh]'>
                <FooterDesktop />
            </div>
        </div>
    )
}
 