import React from 'react';

// import skill data
import { skills } from '../data';

const Skills = () => {
  return (
    <section className='bg-tertiary py-12' id="skills">
      <div className='container mx-auto'>
      <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-skills relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Skills
          </h2>
          <p className="subtitle">
            You can see my skills over here
          </p>
        </div>
        <div
          className='grid grid-cols-8 md:grid-flow-col'
        >
          {skills.map((skill, index) => {
            return (
              <div
                className='flex items-center justify-center'
                key={index}
              >
                <img className='lg:h-20' src={skill.image} alt='' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
