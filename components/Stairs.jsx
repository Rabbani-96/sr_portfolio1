import { animate, motion } from "framer-motion";
//Variants
const StairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};
// calcaulate the reversed index for staggered delay
const reverseIndex = (index) => {
  const totalSteps = 6; // Total no.of stairs
  return totalSteps - index - 1;
};
const Stairs = () => {
  return (
    <>
      {/* Render 6 motion divs, each represents o steps of stairs.
     each div will have same animation defined by the StairAnimation object
     the delay for each div is calculated dynamically based on reversed index
     creating staggered effect with decreasing delay for each subsequent stair.
    */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={StairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};
export default Stairs;
