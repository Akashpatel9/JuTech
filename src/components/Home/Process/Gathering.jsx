import React from 'react';

const steps = [
  "Conduct workshops and interviews.",
  "Create a product backlog or requirements document.",
  "Define user stories with acceptance criteria.",
  "Prioritize features.",
];

const Gathering = () => {
  return (
    <div className="md:w-2/3 bg-gray-50 rounded-xl p-8 relative overflow-hidden">
      <svg className="absolute w-full h-full z-0 pointer-events-none">
        <path
          d="M120 80 C180 120, 180 160, 120 200
             M120 200 C180 240, 180 280, 120 320
             M120 320 C180 360, 180 400, 120 440"
          stroke="#ccc"
          strokeDasharray="5,5"
          fill="none"
        />
      </svg>

      <div className="relative z-10 flex flex-col items-start space-y-20">
        {steps.map((text, index) => (
          <div
            key={index}
            className={`relative bg-white p-4 rounded-xl shadow-md w-64 transform ${
              index % 2 === 0 ? 'translate-x-0 -rotate-3' : 'translate-x-10 rotate-3'
            }`}
            style={{ top: index * 60 }}
          >
            <div className="text-sm font-bold mb-1">0{index + 1}</div>
            <div className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white text-sm p-2 rounded">
              {text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gathering;
