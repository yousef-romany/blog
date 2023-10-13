import Image from "next/image";

interface dataTypeFeaturedTalks { 
    img: any;
    header: string;
    text: string;
    filter: string;
  }
const CardSnippets = ({ img, header, text, filter }: dataTypeFeaturedTalks) => {
    return <>
        <div className="flex flex-col bg-[#292524] w-fit h-fit rounded-xl p-6 gap-5">
            <Image src={img} alt="type" className="rounded-lg"/>
            <h1 className="text-[1.25rem] text-[#d6d3d1] font-bold">{header}</h1>
            <p className="text-[#d6d3d1] max-w-[500px] text-[1rem]">{text}</p>
        </div>
    </>;
}
export default CardSnippets;