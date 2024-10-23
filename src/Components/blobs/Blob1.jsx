import React, { Component } from "react";
import { motion } from "framer-motion";

export class Blob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true, // Track visibility
      previousScrollY: 0, // Track previous scroll position to detect scroll direction
    };
  }

  componentDidMount() {
    // Add scroll event listener to trigger animations on scroll
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    // Clean up event listener when the component unmounts
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const currentScrollY = window.scrollY;
    const { previousScrollY } = this.state;

    // Detect scroll direction
    const isScrollingUp = currentScrollY < previousScrollY;
    const isVisible = currentScrollY < 50 || isScrollingUp; // Blob is visible if scroll is less than 100px or scrolling up

    this.setState({
      isVisible,
      previousScrollY: currentScrollY, // Update previous scroll position
    });
  };

  render() {
    const { isVisible } = this.state;

    return (
      <motion.div
        className="hide-on-mobile blob animate-levitate"
        initial={{ x: '0px', opacity: 0 }} // Start off-screen
        animate={{
          x: isVisible ? '-5vw' : '0vw', // Slide in/out based on visibility
          opacity: isVisible ? 1 : 0, // Fade in/out
        }}
        transition={{ duration: 0.1, ease: "easeInOut" }} // Smooth transition
      />
    );
  }
}
