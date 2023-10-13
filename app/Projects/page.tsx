"use client"
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import img1 from "../../public/Images/chakra-ui.webp";
import img2 from "../../public/Images/pro-chakra-ui.webp";
import { FeaturedCard } from "@/components/mainPage/Featureds";
interface dataOfFeatured {
    header: string;
    icons: any[][];
    text: string;
    col: string[][];
    img: any;
  }
  const dataFeatured: dataOfFeatured[] = [
    {
      header: "Chakra UI",
      icons: [[<AiFillGithub size={28} />, "GitHub", "/"], [<TbWorld size={28} />,"WebSite", "/"]],
      text: "Chakra UI is an award-winning component library that provides the building blocks needed to create an accessible app with speed ⚡️.",
      col: [["DOWNLOADS", "2M/mo"],["GITHUB STARS", "33.1K"]],
      img: img1
    },
    {
      header: "Chakra UI Pro",
      icons: [[<TbWorld size={28} />,"WebSite", "/"]],
      text: "Chakra UI Pro provides a set of beautiful and responsive React components to build your application, marketing and eCommerce pages quicker.",
      col: [["CUSTOMERS", "4,500+"],["WEBSITE", "200K/mo"]],
      img: img2
    },
  ];
  
const Projects = () => {
    return <>
        <main className="w-full h-fit flex flex-col pt-24 gap-[100px]">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col">
                    <h1 className="text-[5rem] font-semibold text-[#d6d3d1]">
                        Blog
                    </h1>
                </div>
                <div>
                    <h4 className="text-[1.2rem] max-w-[680px] text-[#d6d3d1]">
                        My primary focus these days is <Link href={"/"} className="font-bold border-b-2 border-[#d09e72]">Chakra UI</Link>  — a component libary that provides the building blocks needed to create an accessible app fast ⚡️.
                    </h4>
                    <br />
                    <h4 className="text-[1.2rem] max-w-[680px] text-[#d6d3d1]">
                        I'm passionate about building <strong>component systems</strong> that help teams ship products faster by bridging the gap between design and code.
                    </h4>
                    <br />
                    <h4 className="text-[1.2rem] max-w-[680px] text-[#d6d3d1]">
                        Here are some projects I've worked on that I think are worth mentioning.
                    </h4>
                </div>
            </div>
            <div className="w-full min-h-screen h-fit flex flex-col justify-center items-start gap-[100px]">
                {dataFeatured.map((item: dataOfFeatured, key: number) => ( <FeaturedCard header={item.header} icons={item.icons} text={item.text} col={item.col} img={item.img} key={key} /> ))}
            </div>
        </main>
    </>;
}
export default Projects