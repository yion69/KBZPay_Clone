import "../App.css"

export default function Demo () {
    return(
        <div className="flex justify-center h-dvh w-full p-4 bg-zinc-950">
            <div className="relative flex items-center justify-center w-2/6 h-full" >
                <div className="w-9/12 h-full">
                    <iframe src="http://localhost:5173/Mobile" className="w-full h-full border-4 border-zinc-800 rounded-[2.5rem]"></iframe>
                </div>
            </div>
            
        </div>
    )
}
