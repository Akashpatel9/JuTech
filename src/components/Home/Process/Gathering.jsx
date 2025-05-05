export default function Gathering() {
  const steps = [
    {
      number: "01",
      title: "Conduct workshops and interviews",
      position: "top-[50px] left-16 rotate-[6.82deg]",
    },
    {
      number: "02",
      title: "Create a product backlog or requirements document",
      position: "top-[230px] right-16 rotate-[-9.9deg]",
    },
    {
      number: "03",
      title: "Define user stories with acceptance criteria",
      position: "top-[480px] left-16 rotate-[6.82deg]",
    },
    {
      number: "04",
      title: "Prioritize features",
      position: "top-[730px] right-16 rotate-[-9.9deg]  ",
    },
  ]

  return (
    <div className="relative md:w-3/4 bg-[#F6F6F9] rounded-[30px] overflow-hidden">
      {/* Process cards */}
      {steps.map((step, index) => (
        <div
          key={index}
          className={`absolute ${step.position} z-10 w-[336px] bg-white shadow-xl rounded-[30px] px-[40px] py-[30px]`}
        >
          <div className="font-normal text-[32px] text-center mb-5">{step.number}</div>
          <div className="bg-gradient-to-r from-[#C0AEFE] via-[#6D39F3] to-[#3956EB] text-white py-[25px] px-[34px] rounded-[26px] font-normal text-[24px]">{step.title}</div>
        </div>
      ))}

      <div className=" absolute -bottom-10 right-0 left-0">
        <img src="\gradients\gradient2.svg" className="w-full" alt="" />
      </div>
    </div>
  )
}
