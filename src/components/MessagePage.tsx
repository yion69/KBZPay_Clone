// import InProgress from "./InProgress";
import { EllipsisVertical, User, Image, ThumbsUp, MessageCircle, Share } from "lucide-react"
import { Footer } from "./Footer"

type MessageCardT = {
    card_index: number,
    card_content: MessageT,
}

type MessageT = {
    title: string,
    body: string,
    profilePicture: Blob | null,
    postDate: string,
    coverPicture: Blob | null,
}

export function MessageCard({card_index, card_content}:MessageCardT) {
    return(
            <div className="w-full h-60 mx-1 bg-zinc-900 text-zinc-200 border-b border-zinc-800">
                
                <div className="flex h-1/5 w-full px-1">
                <span className="hidden">{card_index}</span>
                    <div className="flex items-center w-2/12 h-full p-[2px]">
                        { card_content.profilePicture ? 
                            <img src="#" alt={card_content.title} className="size-8 mx-auto rounded-full border border-zinc-950" /> :
                            <User className="size-8 mx-auto p-1 rounded-full border-2 border-zinc-400"/>
                        }
                    </div>
                    <div className="flex items-center w-9/12 h-full">
                        <p className="w-full px-1 text-xl line-clamp-1">
                            {card_content.body}
                        </p>
                    </div>
                    <button title="more" className="w-1/12 h-full"><EllipsisVertical className="w-full h-full" /></button>
                </div>

                <div className="h-3/5 w-full text-zinc-400">
                    <div className="h-3/4 w-full flex items-center justify-center bg-zinc-950">
                        { card_content.coverPicture ? 
                            <img src="" alt="ok" /> :
                            <Image className="size-1/2" />
                        }
                    </div>
                    <div className="flex items-center h-1/4 w-full px-2 ">
                        <p className="text-lg line-clamp-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, eius.</p>
                    </div>
                </div>

                <div className="flex h-1/5 w-full">
                    <div className="flex items-center justify-center w-1/4 h-full ps-1 text-sm">
                        {card_content.postDate}
                    </div>
                    <div className="grid grid-cols-3 w-3/4 h-full">
                        <button className="flex justify-center items-center gap-2">
                            <ThumbsUp />
                            Like
                        </button>
                        <button className="flex justify-center items-center gap-2">
                            <MessageCircle />
                            Message
                        </button>
                        <button className="flex justify-center items-center gap-2">
                            <Share />
                            Share
                        </button>
                    </div>
                </div>

            </div>
    )
}

export default function MessagePage () {
    let testData = {
        title: "Lorem",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi minus sunt quae hic. Dolore, omnis?",
        postDate: "2 hour(s) ago",
        profilePicture: null,
        coverPicture: null
    }
    
    return(
        <div className="flex flex-wrap place-content-start w-full gap-2 bg-zinc-950">
            {
                [...Array(6)].map((_,i) => (
                    <MessageCard card_index={i} card_content={testData} />
                ))
            }
            <div className="h-20 w-full"></div>
            <Footer />
        </div>
    )
}