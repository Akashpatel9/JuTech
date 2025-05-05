import { useState } from 'react';

export default function WorkflowDiagram() {
  const workflowSteps = [
    {
      id: "01",
      text: "Create wireframes, UI mockups, and user flows."
    },
    {
      id: "02",
      text: "Conduct user testing."
    },
    {
      id: "03",
      text: "Iterate design based on feedback."
    },
    {
      id: "04",
      text: "UI/UX design for development."
    }
  ];

  return (
    <div className="relative md:w-3/4 bg-[#F6F6F9] rounded-[30px] overflow-hidden">
      <div className="z-10 flex flex-col items-center w-[425px] justify-between h-full pt-16 gap-10 mx-auto">
        {workflowSteps.map((step, index) => (
          <div key={step.id} className="z-10 flex flex-col items-center w-full h-[259px]">
            {/* Card with gradient background */}
            <div className="relative h-[198px] rounded-[37px] bg-gradient-to-br from-indigo-400 to-purple-600 text-white text-center shadow-lg w-full">
              {/* Circle with step number */}
              <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-[104px] aspect-square rounded-full bg-gradient-to-b from-[#C0AEFE] via-[#6D39F3] to-[#3956EB ] text-white font-medium border-5 border-[#F4F4F7]">
                {step.id}
              </div>
              <div className="font-normal text-[32px] mt-16">
                {step.text}
              </div>
            </div>
            {/* Connector line (if not the last item) */}
            {index < workflowSteps.length - 1 && (
              <div className="w-1 h-12 mt-1 bg-purple-400"></div>
            )}
          </div>
        ))}
      </div>
      <div className=" absolute -bottom-10 right-0 left-0">
        <img src="\gradients\gradient2.svg" className="w-full" alt="" />
      </div>
    </div>
  );
}