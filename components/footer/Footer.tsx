import Link from "next/link";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import LinksFooter from "./LinksFooter";
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
    }
]
const Footer = () => {
    return <>
        <div className="w-full h-[200px] flex flex-col gap-8 pt-16 pb-16">
            <div className="w-full flex flex-col gap-8">
                <h1 className="text-[30px] text-[#d6d3d1] font-bold">Segun Adebayo</h1>
                <h3 className="text-[#d6d3d1]">Passionate UI engineer looking to bridge the gap between design and code</h3>
                <ul className="w-fit h-fit flex flex-row gap-5">
                    {
                        data.map((item: dataTypes, key: number) => (<LinksFooter icon={item.icon} text={item.text} route={item.route} key={key} />))
                    }
                </ul>
            </div>
            <h1 className="text-[#d6d3d1] text-[16px]">All rights reserved © Segun Adebayo 2023</h1>
        </div>
    </>;
}
export default Footer;