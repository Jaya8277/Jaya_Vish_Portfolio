import React from "react";

// import img
import Image from "../assets/img/3.jpg";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                WHO I AM ?
                              </h2>
              <p className="mb-4 text-accent">I'm a Professional Software Developer.</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
              My name is Jaya Vishwakarma, a dedicated and passionate programmer. I thrive on learning quickly and have a strong self-motivated approach to acquiring new skills. Exploring emerging technologies excites me, and I am deeply enthusiastic about solving complex problems. I enjoy working across various layers of web application development and aspire to make the web more accessible to everyone. My expertise lies in JavaScript, which I utilize to accomplish a wide range of tasks. I am open to opportunities that align with my skills and interests, eager to contribute and grow professionally.
              </p>
            </div>
            <a href="https://www.linkedin.com/in/jaya-vishwakarma-312418225/" target="_blank">
             
              <button className="btn btn-md bg-accent hover:bg-secondary-hover transition-all">
                Contact me
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
