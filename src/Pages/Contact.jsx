import React, { Component } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import arrow from "../Components/img/ArrowUp.png";
import { ReactComponent as Git } from "../Components/img/logo-github.svg";
import { ReactComponent as Lk } from "../Components/img/Linkedin-logo.svg";
import { ReactComponent as Ig } from "../Components/img/logo-instagram.svg";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { isInView: false };
    this.contactRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    this.handleScroll();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (!this.contactRef.current) return;
    const { top, bottom } = this.contactRef.current.getBoundingClientRect();
    const isInView = top < window.innerHeight && bottom > 0;
    this.setState({ isInView });
  };

  render() {
    const { isInView } = this.state;

    return (
      <section
        id="Let's Talk"
        data-theme="light"
        ref={this.contactRef}
        className="w-full bg-white scroll-mt-24 pt-24"
      >
        {/* Heading */}
        <motion.h1
          className="font-sat font-thin text-[clamp(2.25rem,6vw,4.5rem)] text-center pt-12 md:pt-16 pb-6 md:pb-10"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          CONTACT ME
        </motion.h1>

        {/* Main grid */}
        <div
          className="
            container max-w-7xl mx-auto
            px-6 md:px-10
            py-10 md:py-14 lg:py-20
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12
            gap-10 md:gap-14 lg:gap-16
          "
        >
          {/* LEFT — form and intro */}
          <div className="pt-2 lg:col-span-7">
            <motion.h2
              className="font-sat font-black text-[clamp(1.75rem,3.5vw,2.25rem)] leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.1 }}
            >
              Have an{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                awesome
              </span>{" "}
              idea?
            </motion.h2>

            <motion.h2
              className="font-sat font-black text-[clamp(1.75rem,3.5vw,2.25rem)] leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
            >
              Let’s bring it to{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                life
              </span>
              .
            </motion.h2>

            <motion.p
              className="font-sat text-[clamp(1rem,2vw,1.1rem)] text-gray-600 mt-4 md:mt-5 max-w-prose leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
            >
              I’m open for freelance opportunities or internships in startups,
              agencies, and design studios.
            </motion.p>

            {/* Form */}
            <div className="mt-8 mb-12 space-y-6 w-full max-w-xl">
              <motion.div
                className="flex flex-col md:flex-row gap-6"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
              >
                <input
                  type="text"
                  placeholder="Your name"
                  className="flex-1 border-b-2 border-gray-300 py-4 md:py-5 text-base md:text-lg focus:outline-none focus:border-purple-500"
                  aria-label="Your name"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 border-b-2 border-gray-300 py-4 md:py-5 text-base md:text-lg focus:outline-none focus:border-purple-500"
                  aria-label="Your email"
                />
              </motion.div>

              <motion.textarea
                placeholder="Your message"
                className="w-full border-b-2 border-gray-300 h-36 md:h-40 py-4 md:py-5 text-base md:text-lg focus:outline-none focus:border-purple-500 resize-y"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
                aria-label="Your message"
              />
              <motion.button
                type="submit"
                className="mt-2 flex items-center justify-center
             mx-auto md:mx-0
             w-fit md:w-auto
             px-6 md:px-10 py-3 md:py-3.5
             text-sm md:text-base
             font-sat font-medium text-black border-2 border-black rounded-full
             bg-transparent cursor-pointer shadow transition-all duration-500
             hover:bg-gradient-to-r hover:from-[#ED738F] hover:to-[#AB45CA]
             hover:text-white hover:border-transparent"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.6 }}
              >
                Send Message
              </motion.button>
            </div>
          </div>

          {/* RIGHT — details / social / location */}
          <motion.div
            className="  space-y-8 md:space-y-10 lg:space-y-12
                         lg:col-span-5
                         lg:pl-16   /* more padding left */
                         lg:ml-auto /* push it further right */"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
          >
            {/* Contact details */}
            <div>
              <h3 className="font-sat font-black text-[clamp(1.25rem,2.2vw,1.5rem)] pb-2">
                Contact Details
              </h3>
              <div className="flex flex-col space-y-2 text-[clamp(1rem,1.8vw,0rem)]">
                <a
                  href="mailto:gaborne.neithanlouisn@gmail.com"
                  className="relative group w-fit"
                >
                  gaborne.neithanlouisn@gmail.com
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-500 group-hover:w-full" />
                </a>
                <a href="tel:+639686494396" className="relative group w-fit">
                  +63 968 649 4396
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-500 group-hover:w-full" />
                </a>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h3 className="font-sat font-black text-[clamp(1.25rem,2.2vw,1.5rem)] pb-2">
                My Digital Spaces
              </h3>
              <div className="flex flex-col space-y-4 text-[clamp(1rem,1.8vw,0rem)]">
                <div className="flex items-center gap-3">
                  <Git className="w-[24px] h-[24px]" />
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/NLGtan"
                    className="relative group w-fit"
                  >
                    Github
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Lk className="w-[24px] h-[24px]" />
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/"
                    className="relative group w-fit"
                  >
                    LinkedIn
                    <span className="font-sat absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Ig className="w-[24px] h-[24px]" />
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/_neyyt/"
                    className="relative group w-fit"
                  >
                    Instagram
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="font-sat font-black text-[clamp(1.25rem,2.2vw,1.5rem)] pb-2">
                Location
              </h3>
              <div className="flex flex-col space-y-3 text-[clamp(1rem,1.8vw,0rem)]">
                <span className="relative group w-fit">
                  Iloilo, Philippines
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
                </span>
                <span className="relative group w-fit">
                  5000
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer bar */}
        <div className="mt-10 md:mt-14 lg:mt-16 border-t px-6 md:px-8 py-4 max-w-8xl mx-auto flex flex-col md:flex-row items-center gap-4">
          <p className="font-sat text-[clamp(0.55rem,1.5vw,0.70rem)]">
            ©2024 <span className="font-black">NEITHAN LOUIS GABORNE</span>
          </p>

          <Link
            to="About me"
            spy
            smooth
            offset={-88}
            duration={500}
            className="font-pop font-black text-[clamp(1rem,1.5vw,1rem)] flex items-center gap-2 md:ml-auto cursor-pointer"
          >
            BACK TO TOP
            <img src={arrow} alt="Arrow Up" className="h-4" />
          </Link>
        </div>
      </section>
    );
  }
}
