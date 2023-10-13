import { AiOutlineLinkedin } from "react-icons/ai";
import Image from "next/image";
interface users {
    image: any;
    name: string;
    position: string;
    text: string[];
  }
const UsersText = ({ image, text, name, position }: users) => {
    return <>
        <div className="flex flex-col justify-start items-center border-t-[4px] border-[#34302f] bg-[#292524] rounded-2xl w-fit p-6 labtop:w-fit tablet:w-full mobile:w-full">
            <div className="w-full h-[90px] flex justify-between items-start">
              <div className="flex gap-4">
                <Image src={image} alt="img user" className="rounded-full w-[40px] h-[40px]" />
                <div>
                  <h1 className="text-white text-[20px]">{name}</h1>
                  <h4 className="text-[#d6d3d1] text-[16px]">{position}</h4>
                </div>
              </div>
              <div className="text-[#d09e72] flex">
                <AiOutlineLinkedin size={28} color={"#d09e72"} />
                <p className="labtop:block tablet:hidden mobile:hidden">
                  LinkedIn
                </p>
              </div>
            </div>
            <div className="max-w-[492px] flex flex-col gap-4">
              { text.map((item: string, key: number) => (<p className="text-[#d6d3d1]" key={key}>{item}</p>)) }
            </div>
        </div>
    </>;
};
export default UsersText;