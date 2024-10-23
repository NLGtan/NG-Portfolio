import React, { Component } from "react";
import { motion } from "framer-motion"; // Import motion for animations
import pro1 from "./img/pro1.png";
import pro2 from "./img/pro2.png";
import pro3 from "./img/pro3.png";

export class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isInView: false, // Track if the section is in view
        };
        this.projectsRef = React.createRef(); // Create a ref for the projects section
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        this.handleScroll(); // Check if in view on mount
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const { top, bottom } = this.projectsRef.current.getBoundingClientRect();
        const isInView = top < window.innerHeight && bottom > 0; // Check if the section is in view
        this.setState({ isInView });
    };

    render() {
        const { isInView } = this.state;

        return (
            <section id="Projects" ref={this.projectsRef} className="proj-layout absolute top-[2500px] bg-[#171717] w-[100%] flex flex-col items-center">

                {/* Animated Heading */}
                <motion.h1
                    className="proj-int font-sat font-thin text-9xl text-center text-white pt-20 mb-40"
                    initial={{ opacity: 0, y: 100 }} 
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }} 
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    PROJECTS
                </motion.h1>

                {/* Project 1 */}
                <div className="proj1 font-pop font-regular text-white mb-40">
                    <a href="https://zentry.com/" target="_blank" rel="noopener noreferrer">
                        <div className="container1 mb-5 w-[1400px] h-[700px] object-cover overflow-hidden relative transition-all duration-500 hover:rounded-[30px]">
                            <div className="image-wrapper w-full h-full">
                                <img
                                    src={pro1}
                                    alt=""
                                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                        </div>
                    </a>
                    <p className="flex row-span-2 mb-1">
                        <span className="border-2 border-[#A1A1A1] rounded-[30px] px-5 py-2 text-[#A1A1A1] text-[20px] mr-4">2023</span>
                        <span className="border-2 border-[#A1A1A1] rounded-[30px] px-6 py-2 text-[#A1A1A1] text-[20px]">HTML • CSS • JavaScript</span>
                    </p>
                    <p className="font-medium text-[30px]">Zentry</p>
                    <p className="font-medium text-[#CFCFCF] text-[24px]">Web Design • Frontend Development</p>
                </div>

                {/* Project 2 */}
                <div className="proj2 font-pop font-regular text-white -ml-[600px] mb-40">
                    <a href="https://bucket-list-checker.onrender.com/" target="_blank" rel="noopener noreferrer">
                        <div className="container2 mb-5 w-[800px] h-[550px] object-cover overflow-hidden relative transition-all duration-500 hover:rounded-[30px]">
                            <div className="image-wrapper w-full h-full">
                                <img
                                    src={pro2}
                                    alt=""
                                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                        </div>
                    </a>
                    <p className="flex row-span-2 mb-1">
                        <span className="border-2 border-[#A1A1A1] rounded-[30px] px-5 py-2 text-[#A1A1A1] text-[20px] mr-4">2023</span>
                        <span className="border-2 border-[#A1A1A1] rounded-[30px] px-6 py-2 text-[#A1A1A1] text-[20px]">HTML • CSS • JavaScript</span>
                    </p>
                    <p className="font-medium text-[30px]">Bucket List Checker</p>
                    <p className="font-medium text-[#CFCFCF] text-[24px]">Web Design • Fullstack Development</p>
                </div>

                {/* Project 3 */}
                <div className="proj3 absolute top-[1250px] right-[60px] font-pop font-regular text-white">
                    <a href="https://www.pixlspace.io/" target="_blank" rel="noopener noreferrer">
                        <div className="container3 mb-5 w-[550px] h-[300px] object-cover overflow-hidden relative transition-all duration-500 hover:rounded-[30px]">
                            <div className="image-wrapper w-full h-full">
                                <img
                                    src={pro3}
                                    alt=""
                                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                        </div>
                    </a>
                    <p className="flex row-span-2 mb-1">
                        <span className="border-2 border-[#A1A1A1] rounded-[30px] px-5 py-2 text-[#A1A1A1] text-[20px] mr-4">2023</span>
                        <span className="border-2 border-[#A1A1A1] rounded-[30px] px-6 py-2 text-[#A1A1A1] text-[20px]">HTML • CSS • JavaScript</span>
                    </p>
                    <p className="font-medium text-[30px] text-white">PIXLSPACE</p>
                    <p className="font-medium text-[#CFCFCF] text-[24px]">Web Design • Fullstack Development</p>
                </div>
            </section>
        );
    }
}
