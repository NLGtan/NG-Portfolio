import React, { Component } from "react";
import { motion } from "framer-motion"; // Import motion for animations
import { Footer } from "../Components/Footer";

export class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isInView: false, // Track if the section is in view
        };
        this.contactRef = React.createRef(); // Create a ref for the contact section
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        this.handleScroll(); // Check if in view on mount
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const { top, bottom } = this.contactRef.current.getBoundingClientRect();
        const isInView = top < window.innerHeight && bottom > 0; // Check if the section is in view
        this.setState({ isInView });
    };

    render() {
        const { isInView } = this.state;

        return (
            <section id="Contact" ref={this.contactRef} className="con-page absolute top-[4800px] w-[100%]">
                {/* Animated Heading */}
                <motion.h1
                    className="con-int font-sat font-thin text-9xl text-center pt-1 mb-[110px] mt-[50px]"
                    initial={{ opacity: 0, y: 100 }} 
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }} 
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    CONTACT ME
                </motion.h1>

                <div className="contact1 ml-[200px] pt-[50px] w-[900px]">
                    <motion.h2
                        className="con-par1 font-sat font-black text-[32px] md:text-[48px]"
                        initial={{ opacity: 0, y: 50 }} 
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.1 }}
                    >
                        Have an <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">awesome</span> idea?
                    </motion.h2>
                    <motion.h2
                        className="con-par1 font-sat font-black text-[32px] md:text-[48px]"
                        initial={{ opacity: 0, y: 50 }} 
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                    >
                        Let’s bring it to <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">life</span>.
                    </motion.h2>
                    <motion.p
                        className="con-par2 font-sat font-medium text-[16px] md:text-[20px] w-full md:w-[500px] text-gray-400 mt-4"
                        initial={{ opacity: 0, y: 50 }} 
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
                    >
                        I am looking for freelance opportunities or internships in startups, agencies, and design studios.
                    </motion.p>

                    <div className="contact-form mt-8 space-y-6 w-[400px]">
                        <div className="con-size w-[700px]">
                            <motion.div
                                className="flex row-span-2"
                                initial={{ opacity: 0, y: 50 }} 
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
                                transition={{ duration: 1.8, ease: "easeInOut", delay: 0.4 }}
                            >
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="block w-full border-b-2 border-gray-300 mr-[100px] py-2 focus:outline-none focus:border-purple-500"
                                />
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="block w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-purple-500"
                                />
                            </motion.div>
                            <motion.textarea
                                placeholder="Your Message"
                                className="block w-full border-b-2 border-gray-300 pt-20 pb-[100px] focus:outline-none focus:border-purple-500"
                                initial={{ opacity: 0, y: 50 }} 
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
                                transition={{ duration: 1.8, ease: "easeInOut", delay: 0.5 }}
                            />
                            <motion.button
                                type="submit"
                                className="mt-10 font-sat font-medium text-black border-2 border-black rounded-[30px] px-[34px] py-[15px] text-[15px] bg-transparent cursor-pointer shadow-[1px_4px_5px_0px_rgba(197,197,197,1)] transition-all duration-500 hover:bg-gradient-to-r hover:from-[#ED738F] hover:to-[#AB45CA] hover:text-white hover:border-transparent"
                                initial={{ opacity: 0, y: 50 }} 
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
                                transition={{ duration: 1.8, ease: "easeInOut", delay: 0.6 }}
                            >
                                Send Message
                            </motion.button>
                        </div>
                    </div>
                </div>

                <Footer />
            </section>
        );
    }
}
