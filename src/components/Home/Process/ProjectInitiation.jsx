import React from 'react'

const ProjectInitiation = ({data}) => {
    return (
        <div className="relative md:w-3/4 bg-[#F6F6F9] rounded-[30px] overflow-hidden px-[85px] py-[188px]">
            {/* Gradient background overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/30 via-purple-50/30 to-pink-50/30" />

            {/* Vertical timeline */}
            <div className="relative z-10">
                <div className="absolute left-6 top-0 bottom-0 w-px border-dashed border-l border-blue-200" />

                {/* Content for active step */}
                <div className="space-y-12">
                    {data.map((item, index) => (
                            <div key={index} className="flex items-start relative">
                                {/* Timeline circle */}
                                <div className="absolute left-6 transform -translate-x-1/2">
                                    <div
                                        className={`w-12 h-12 rounded-full flex items-center justify-center ${index === 0 ? "bg-white border-4 border-blue-100" : "bg-white border border-gray-200"
                                            }`}
                                    >
                                        <div className={`w-3 h-3 rounded-full ${index === 0 ? "bg-purple-500" : "bg-gray-200"}`}></div>
                                    </div>
                                </div>

                                {/* Content card */}
                                <div className="ml-16 bg-white rounded-lg shadow-sm p-5 w-full">
                                    <span className="text-gray-800">{item}</span>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectInitiation