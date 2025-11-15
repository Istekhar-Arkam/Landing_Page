import { useEffect, useRef } from 'react';
import IA from "../assets/IA.png"
import { motion } from 'framer-motion';
import  {gsap}  from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    // GSAP ScrollTrigger animation for image slide from left
    gsap.fromTo(
      imageRef.current,
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  // Framer Motion variants for text fade-in
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id="home" className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-[#e5ab78]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content with Framer Motion fade-in */}
          <div className="space-y-6">
            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
            >
              Welcome to the{' '}
              <span className="text-primary">Future</span>
            </motion.h1>

            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-xl md:text-2xl text-gray-600 leading-relaxed"
            >
              Transform your ideas into reality with cutting-edge technology
              and innovative solutions.
            </motion.p>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-lg text-gray-500"
            >
              Join thousands of satisfied customers who have elevated their
              business to new heights.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button className="bg-white text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 
              hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-white">
                Get Started
              </button>
              <button className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-semibold border-2 hover:text-black hover:bg-blue-600  transition-colors shadow-lg border-white">
                Learn More
              </button>
            </motion.div>
          </div>

          {/* Image with GSAP ScrollTrigger slide from left */}
          <div ref={imageRef} className="relative">
            <div className="w-full h-96 lg:h-[500px] bg-linear-to-br from-primary to-secondary rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
              {/* Placeholder for image - replace with actual image */}
              <div className="text-black text-center p-8">
               <img src={IA} 
                className="w-52 h-48 mx-auto mb-4 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
               alt="" 
               />
                
                <p className="text-2xl font-bold">Your Amazing Product</p>
               
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary rounded-full opacity-50 blur-xl"></div>
          </div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Performance</h3>
            <p className="text-gray-600">
              Lightning-fast load times and seamless user experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Secure & Reliable</h3>
            <p className="text-gray-600">
              Enterprise-grade security with 99.9% uptime guarantee.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Customization</h3>
            <p className="text-gray-600">
              Fully customizable to match your brand and requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
