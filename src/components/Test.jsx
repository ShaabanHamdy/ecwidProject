// import "./styles.css";
// import { LoremIpsum } from "./components/LoremIpsum";
import { motion, useScroll, Variants } from "framer-motion";
import { useRef } from "react";

export default function Test() {
  //   const { scrollYProgress } = useScroll();
  const carouselRef = useRef(null);
  const { scrollX } = useScroll({
    container: carouselRef,
  });
  return (
    <>
      <div className="perant">
        <motion.div ref={carouselRef} className="motion"></motion.div>
      </div>
    </>
  );
}

