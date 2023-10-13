const Stay = () => {
    return <>
        <div className="flex flex-col w-full h-fit border-b-2 border-[#ffffff29] pb-16">
            <div>
                <h1 className="text-[3.75rem] text-[#e7e5e4] font-bold">
                    Stay up to date
                </h1>
                <p className="max-w-[28rem] text-[1.125rem] text-[#e7e5e4]">
                    Get emails from me about web development, tech, and early access to new projects.
                </p>
            </div>
            <div className="flex gap-3 pl-0 p-4">
                <input type="text" className="bg-[#292524] text-[#e7e5e4] pl-[1.2rem] pt-[1.25rem] pb-[1.25rem] min-w-[250px] max-w-[480px] w-full rounded-xl" placeholder="Sage@apple.com" />
                <button className="bg-[#ad7f58] text-black font-bold text-[1.1rem] tracking-wide p-5 pl-8 pr-8 rounded-xl">Subscribe</button>
            </div>
            <p className="text-[#d6d3d1] text-[1.1rem]">8 subscribers</p>
        </div>
    </>;
}
export default Stay;