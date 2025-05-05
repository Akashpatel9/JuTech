const data = [
    { id: "01", title: "Develop in sprints or phases." },
    { id: "02", title: "Design system architecture and tech stack." },
    { id: "03", title: "Define user stories with acceptance criteria." },
    { id: "04", title: "Prioritize features." },
];

export default function Development() {
    return (
        <div className="relative md:w-3/4 bg-[#F6F6F9] rounded-[30px] overflow-hidden">
            <div className="relative top-1/2 left-1/2">
                {data.map((item) => (
                    <div
                        className=" absolute w-[546px] h-[343px] -translate-y-1/2 -translate-x-1/2 bg-gradient-to-br from-[#C0AEFE] via-[#6D39F3] to-[#3956EB] text-white px-[37px] py-[43px] rounded-[37px] z-10 flex flex-col justify-between"
                    >
                        <h1 className="text-[40px] font-normal">{item.id}</h1>
                        <p className="text-[40px] font-normal">{item.title}</p>
                    </div>
                ))}
            </div>
            <div className=" absolute -bottom-10 right-0 left-0">
        <img src="\gradients\gradient2.svg" className="w-full" alt="" />
      </div>
        </div>
    );
}
