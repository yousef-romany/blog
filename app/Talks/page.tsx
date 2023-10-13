"use client"
import { useEffect, useState } from "react";
import { FeaturedTalk } from "../../components/mainPage/Featureds";
import { AiOutlineSearch } from "react-icons/ai";
import imgSocial from "../../public/Images/segun-adebayo-social.webp";

const dataTypeFilters: string[] = [
    "All",
    "State machine",
    "accessibility",
    "xstate",
    "chakra ui",
    "design system",
    "react",
    "backstroy",
    "open source",
    "readme project",
    "github",
    "interview",
    "community",
    "roadmap"
]

interface dataTypeFeaturedTalks { 
    img: any;
    header: string;
    text: string;
    host: string;
    filter: string;
  }
  
  const dataFeaturedTalks: dataTypeFeaturedTalks [] = [
    {
      img: imgSocial,
      header: "Coding at the speed of design with Chakra UI",
      text: "Part Designer, Part UX Engineer, Segun is all about accessibility, inclusion and empathy.",
      host: "The ReadMe Project",
      filter: "State machine"
    },
    {
      img: imgSocial,
      header: "Coding at the speed of design with Chakra UI",
      text: "Part Designer, Part UX Engineer, Segun is all about accessibility, inclusion and empathy.",
      host: "The ReadMe Project",
      filter: "xstate"
    },
    {
      img: imgSocial,
      header: "yousef test",
      text: "Part Designer, Part UX Engineer, Segun is all about accessibility, inclusion and empathy.",
      host: "The ReadMe Project",
      filter: "backstroy"
    },
    {
      img: imgSocial,
      header: "Coding at the speed of design with Chakra UI",
      text: "Part Designer, Part UX Engineer, Segun is all about accessibility, inclusion and empathy.",
      host: "The ReadMe Project",
      filter: "design system"
    },
    {
      img: imgSocial,
      header: "Coding at the speed of design with Chakra UI",
      text: "Part Designer, Part UX Engineer, Segun is all about accessibility, inclusion and empathy.",
      host: "The ReadMe Project",
      filter: "chakra ui"
    },
    {
      img: imgSocial,
      header: "Coding at the speed of design with Chakra UI",
      text: "Part Designer, Part UX Engineer, Segun is all about accessibility, inclusion and empathy.",
      host: "The ReadMe Project",
      filter: "react"
    },
    {
      img: imgSocial,
      header: "Coding at the speed of design with Chakra UI",
      text: "Part Designer, Part UX Engineer, Segun is all about accessibility, inclusion and empathy.",
      host: "The ReadMe Project",
      filter: "roadmap"
    },
  ]

const Talks = () => {
    const [filterState, setFilter] = useState<string>("All");
    const [searchInput, setSearchInput] = useState<string>("")
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
    useEffect(() => {
        let endFilter = dataFeaturedTalks.filter(element => {
            return element?.header.toLowerCase().startsWith(searchInput.toLowerCase());
        });
        setData(endFilter);
    }, [searchInput])
    return <>
        <main className="w-full h-fit flex flex-col pt-24 gap-[100px]">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col">
                    <h1 className="text-[5rem] font-semibold text-[#d6d3d1]">
                        Talks
                    </h1>
                </div>
                <div>
                    <h4 className="text-[1.5rem] max-w-[680px] text-[#d6d3d1]">
                        I speak at conferences and events each year. Most of my talks are live coding or demoing sessions which can be scary but fun!
                    </h4>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-row">
                        <input type="text" placeholder="Search talks" className="min-w-[200px] max-w-[650px] w-full h-[60px] text-[20px] pl-[20px] bg-[#292524] text-[#e7e5e4] rounded-l-lg rounded-bl-lg"  onChange={(e) => setSearchInput(e.target.value)} />
                        <button className="bg-[#292524] text-[#e7e5e4] rounded-r-lg rounded-br-lg text-[30px] p-4 pt-0 pb-0"><AiOutlineSearch /></button>
                    </div>
                    <div className="flex flex-wrap gap-5 max-w-[1000px]">
                        {dataTypeFilters.map((item: string, key: number) => (
                            <div key={key} onClick={() => setFilter(item)} className="text-[18px] font-bold hover:text-[#d09e72] cursor-pointer text-[#d6d3d1] flex flex-col justify-start items-center border-t-[4px] border-[#34302f] bg-[#292524] rounded-xl w-fit p-2 labtop:w-fit tablet:w-full mobile:w-full">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full min-h-screen h-fit flex flex-col justify-start items-start gap-[100px]">
                {data?.length !== 0 ? data?.map((item: dataTypeFeaturedTalks, key: number) => ( <FeaturedTalk header={item.header} img={item.img} text={item.text} host={item.host} key={key} filter={item.filter} /> )) : <p className="text-[#e7e5e4]">No results found that match your query. Sorry</p>}
            </div> 
        </main>
    </>
}
export default Talks;