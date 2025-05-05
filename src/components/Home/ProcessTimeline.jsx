import { useState } from "react"
import {
  FileText,
  FolderKanban,
  Paintbrush,
  Code,
  Search,
  Rocket,
  Headphones,
  RefreshCw
} from "lucide-react"
import ProjectInitiation from "./Process/ProjectInitiation"
import Gathering from "./Process/Gathering"

const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(1)

  const steps = [
    {
      id: 1,
      number: "01",
      title: "Project Initiation",
      icon: <FileText className="w-5 h-5" />,
      goal: "Align stakeholders on project objectives.",
      content: [
        "Define project scope and objectives.",
        "Identify and prioritize stakeholders.",
        "Assess risks and mitigation strategies.",
        "Create Project Charter.",
      ],
    },
    {
      id: 2,
      number: "02",
      title: "Requirements Gathering and Analysis",
      icon: <FileText className="w-5 h-5" />,
      goal: "Define product requirements clearly.",
      content: [
        "Conduct workshops and interviews.",
        "Create a product backlog or requirements document.",
        "Define user stories with acceptance criteria.",
        "Prioritize features.",
      ],
    },
    {
      id: 3,
      number: "03",
      title: "Planning and Design",
      icon: <FolderKanban className="w-5 h-5" />,
      goal: "Plan and design system architecture.",
      content: [
        "Develop project plan and timeline.",
        "Design system architecture and tech stack.",
        "Identify risks and mitigation strategies.",
      ],
    },
    {
      id: 4,
      number: "04",
      title: "UI/UX Design",
      icon: <Paintbrush className="w-5 h-5" />,
      goal: "Design an intuitive user interface.",
      content: [
        "Create wireframes, UI mockups, and user flows.",
        "Conduct user testing.",
        "Iterate design based on feedback.",
        "UI/UX design for development.",
      ],
    },
    {
      id: 5,
      number: "05",
      title: "Development and Coding",
      icon: <Code className="w-5 h-5" />,
      goal: "Build the product.",
      content: [
        "Develop in sprints or phases.",
        "Use version control (Git) and peer reviews.",
        "Implement unit and integration tests.",
        "Complete core features.",
      ],
    },
    {
      id: 6,
      number: "06",
      title: "Quality Assurance and Testing",
      icon: <Search className="w-5 h-5" />,
      goal: "Ensure product quality.",
      content: [
        "Create and execute test cases.",
        "Perform manual and automated tests.",
        "Fix bugs and validate functionality.",
        "Perform load and security testing.",
      ],
    },
    {
      id: 7,
      number: "07",
      title: "Deployment and Go Live",
      icon: <Rocket className="w-5 h-5" />,
      goal: "Deploy the product successfully.",
      content: [
        "Execute deployment (blue/green or rolling).",
        "Provide end-user training.",
        "Monitor post-deployment.",
        "Ensure smooth transition to production.",
      ],
    },
    {
      id: 8,
      number: "08",
      title: "Product Monitoring and Support",
      icon: <Headphones className="w-5 h-5" />,
      goal: "Ensure continuous product performance.",
      content: [
        "Develop project plan and timeline.",
        "Provide end-user training.",
        "Monitor post-deployment.",
        "Ensure smooth transition to production.",
      ],
    },
    {
      id: 9,
      number: "09",
      title: "Continuous Improvement",
      icon: <RefreshCw className="w-5 h-5" />,
      goal: "Enhance the product based on feedback.",
      content: [
        "Execute deployment (blue/green or rolling).",
        "Identify improvement areas.",
        "Implement enhancements.",
        "Provide end-user training.",
        "Monitor post-deployment.",
      ],
    },
  ]

  const handleStepClick = (stepId) => {
    setActiveStep(stepId)
  }

  return (
    <div className="w-full mx-auto p-8 bg-white font-sans">
      <h2 className="text-center -mb-3">
        <span className="bg-gradient-to-r from-[#4885EF] via-[#C560CF] to-[#DA5381] bg-clip-text text-transparent text-[52px] font-normal">
          Our Process
        </span>
      </h2>
      <h3 className="text-center text-[52px] font-normal mb-12 text-black">
        Our Proven Path to Project Success
      </h3>
      <div className="flex flex-row gap-8">
        {/* Left sidebar with steps */}
        <div className="md:w-1/3 relative">
          <div className="absolute left-[20%] -translate-[1.6px] top-0 bottom-0 w-[2px] bg-[#ECEEF3]"></div>

          <div className="space-y-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative grid grid-cols-5 cursor-pointer"
                onClick={() => handleStepClick(step.id)}
              >
                <div className={`h-full col-span-1 flex items-center ${step.id === activeStep && "border-r-[2px] border-[#CC41E4]"}`}>
                  <h1 className={`font-medium text-[36px] px-1 mb-4 ${step.id !== activeStep && "text-[#E6E6E6]"}`}>0{idx + 1}</h1>
                </div>
                <div className="col-span-4 px-4">
                  <div>{step.icon}</div>
                  <h4
                    className={`mt-2 text-[20px] font-medium ${step.id === activeStep
                      ? "bg-gradient-to-r from-[#C0AEFE] via-[#6D39F3] to-[#3956EB] text-transparent bg-clip-text"
                      : "text-[#18191C]"
                      }`}
                  >
                    {step.title}
                  </h4>
                  {step.id === activeStep && step.goal && (
                    <p className="text-sm text-gray-600 mt-2">
                      <span className="font-medium text-[16px]">Goal: </span>
                      {step.goal}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right content area */}
        {activeStep === 1 && (
          <ProjectInitiation data={steps.find((s) => s.id === activeStep)?.content || []} />
        )}

        <Gathering/>
      </div>
    </div>
  )
}

export default ProcessTimeline
