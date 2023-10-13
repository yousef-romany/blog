"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";


interface data {
    icon: any;
    text: string;
    route: string;
}
const MenuHeader = ({ icon, text, route }: data) => {
    const  pathname = usePathname();
    
    return <>
        <li className="labtop:w-fit tablet:w-full mobile:w-full p-6 labtop:border-b-0 tablet:border-b-2 mobile:border-b-2 border-[#4b4847] ">
            <Link href={route}>
                <div className={route !== pathname ? "p-3 flex gap-2 justify-start items-center group w-full" : "flex gap-2 justify-start items-center group labtop:border-t-[4px] mobile:border-b-[0px] labtop:border-[#34302f] bg-[#292524] labtop:rounded-lg tablet:rounded-none mobile:rounded-none w-full p-3"}>
                    <div>
                        {icon} 
                    </div>
                    <h1 className="text-[19px] group-hover:text-[#d09e72] text-[#d6d3d1]">
                        {text}
                    </h1>
                </div>
            </Link>
        </li>
    </>;
};

export default MenuHeader;