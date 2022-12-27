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
                Jaya Vishwakarma
                              </h2>
              <p className="mb-4 text-accent">MERN Stack Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                I Learned full-stack web development with a specialisation
                in MERN stack from Masai School. I have completed diploma in Computer Science & Engg in 2021 from,
                Kaushambi UttarPradesh. I was learning to code after completed 10th and liked it
                so much so that I got keen to build a career in coding. So I
                joined Masai School I have worked on clone-making projects at
                Masai which has not only helped improve my technical skills but
                also soft skills like teamwork and communication.
                <br />
                <br />I am now a more confident web developer and person.
                I like to learn new things.
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
