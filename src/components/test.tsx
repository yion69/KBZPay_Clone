import { once } from "events";
import { motion, useScroll, useTransform, scroll, useInView, delay } from "framer-motion";
import { useEffect, useRef } from "react";



function PageTest () {

    const ref = useRef(null);
    const view = {
        root: ref,
        rootMargin: '0px',
        threshold: 0.5,
        once: false,
    }
    const initialStyle = {
        translateX: 400,
        opacity: 0,
    }

    const whileInViewStyle = {
        translateX: 200,
        opacity: 1,
    }
    const trans = {
        duration: 0.5,
        delay: 0,
    }
    return(
        <div className='this px-[30%] w-full h-[34rem] bg-zinc-700' >
            <div className="h-1/2 w-full mt-24 bg-red-500 overflow-y-scroll overflow-x-hidden" ref={ref}>
                {[...Array(10)].map((_,index)=>(
                    <motion.div 
                        className="size-[200px] my-5 bg-slate-500"
                        initial={initialStyle}
                        whileInView={whileInViewStyle}
                        viewport={view}
                        transition={trans}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
}

export default PageTest;