import { PiGithubLogoDuotone } from "react-icons/pi";
import { SiChakraui } from "react-icons/si";
import yourImage from "../public/Images/segun-adebayo-headshot.webp";
import Image from "next/image";
import LinksFooter from "@/components/footer/LinksFooter";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { RiNewspaperFill } from "react-icons/ri";
import user1 from "../public/Images/eric-siroker.webp";  
import user2 from "../public/Images/majd.webp";
import user3 from "../public/Images/martian-lee.webp";  
import user4 from "../public/Images/pablo-postigo.webp";
import UsersText from "@/components/mainPage/UsersText";
import { TbWorld } from "react-icons/tb";
import img1 from "../public/Images/chakra-ui.webp";
import img2 from "../public/Images/pro-chakra-ui.webp";
import imgSocial from "../public/Images/segun-adebayo-social.webp";
import {FeaturedCard, FeaturedTalk} from "../components/mainPage/Featureds";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Skills from "@/components/mainPage/Skills";
import Stay from "@/components/mainPage/Stay";

interface dataTypes {
  icon: any;
  text: string;
  route: string;
}
const data: dataTypes[] = [
  {
      icon: <AiOutlineLinkedin size={28} color={"#d09e72"} />,
      text: "LinkedIn",
      route: "/",
  },
  {
      icon: <AiFillGithub size={28} color={"#d09e72"} />,
      text: "Github",
      route: "/",
  },
  {
      icon: <MdEmail size={28} color={"#d09e72"} />,
      text: "Email",
      route: "/",
  },
  {
      icon: <RiNewspaperFill size={28} color={"#d09e72"} />,
      text: "Resume",
      route: "/",
  }
]
interface users {
  image: any;
  name: string;
  position: string;
  text: string[];
}
let dataUsers: users[] = [
  {
    image: user1,
    name: "Eric Siroker",
    position: "CTO, Scribe.ai",
    text: ["Segun is a thoughtful communicator and fearless engineer. He's not afraid to question assumptions, striving to deliver the best experience for customers as well as keeping the codebase as approachable and maintainable as possible."]
  },
  {
    image: user2,
    name: "Martian Lee",
    position: "Martian Lee",
    text: ["Segun is the spearhead of our design system. Both designers and developers consult him for UI guidelines.","He’s a great mentor. Not only does he share knowledge with the team, but he also invites talents from the open-source community to give sessions.","I'm looking forward to working with him again in the future."]
  },
  {
    image: user3,
    name: "Majd Al-Rawashdeh",
    position: "Principal Designer, Coursera",
    text: ["I’ve worked with Segun at Tradeling to establish a foundation for the product design system. Segun is an outstanding design engineer partner, his design background played a crucial role in developing a framework that serve internal / external users and help the product to scale.","He champions accessibility, challenge rational, use cases, and push the boundaries to ensure a better outcome. What we’ve achieved at such small scale of a team wouldn’t be feasible without his support and guidance.","I hope we will cross path in the future, and get the opportunity to work with him again."]
  },
  {
    image: user4,
    name: "Pablo Postigo",
    position: "CEO, Frontity",
    text: ["Segun is one of the most talented and passionate engineers I've had the chance to work with. During his time at Frontity he has been proactive and not afraid of new challenges.","He acts like an owner, takes responsibility for his actions, always looks for excellence. He has the capacity to deliver world-class products and his great communication skills, both spoken and written, make him a great team member."]
  },
]
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

interface dataTypeFeaturedTalks { 
  img: any;
  header: string;
  text: string;
  host: string;
}

const dataFeaturedTalks: dataTypeFeaturedTalks [] = [
  {
    img: imgSocial,
    header: "Coding at the speed of design with Chakra UI",
    text: "Part Designer, Part UX Engineer, Segun is all about accessibility, inclusion and empathy.",
    host: "The ReadMe Project"
  },
  {
    img: imgSocial,
    header: "Coding at the speed of design with Chakra UI",
    text: "Part Designer, Part UX Engineer, Segun is all about accessibility, inclusion and empathy.",
    host: "The ReadMe Project"
  },
  {
    img: imgSocial,
    header: "Coding at the speed of design with Chakra UI",
    text: "Part Designer, Part UX Engineer, Segun is all about accessibility, inclusion and empathy.",
    host: "The ReadMe Project"
  },
  {
    img: imgSocial,
    header: "Coding at the speed of design with Chakra UI",
    text: "Part Designer, Part UX Engineer, Segun is all about accessibility, inclusion and empathy.",
    host: "The ReadMe Project"
  },
]

export default function Home() {
  return (
    <main className="w-full h-fit flex flex-col pt-24 gap-[100px]">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col">
              <h1 className="text-[7rem] font-semibold text-white">
                Segun Adebayo
              </h1>
              <h3 className="text-[3rem] font-bold text-[#d09e72] racking-wide">UI engineer & product designer</h3>
          </div>
          <div>
            <h4 className="text-[1.5rem] max-w-[680px] text-white">
              I'm passionate about 🎨 design systems, ♿️ accessibility, ⚙️ state machines, and 😍 user experience
            </h4>
          </div>
          <div className="flex justify-start items-center gap-8">
            <div className="flex gap-4 justify-center items-center">
                <PiGithubLogoDuotone size={30} color={"#d09e72"} />
                <h1 className="text-white text-[1.25rem]">Github Star</h1>
            </div>
            <div className="flex gap-4 justify-center items-center">
                <SiChakraui size={30} color={"#d09e72"} />
                <h1 className="text-white text-[1.25rem]">Creator, Chakra UI</h1>
            </div>
          </div>
        </div>
        <div className="w-full  labtop:h-screen tablet:h-fit mobile:h-fit pb-5 pt-5 flex labtop:flex-row tablet:flex-col mobile:flex-col justify-between labtop:items-center tablet:items-start mobile:items-start gap-5">
          <div className="flex flex-col labtop:w-[50%] tablet:w-fit mobile:w-fit">
            <div className="flex justify-start items-center gap-5 flex-wrap">
              <div>
                <Image src={yourImage} alt="my Image" className="max-w-[100px] h-auto rounded-full labtop:block tablet:hidden mobile:hidden" />
              </div>
              <h1 className="text-[#d6d3d1] labtop:text-[6.25rem] tablet:text-[5rem] mobile:text-[3.5rem] font-bold">I design</h1>
            </div>
            <h1 className="text-[#d09e72] labtop:text-[6.25rem] tablet:text-[5rem] mobile:text-[3.5rem] font-bold leading-[100px]">
              component systems
            </h1>
          </div>
          <div className="flex flex-col labtop:w-[50%] tablet:w-fit mobile:w-fit h-fit justify-center items-center gap-10">
            <div className="flex flex-col gap-5">
              <p className="text-[#d6d3d1] text-[1.5rem] labtop:max-w-[400px] tablet:max-w-full mobile:max-w-full">
                An engineer with a strong design background, specializing in design systems, accessibility and interface design for digital products
              </p>
              <ul className="w-[280px] h-fit flex flex-wrap justify-between items-center gap-5">
                {
                    data.map((item: dataTypes, key: number) => (<LinksFooter icon={item.icon} text={item.text} route={item.route} key={key} />))
                }
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full min-h-screen h-fit flex flex-wrap justify-evenly items-start gap-5">
          { dataUsers.map((item: users, key: number) => ( <UsersText image={item.image} name={item.name} position={item.position} text={item.text} key={key} />)) }
        </div>
        <div className="w-full min-h-screen h-fit flex flex-col justify-center items-start gap-[100px]">
          <h1 className="text-[3.75rem] text-[#d6d3d1] font-bold">Featured Projects</h1>
          {dataFeatured.map((item: dataOfFeatured, key: number) => ( <FeaturedCard header={item.header} icons={item.icons} text={item.text} col={item.col} img={item.img} key={key} /> ))}
        </div>
        <div className="w-full min-h-screen h-fit flex flex-col justify-center items-start gap-[100px]">
          <h1 className="text-[3.75rem] text-[#d6d3d1] font-bold">Featured Talks</h1>

          {dataFeaturedTalks.map((item: dataTypeFeaturedTalks, key: number) => ( <FeaturedTalk filter="" header={item.header} img={item.img} text={item.text} host={item.host} key={key} /> ))}

          <Link href={"/talks"}>
            <div className="w-fit flex gap-3 items-center hover:gap-4">
                <p className="text-[#d09e72] font-bold text-[1.5rem]">View all Talks</p>
                <FiArrowRight size={30} color="#d09e72" />
            </div>
          </Link>
        </div> 
        <Skills />
        <Stay />
    </main>
  )
}
