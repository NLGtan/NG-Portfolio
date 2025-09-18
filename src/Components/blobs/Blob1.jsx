import React, { Component } from "react";
import { motion } from "framer-motion";

export class Blob extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: true, previousScrollY: 0 };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const y = window.scrollY;
    const isScrollingUp = y < this.state.previousScrollY;
    const isVisible = y < 50 || isScrollingUp;
    this.setState({ isVisible, previousScrollY: y });
  };

  render() {
    const { isVisible } = this.state;
    return (
      <motion.div
        className="hide-on-mobile blob"
        initial={{ x: "0vw", opacity: 0 }}
        animate={{ x: isVisible ? "-5vw" : "0vw", opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    );
  }
}
