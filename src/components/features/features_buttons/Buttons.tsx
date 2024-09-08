type props = {
    props_data: {
        name: string,
        logo: string
    }
}

//well I had to delete a lot of codes here, im leaving this comment to remember this embarrassment ¯\_(ツ)_/¯
export default function FeaturesButtons ({props_data}:props) {
    return(
        <a href="/"
            className="flex place-content-start place-items-center
                       w-11/12 h-24 mx-auto my-5 px-5 rounded-xl shadow-4xl text-zinc-300 bg-zinc-900"
        >
            <img src={props_data.logo} alt="KBZBank" className="h-10 w-16 object-contain"/>
            <h3 className="mx-4 font-body text-xl">{props_data.name}</h3>
        </a>
    )
}