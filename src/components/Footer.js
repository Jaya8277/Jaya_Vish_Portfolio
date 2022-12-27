import React from 'react';

// import social data
import { social } from '../data';

// import logo
import Logo from '../assets/img/j.png';

const Footer = () => {
  return (
    <footer className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
          <div className='flex space-x-6 items-center justify-center'>
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className='text-accent text-base' href={href} key={index} target="_blank">
                  {icon}
                </a>
              );
            })}
          </div>
          <div>
          <img  style={{height:"90px"}} src={Logo} alt='' />
          </div>
          <p className='text-paragraph opacity-80 text-[15px]'>
           
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
