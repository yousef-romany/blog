import Link from "next/link";

interface dataTypeCardBlog { 
    img: any;
    header: string;
    date: string;
    time: string;
    filter: string;
    id: string;
  }
const CardBlog = ({img, header, date, time, filter, id}: dataTypeCardBlog) => <>
    <Link href={"/Blog/"+ id}>
        <div className="flex w-[400px] h-[400px] p-7 hover:bg-[#292524] rounded-xl gap-5 flex-col relative overflow-hidden">
            <img src={img} alt="social" loading="lazy" className="w-full h-[200px] object-cover rounded-xl" />
            <div className="h-full w-fit flex flex-col gap-2">
                <p className="max-w-[37.5rem] text-[1.15rem] text-[#d09e72]">
                    {date} . {time}m
                </p>
                <h1 className="text-[1.675rem] text-[#d6d3d1] font-bold max-w-[320px]">{header}</h1>
            </div>
        </div>
    </Link>

</>
export default CardBlog;