import React, { Component } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import { Blob2 } from '../Components/blobs/Blob2';
import img1 from './img/skillimg1.png';
import { Blob3 } from '../Components/blobs/Blob3';
import img2 from './img/skillimg2.png';
import py from './img/Python.png';
import js from './img/js.png';
import html from './img/html.png';
import css from './img/css.png';
import re from './img/React.png';
import md from './img/Mongodb.png';
import fig from './img/Figma.png';
import fm from './img/framer.png';

export class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isInView: false, // Track when the section comes into view
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const scrollY = window.scrollY;
        const isInView = scrollY > 700 && scrollY < 1800; // Adjust scrollY range as needed

        if (isInView !== this.state.isInView) {
            this.setState({ isInView });
        }
    };

    render() {
        const { isInView } = this.state;

        return (
            <section>
                {/* SKILLS section */}
                <section id="Skill" className="bg-[#171717] text-white w-full absolute top-[800px]">
                    <motion.h1 
                        className="font-sat font-thin text-9xl text-center pt-20 mb-20 mt-[10px]"
                        initial={{ opacity: 0, y: 100 }} // Bottom to top slide
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }} // Slide up when in view
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    >
                        SKILLS
                    </motion.h1>

                    <div className="font-sat ml-[140px]">
                        <motion.h3
                            className="skillpar1 font-sat font-bold text-5xl"
                            initial={{ opacity: 0, x: -100 }} // Slide in from left
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }} // Slide out
                            transition={{ duration: 3, ease: "easeInOut" }}
                        >
                            my expertise.
                        </motion.h3>
                        <motion.p
                            className="skillpar1 font-sat w-[530px] pt-5 text-lg"
                            initial={{ opacity: 0, x: -100 }} // Slide in from left
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }} // Slide out
                            transition={{ duration: 3, ease: "easeInOut" }}
                        >
                            I specialize in building scalable web applications from the 
                            ground up. My skill set spans front-end technologies like 
                            HTML, CSS, and JavaScript frameworks, as well as back-
                            end development with Node.js, Python, and database 
                            management. I thrive in creating seamless user 
                            experiences while ensuring optimal performance and 
                            security on the server side.
                        </motion.p>
                    </div>
                    <motion.div
                        className="font-sat font-bold text-5xl pr-0 pt-10 mb-20 ml-[250px] cursor-pointer"
                        initial={{ opacity: 0, x: -100 }} // Slide in from left
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }} // Slide out
                        transition={{ duration: 3, ease: "easeInOut" }}
                    >
                        <ul className="expertise font-sat w-[500px]">
                            {["Web Development", "Web Design", "UI/UX Design", "Full Stack Dev", "ML/AI"].map((item, index) => (
                                <li // Changed from motion.li to li
                                    key={index}
                                    className="pb-3 font-pop hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 from-1% hover:to-purple-500 transform hover:translate-x-20 hover:scale-110 transition-all duration-500 delay-100"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.img
                        src={img1}
                        className="hide-on-mobile absolute top-[360px] right-[120px] z-10 w-[450px] h-[450px] animate-levitate2"
                        alt=""
                        initial={{ x: 200, opacity: 0 }} // Slide in from right
                        animate={isInView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }} // Slide out
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                    <Blob2/>
                </section>


                {/* Tool box section */}
                <div className="skillpar2 absolute top-[1750px] bg-white text-black w-[100%]">
                    <div className="font-sat">
                        <motion.h3
                            className="flow font-sat font-bold text-5xl text-right pt-20 w-[1300px]"
                            initial={{ opacity: 0, x: 100 }} // Slide in from right
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }} // Slide out
                            transition={{ duration: 3, ease: "easeInOut" }}
                        >
                            my digital tool box.
                        </motion.h3>
                        <motion.p
                            className="skillpar-2 font-sat font-medium w-[450px] pt-5 text-lg ml-[870px]"
                            initial={{ opacity: 0, x: 100 }} // Slide in from right
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }} // Slide out
                            transition={{ duration: 3, ease: "easeInOut" }}
                        >
                            This curated collection of tools is designed to streamline 
                            every aspect of full-stack development, from front-end 
                            design to back-end infrastructure. Whether I craft dynamic 
                            user interfaces, managing databases, or deploying robust 
                            applications, these tools will empower me to work smarter 
                            and more effectively. 
                        </motion.p>
                    </div>

          {/* Tool List */}
          <div className=".skill-list font-sat font-bold text-[40px] pr-0 pt-10 cursor-pointer">
            <ul className="tool-list font-sat w-[700px] ml-[860px]">
              <div className="flex flex-row gap-5">
                <div>
                  <li className="flex items-center space-x-4 pb-8 font-pop text-gray-400 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 from-2% hover:to-purple-500 transform hover:translate-x-8 hover:scale-110 transition-all duration-500 delay-100">
                    <img src={py} className="pr-3 animate-levitate1" alt="" />
                    Python
                  </li>
                  <li className="flex items-center space-x-4 pb-8 font-pop text-gray-400 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 from-1% hover:to-purple-500 transform hover:translate-x-8 hover:scale-110 transition-all duration-500 delay-100">
                    <img src={js} className="pr-3 animate-levitate2" alt="" />
                    JavaScript
                  </li>
                  <li className="flex items-center space-x-4 pb-8 font-pop text-gray-400 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 from-1% hover:to-purple-500 transform hover:translate-x-8 hover:scale-110 transition-all duration-500 delay-100">
                    <img src={html} className="pr-3 animate-levitate1" alt="" />
                    HTML
                  </li>
                  <li className="flex items-center space-x-4 font-pop text-gray-400 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 from-1% hover:to-purple-500 transform hover:translate-x-8 hover:scale-110 transition-all duration-500 delay-100">
                    <img src={css} className="pr-3 animate-levitate2" alt="" />
                    CSS
                  </li>
                </div>

                <div>
                  <li className="flex items-center space-x-4 text-gray-400 pb-5 font-pop hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 from-2% hover:to-purple-500 transform hover:translate-x-8 hover:scale-110 transition-all duration-500 delay-100">
                    <img src={re} className="pr-2 animate-levitate2" alt="" />
                    React
                  </li>
                  <li className="flex items-center space-x-4 text-gray-400 pb-6 font-pop hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 from-1% hover:to-purple-500 transform hover:translate-x-8 hover:scale-110 transition-all duration-500 delay-100">
                    <img src={md} className="pr-2 animate-levitate1" alt="" />
                    MongoDB
                  </li>
                  <li className="flex items-center space-x-4 text-gray-400 ml-[5px] pb-8 font-pop hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 from-1% hover:to-purple-500 transform hover:translate-x-8 hover:scale-110 transition-all duration-500 delay-100">
                    <img src={fig} className="pr-4 animate-levitate2" alt="" />
                    Figma
                  </li>
                  <li className="flex items-center space-x-4 text-gray-400 ml-[8px] font-pop hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 from-1% hover:to-purple-500 transform hover:translate-x-8 hover:scale-110 transition-all duration-500 delay-100">
                    <img src={fm} className="pr-5 animate-levitate1" alt="" />
                    Framer Motion
                  </li>
                </div>
              </div>
            </ul>
          </div>

                    <motion.img
                        src={img2}
                        className="hide-on-mobile absolute top-[100px] left-[180px] z-10 w-[450px] h-[400px] animate-levitate4"
                        alt=""
                        initial={{ x: -200, opacity: 0 }} // Slide in from left
                        animate={isInView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }} // Slide out
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    />

                    <Blob3/>

                </div>
            </section>
        );
    }
}
