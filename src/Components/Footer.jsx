import React, { Component } from "react";
import { motion } from "framer-motion"; // Import motion for animations
import { Link } from "react-scroll"; // Import Link from react-scroll for smooth scrolling
import arrow from "./img/ArrowUp.png";
import { ReactComponent as Git } from "./img/logo-github.svg";
import { ReactComponent as Lk } from "./img/Linkedin-logo.svg";
import { ReactComponent as Ig } from "./img/logo-instagram.svg";

export class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isInView: false, // Track if the footer is in view
        };
        this.footerRef = React.createRef(); // Create a ref for the footer section
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        this.handleScroll(); // Check if in view on mount
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const { top, bottom } = this.footerRef.current.getBoundingClientRect();
        const isInView = top < window.innerHeight && bottom > 0; // Check if the section is in view
        this.setState({ isInView });
    };

    render() {
        const { isInView } = this.state;

        return (
            <section ref={this.footerRef}>
                <motion.div
                    className="footer font-sat absolute top-[350px] right-[200px] space-y-[100px]"
                    initial={{ opacity: 0, x: 100 }} // Start from the right
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }} // Slide in/out
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    <div className="con-deets">
                        <h3 className="con-sub-title font-black text-[28px] pb-2">Contact Details</h3>
                        <div className="con-cont flex flex-col space-y-1">
                            <span className="relative group">
                                <span>gaborne.neithanlouisn@gmail</span>
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-500 group-hover:w-[210px]"></span>
                            </span>
                            <span className="relative group">
                                <span>+68 968 649 4396</span>
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-500 group-hover:w-[140px]"></span>
                            </span>
                        </div>
                    </div>

                    <div className="soc-med">
                        <h3 className="con-sub-title font-black text-[28px] pb-2">My Digital Space</h3>
                        <div className="con-cont flex flex-col space-y-4">
                            <div className="flex items-center space-x-2">
                                <Git className="w-[25px] h-[25px]" />
                                <span className="relative group">
                                    <span>Github</span>
                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Lk className="w-[25px] h-[25px]" />
                                <span className="relative group">
                                    <span>Linked</span>
                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Ig className="w-[25px] h-[25px]" />
                                <span className="relative group">
                                    <span>Instagram</span>
                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="loc">
                        <h3 className="con-sub-title font-black text-[28px] pb-2">Location</h3>
                        <div className="con-cont flex flex-col space-y-4">
                            <span className="relative group">
                                <span>Iloilo, Philippines</span>
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-[120px]"></span>
                            </span>

                            <span className="relative group">
                                <span>5000</span>
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-[40px]"></span>
                            </span>
                        </div>
                    </div>
                </motion.div>

                <div className="foot bottom-0 left-0 w-full flex flex-row items-center pt-10 p-4 bg-white">
                    <p className="foot1 font-sat font-medium ml-10">©2024 <span className="font-black">NEITHAN LOUIS GABORNE</span></p>
                    
                    <Link
                        to="Home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="foot2 font-pop font-black flex flex-row space-x-1 ml-auto items-end cursor-pointer"
                    >
                        BACK TO TOP
                        <img src={arrow} alt="Arrow Up" className="self-end pr-10 pl-2" />
                    </Link>
                </div>
            </section>
        );
    }
}
