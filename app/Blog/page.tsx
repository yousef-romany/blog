"use client"
import { use, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import imgSocial from "../../public/Images/photo-1523875194681-bedd468c58bf.webp";
import CardBlog from "@/components/blog/CardBlog";
// import Ul from "@/components/blog/Ul";



const dataTypeFilters: string[] = [
    "All",
    "chakra",
    "design-system",
    "roadmap",
    "react",
    "css-in-js",
    "testing",
    "jest",
    "finance",
    "hiring",
    "stock",
    "github-actions",
    "ci",
    "career",
    "interview",
    "tips"
]

// interface dataTypeFeaturedTalks { 
//     img: any;
//     header: string;
//     date: string;
//     time: string;
//     filter: string;
//   }
  
// const dataFeaturedTalks: dataTypeFeaturedTalks [] = [
// {
//     img: imgSocial,
//     header: "Chakra, Panda and Ark - What's the plan?",
//     date: "August 26, 2023",
//     time: "4 min read",
//     filter: "chakra"
// },
// {
//     img: imgSocial,
//     header: "Chakra, Panda and Ark - What's the plan?",
//     date: "August 26, 2023",
//     time: "4 min read",
//     filter: "chakra"
//     },
//     {
//     img: imgSocial,
//     header: "Chakra, Panda and Ark - What's the plan?",
//     date: "August 26, 2023",
//     time: "4 min read",
//     filter: "chakra"
//     },
//     {
//     img: imgSocial,
//     header: "Chakra, Panda and Ark - What's the plan?",
//     date: "August 26, 2023",
//     time: "4 min read",
//     filter: "chakra"
//     },
//     {
//     img: imgSocial,
//     header: "Chakra, Panda and Ark - What's the plan?",
//     date: "August 26, 2023",
//     time: "4 min read",
//     filter: "chakra"
//     },
//     {
//     img: imgSocial,
//     header: "Chakra, Panda and Ark - What's the plan?",
//     date: "August 26, 2023",
//     time: "4 min read",
//     filter: "chakra"
//     },
//     {
//     img: imgSocial,
//     header: "Chakra, Panda and Ark - What's the plan?",
//     date: "August 26, 2023",
//     time: "4 min read",
//     filter: "chakra"
//     },    
//     {
//     img: imgSocial,
//     header: "Chakra, Panda and Ark - What's the plan?",
//     date: "August 26, 2023",
//     time: "4 min read",
//     filter: "chakra"
//     }
// ]

const Blog = () => {
    const [filterState, setFilter] = useState<string>("All");
    const [searchInput, setSearchInput] = useState<string>("");
    const [data, setData] = useState<any[]>();
    const [mainData, setMainData] = useState<any[]>();

    useEffect(() => {
        fetch("/api/getAll")
        .then(res => {
            return res.json()
        })
        .then((resData) => {
            console.log(resData)
            setMainData(resData)
            console.log(mainData)
            setData(resData)
            console.log(data)
        }).catch(error => {
            console.log(error)
        })
    }, [])
    
    // useEffect(() => {setFilter("All");}, []);
    // useEffect(() => {
    //     if (filterState == "All") {
    //         setData(mainData);
    //         console.log(mainData)
    //     } else {
    //         let endFilter = mainData.filter((element) => element.data.tags == filterState);
    //         setData(endFilter);
    //     }
    // }, [filterState]);
    // useEffect(() => {
    //     let endFilter = mainData.filter(element => {
    //         return element?.header.toLowerCase().startsWith(searchInput.toLowerCase());
    //     });
    //     setData(endFilter);
    // }, [searchInput]);
    return <>
        <main className="w-full h-fit flex flex-col pt-24 gap-[100px]">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col">
                    <h1 className="text-[5rem] font-semibold text-[#d6d3d1]">
                        Blog
                    </h1>
                </div>
                <div>
                    <h4 className="text-[1.5rem] max-w-[680px] text-[#d6d3d1]">
                        Here's a list of articles, thoughts and ideas around topics like design systems, accessibility, state machines and lots more.
                    </h4>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-row">
                        <input type="text" placeholder="Search blog" className="min-w-[200px] max-w-[650px] w-full h-[60px] text-[20px] pl-[20px] bg-[#292524] text-[#e7e5e4] rounded-l-lg rounded-bl-lg" onChange={(e) => setSearchInput(e.target.value)} />
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
            <div className="w-full min-h-screen h-fit flex flex-row flex-wrap justify-start items-start gap-[10px]">
                {data?.length !== 0 ? data?.map(
                    (item: any, key: number) => (<CardBlog id={item.data.id} header={item.data.title} img={item.data.img} date={item.data.date} time={item.data.time} key={key} filter={item.filter} />)
                )
                    : <p className="text-[#e7e5e4]">No results found that match your query. Sorry</p>}
            </div>
        </main>
    </>;
}
export default Blog;