const dataTech: string[] = [
    "React",
    "TypeScript",
    "Next.js",
    "Figma",
    "Storybook",
    "XState",
    "Node.js",
    "Redux Toolkit",
    "MobX",
    "Sketch",
    "Invision",
    "Zeplin",
    "Prisma",
    "GraphQL"
] 

const Skills = () => {
    return <>
        <div className="flex flex-col w-full h-fit border-b-2 border-[#ffffff29] pb-16">
            <div>
                <h1 className="text-[3.75rem] text-[#e7e5e4] font-bold">
                    Tools & Softwares
                </h1>
                <p className="max-w-[45rem] text-[1.125rem] text-[#e7e5e4]">
                    Over the years, I had the opportunity to work with various software, tools and frameworks. Here are some of them:
                </p>
            </div>
            <ul className="flex flex-wrap justify-start w-full h-fit pt-5">
                {dataTech.map((item: string, key: number) => (
                    <li className="text-[#d09e72] text-[1.875rem] p-7" key={key}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    </>;
}
export default Skills;