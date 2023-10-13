"use client"
import { useEffect, useState } from "react";
import typescript from "../../public/Images/typescript.webp";
import CardSnippets from "../../components/snippets/CardSnippets";

interface dataTypeFeaturedTalks { 
    img: any;
    header: string;
    text: string;
    filter: string;
  }
  
  const dataFeaturedTalks: dataTypeFeaturedTalks [] = [
    {
      img: typescript,
      header: "DistributiveOmit",
      text: "Custom omit type that omits a property from all members, preserving union types.",
      filter: "chekra",
    },
    {
      img: typescript,
      header: "DistributiveOmit",
      text: "Custom omit type that omits a property from all members, preserving union types.",
      filter: "hooks",
    },
    {
      img: typescript,
      header: "yousef test",
      text: "Custom omit type that omits a property from all members, preserving union types.",
      filter: "bash",
    },
    {
      img: typescript,
      header: "DistributiveOmit",
      text: "Custom omit type that omits a property from all members, preserving union types.",
      filter: "react",
    },
    {
      img: typescript,
      header: "DistributiveOmit",
      text: "Custom omit type that omits a property from all members, preserving union types.",
      filter: "react",
    },
    {
      img: typescript,
      header: "DistributiveOmit",
      text: "Custom omit type that omits a property from all members, preserving union types.",
      filter: "react",
    },
    {
      img: typescript,
      header: "DistributiveOmit",
      text: "Custom omit type that omits a property from all members, preserving union types.",
      filter: "react",
    },
  ]
  const dataTypeFilters: string[] = [
    "All",
    "Typescript",
    "npm",
    "bash",
    "react",
    "hooks"
]
const Snippets = () => {
    const [filterState, setFilter] = useState<string>("All");
    const [data, setData] = useState<dataTypeFeaturedTalks[]>();
    useEffect(() => setFilter("All"), [])
    useEffect(() => {
        if(filterState == "All") {
            setData(dataFeaturedTalks);
        } else {
            let endFilter = dataFeaturedTalks.filter((element) => element.filter == filterState);
            setData(endFilter);
        }
    }, [filterState])
    return <>
        <main className="w-full h-fit flex flex-col pt-24 gap-[100px]">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col">
                    <h1 className="text-[5rem] font-semibold text-[#d6d3d1]">
                        Snippets
                    </h1>
                </div>
                <div>
                    <h4 className="text-[1.2rem] text-[#d6d3d1] max-w-[560px]">
                        A collection of solutions to small problems I've faced in the past. They're all copy-paste ready 😉
                    </h4>
                </div>
                <div className="flex flex-wrap gap-5 max-w-[1000px]">
                    {dataTypeFilters.map((item: string, key: number) => (
                        <div key={key} onClick={() => setFilter(item)} className="text-[18px] font-bold hover:text-[#d09e72] cursor-pointer text-[#d6d3d1] flex flex-col justify-start items-center border-t-[4px] border-[#34302f] bg-[#292524] rounded-xl w-fit p-2 labtop:w-fit tablet:w-full mobile:w-full">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full min-h-screen h-fit flex flex-row flex-wrap justify-start items-start gap-[30px]">                
                {data?.map((item: dataTypeFeaturedTalks, key: number) => ( <CardSnippets filter="" img={item.img} text={item.text} header={item.header}  key={key} /> ))}
            </div>
        </main>
    </>
}
export default Snippets