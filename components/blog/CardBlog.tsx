import Image from "next/image";
import Link from "next/link";

interface dataTypeCardBlog { 
    img: any;
    header: string;
    date: string;
    time: string;
    filter: string;
  }
const CardBlog = ({img, header, date, time, filter}: dataTypeCardBlog) => <>
    <Link href={"/"} className="w-fit">
        <div className="flex w-fit h-fit p-7 hover:bg-[#292524] rounded-xl gap-5 flex-wrap flex-col">
            <div>
                <Image src={img} alt="social" className="max-w-[320px] h-auto rounded-xl" />
            </div>
            <div className="h-full w-fit flex flex-col gap-2">
                <p className="max-w-[37.5rem] text-[1.15rem] text-[#d09e72]">
                    {date} . {time}
                </p>
                <h1 className="text-[1.675rem] text-[#d6d3d1] font-bold max-w-[320px]">{header}</h1>
            </div>
        </div>
    </Link>
</>
export default CardBlog;