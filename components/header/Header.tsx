"use client"
import Image from "next/image";
import logo from "../../public/Images/logo.webp";
import { BiSolidMicrophone } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { TfiWrite } from "react-icons/tfi";
import { BsFillBoxFill } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import MenuHeader from "./MenuHeader";
import { useRef, useState } from "react";
import Link from "next/link";
interface dataType {
    icon: any;
    text: string;
    route: string;
};
const data: dataType[] = [
    {
        icon: <BiSolidMicrophone size={20} color={"#d09e72"} />,
        text: "Talks",
        route: "/Talks"
    },
    {
        icon: <TfiWrite size={20} color={"#d09e72"} />,
        text: "Blog",
        route: "/Blog"
    },
    {
        icon: <BsFillBoxFill size={20} color={"#d09e72"} />,
        text: "Projects",
        route: "/Projects"
    },
    {
        icon: <BiCodeAlt size={20} color={"#d09e72"} />,
        text: "Snippets",
        route: "/Snippets"
    },
]

const Header = () => {
    let [statusMenu, setStatusMenu] = useState(true);
    const ulRef: any = useRef<HTMLUListElement>();
    const handleShowMenu = () => {
        ulRef.current.style.left = 0; 
        setStatusMenu(false)
    };
    const handleCloseMenu = () => {
        ulRef.current.style.left = "-200%";
        setStatusMenu(true)
    }
    return <>
        <div className="w-full h-[100px] flex justify-between items-center pl-[20px] pr-[20px]">
            <div className="w-fit h-fit p-[2px] rounded-full border-[3px] border-[#d09e72]">
                <Link href={"/"}>
                    <Image src={logo} alt="Logo" className="rounded-full" />
                </Link>
            </div>
            <div  className="labtop:hidden tablet:block mobile:block cursor-pointer">
                {
                    statusMenu ? <BiMenu size={30} color={'white'} onClick={handleShowMenu} /> : <AiOutlineClose size={30} color={'white'} onClick={handleCloseMenu} />
                }
            </div>
            <ul ref={ulRef} className="flex justify-center items-center gap-9 labtop:bg-transparent labtop:w-fit tablet:w-full mobile:w-full tablet:bg-[#292524] mobile:bg-[#292524] labtop:relative tablet:absolute mobile:absolute labtop:!left-0 labtop:bottom-0 labtop:flex-row tablet:bottom-0 tablet:flex-col mobile:left-[-200%] mobile:flex-col mobile:bottom-0 labtop:p-0 tablet:p-2 mobile:p-4">
                {
                    data?.map((item: dataType, key: number) => (
                        <MenuHeader icon={item.icon} text={item.text} route={item.route} key={key} />
                    ))
                }
            </ul>
        </div>
    </>;
}
export default Header;