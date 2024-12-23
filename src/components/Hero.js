import React from "react";

import img from "../assets/img/my.jpeg";

const Hero = () => {
  const handleResumeClick = () => {
    // Open resume in a new tab
    window.open(
      "https://drive.google.com/file/d/1mtWrOfDb7dT_ihrP3hRr927JN4gsEUoe/view?usp=sharing",
      "_blank",
      "noopener,noreferrer"
    );

    // Trigger download
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1mtWrOfDb7dT_ihrP3hRr927JN4gsEUoe";
    link.download = "Jaya_Vishwakarma_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-accent text-md mb-[22px]">
              Hey, I'm Jaya Vishwakarma! 👋
            </p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              I'm a Professional Software Developer.
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left"></p>
            <button
              style={{ borderRadius: "5px" }}
              className="btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all"
              onClick={handleResumeClick}
            >
              Resume
            </button>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img
              style={{
                marginBottom: "60px",
                borderRadius: "5px",
                boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
              src={img}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
