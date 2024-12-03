import React from "react";
import { BriefcaseIcon } from "@heroicons/react/solid"; // Example using Heroicons

const Experience = ({ item }) => {
  return (
    <section id="experience" className="section bg-primary min-h-[500px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="section-title relative before:content-experience before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            My Experience
          </h2>
          <p className="subtitle">
            Here are some experiences I have gained recently.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-secondary rounded-xl shadow-md p-6 flex items-center gap-4">
            <div className="bg-gray-800 p-3 rounded-full">
              <BriefcaseIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Ready Networks LLC
              </h3>
              <p className="text-sm text-gray-300 mt-1">
                Role: Associate Software Engineer
              </p>
              <p className="text-sm text-gray-300 mt-1">
                Duration: April 2023 - Nov 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
