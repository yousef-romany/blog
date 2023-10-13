import Image from "next/image";
import LinksFooter from "../footer/LinksFooter";
interface data { 
    img: any;
    header: string;
    text: string;
    host: string;
    filter: string
  }
import Link from "next/link";
  interface dataOfFeatured {
    header: string;
    icons: any[][];
    text: string;
    col: string[][];
    img: any
  }
export const FeaturedCard = ({ header, icons, text, col, img}: dataOfFeatured) => {
    return <>
        <div className="w-full flex justify-between items-center flex-wrap gap-7">
            <div className="flex flex-col justify-evenly items-start gap-9">
              <h1 className="text-[2.25rem] text-[#d09e72] font-semibold">{header}</h1>
              <ul className="flex gap-8 items-center">
                { icons.map((item, key: number) => ( <LinksFooter icon={item[0]} route={item[2]} text={item[1]} key={key} /> )) }
              </ul>
              <p className="text-[#d6d3d1] text-[1.125rem] max-w-[440px]">{text}</p>
              <div className="flex gap-[60px]">
                {
                    col.map((item, key: number) => (
                        <div className="flex flex-col" key={key}>
                            <h1 className="text-[#d09e72] text-[1.6rem]">{item[0]}</h1>
                            <h1 className="text-[#d6d3d1] text-[3rem]">{item[1]}</h1>
                        </div>
                    ))
                }
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-gradient-to-tr from-[#1EBBFF] to-[#FEB48C] w-[582px] h-[400px] relative overflow-hidden rounded-xl">
                <Image src={img} alt="Images" className="rounded-xl absolute left-[8%] top-[8%] max-w-[900px] h-auto" />
              </div>
            </div>
          </div>
    </>;
}

export const FeaturedTalk = ({ img, header, text, host }: data) => {
    return <>
        <Link href={"/"} className="w-full">
            <div className="flex w-full h-fit p-7 hover:bg-[#292524] rounded-xl gap-5 flex-wrap">
                <div>
                    <Image src={img} alt="social" className="max-w-[300px] h-auto rounded-xl" />
                </div>
                <div className="h-full w-fit flex flex-col gap-2">
                    <h1 className="text-[1.875rem] text-[#d6d3d1] font-bold" >{header}</h1>
                    <p className="max-w-[37.5rem] text-[1.15rem] text-[#d6d3d1]">{text}</p>
                    <div className="flex gap-6 items-center">
                        <div className="flex gap-2">
                            <p className="text-[#d09e72] font-bold text-[1.1rem] uppercase">HOST: </p>
                            <p className="text-[#d6d3d1] font-bold text-[1.1rem] uppercase">
                                {host}
                            </p>
                        </div>
                        <div className="uppercase text-[0.9rem] bg-[#fbd38d29] text-[#d09e72] font-bold p-1 rounded-md">
                            talk
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </>;
}
