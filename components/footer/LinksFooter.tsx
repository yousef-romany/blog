import Link from "next/link";

interface data {
    icon: any;
    text: string;
    route: string;
}
const LinksFooter = ({icon, text, route}: data) => {
    return <>
        <li>
            <Link href={route}>
                <div className="flex justify-center items-center gap-5 text-[#d6d3d1]">
                    { icon }
                    <h3 className="border-b-2 border-[#d6d3d1]">
                        { text }
                    </h3>
                </div>
            </Link>
        </li>
    </>
}
export default LinksFooter;