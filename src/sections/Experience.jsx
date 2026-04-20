import React from "react";
import { workExperiences } from "../constants";

const Experience = () => {
  return (
    <section id="experience" className="py-28 relative">

      {/* Glow Background */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-500/10 blur-3xl rounded-full -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h3 className="head-text">My Work Experience</h3>
          <p className="text-neutral-400 mt-4">
            My journey through real-world experiences, learning, and building impactful solutions along the way.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-[2px] 
          bg-gradient-to-b from-purple-500 via-purple-400/40 to-transparent 
          md:-translate-x-1/2 z-0" />

          <div className="space-y-16 relative z-10">

            {workExperiences.map((item, index) => (
              <div
                key={item.id}
                className="relative flex flex-col items-center md:grid md:grid-cols-2 gap-8"
              >

                {/* Dot */}
                <div className="absolute left-5 md:left-1/2 top-2 w-3 h-3 bg-purple-400 rounded-full md:-translate-x-1/2 z-20">
                  <span className="absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-40" />
                </div>

                {/* Content */}
                <div
                  className={`w-full max-w-md mx-auto pl-10 md:pl-0 ${
                    index % 2 === 0
                      ? "md:text-right md:pr-12"
                      : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <div className="bg-black-200 border border-black-300 rounded-xl p-6 
                  transition-all duration-300 
                  hover:border-purple-400/40 
                  hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]">

                    <div className="flex items-center gap-3 mb-3 justify-start md:justify-end">
                      <p className="font-semibold text-white">{item.name}</p>
                    </div>

                    <p className="text-purple-300 font-medium">
                      {item.pos}
                    </p>

                    <p className="text-xs text-neutral-400 mb-3">
                      {item.duration}
                    </p>

                    <p className="text-neutral-400 text-sm">
                      {item.title}
                    </p>

                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;