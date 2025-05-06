export default function Improvement() {

    const data = [
        {
            id: "01",
            title: "Conduct workshops and interviews.",
        },
        {
            id: "02",
            title: "Design system architecture and tech stack.",
        },
        {
            id: "03",
            title: "Define user stories with acceptance criteria.",
        },
        {
            id: "04",
            title: "Prioritize features.",
        },
    ];


    return (
        <div className="relative md:w-3/4 bg-[#F6F6F9] rounded-[30px] overflow-hidden flex items-center justify-center">
            <div className="w-full overflow-hidden z-10">
                <div className="flex w-fit -translate-x-48 items-center gap-[45px] py-10">
                    {
                        data.map((item, idx) => {
                            return <div key={idx} className={`py-[37px] w-[413px] h-[397px] bg-white rounded-[37px] px-[43px] flex flex-col justify-between shadow-md`}>
                                <div>
                                    <h1 className={`font-normal text-black text-[40px]`}>{item.id}</h1>
                                </div>
                                <div>
                                    <h1 className="font-normal text-[40px] bg-gradient-to-r from-[#C0AEFE] via-[#6D39F3] to-[#3956EB] bg-clip-text text-transparent">
                                        {item.title}
                                    </h1>

                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className=" absolute -bottom-10 right-0 left-0">
                <img src="\gradients\gradient2.svg" className="w-full" alt="" />
            </div>
        </div>
    )
}
