import React from 'react';
import facebook from '../assets/facebook.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';
import NK from '../assets/NK.pdf';
import hero from '../assets/hero.png'


const Hero = () => {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col'>
      <div
        className='md:h-[420px] md:w-[340px] h-[660px] w-[580px] right-56 bg-gradient-to-r from-red-600
        via-blue-600 to-green-400 absolute rounded-full transform rotate-12 top-8
        shadow-[0_0_100px_rgba(255,165,0,0.7)] z-0'
        aria-hidden='true'
      ></div>
      <section
      data-aos = 'fade-up'
      data-aos-delay = '250' className='text-gray-500 body-font z-10'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div
            className='relative lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col
            md:items-start md:text-left mb-16 md:mb-0 items-center text-center'
          >
            <div 
            data-aos = 'fade-up'
            data-aos-delay = '400'
            className='flex space-x-4' aria-label='Social media links'>
              <a href="#" aria-label='Facebook'>
                <img src={facebook}
                  alt="facebook" className='w-14 h-14 hover:scale-110 transition-transform'
                />
              </a>
              <a href="https://github.com/dashboard" aria-label='github'>
                <img src={github}
                  alt="github" className='w-14 h-14 hover:scale-110 transition-transform'
                />
              </a>
              <a href="https://www.linkedin.com/in/navanetha-krishnan-s-71143126a" aria-label='linkedin'>
                <img src={linkedin}
                  alt="linkedin" className='w-14 h-14 hover:scale-110 transition-transform'
                />
              </a>
              <a href="https://www.instagram.com/_nk_official_14?igsh=cG43dDF0MHQwbGUy" aria-label='instagram'>
                <img src={instagram}
                  alt="instagram" className='w-14 h-14 hover:scale-110 transition-transform' />
              </a>
            </div>
            <h1 className='title-font sm:text-6xl text-4xl mb-4 font-bild text-gray-900'>
              Hi! I'm <span className='text-red-600'>Navanetha Krishnan S</span>
            </h1>
            <h2 className='sm:text-3xl mb-4 font-bold text-blue-950'>
              Mern Stack Developer
            </h2>
            <p className='mb-8 leading-relaxed text-black max-w-lg'>
            Hi, I'm Navanetha Krishnan S, a passionate and driven "Web Developer" with a strong interest in Mern Stack Development. I enjoy solving real-world problems through technology and continuously seek opportunities to learn and grow.
            </p>
            <div className='flex justify-center'>
            <a href={NK} download='NK_CV_pdf' className='inline-flex text-white bg-red-500 border-0 py-2 px-6 
            focus:outline-none hover:bg-red-700 rounded-full text-lg hover:shadow-[0_0_20px_rgba(225,100,100,0.5)] transition-all'>Download CV
            </a>
            </div>
          </div>
          <div
          data-aos = 'fade-left'
          data-aos-delay = '500'
          className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
            <img src={hero} alt="Navanetha Krishnan S" className='object-cover object-right rounded-full w-350 h-100 border-6 border-white shadow-xl transform translate-x-10'
            width={320}
            height={260}
            loading='eager' />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Hero;

