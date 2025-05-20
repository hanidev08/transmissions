"use client";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Portfolio",
    href: "#portfolio",
  },
  {
    label: "About",
    href: "#About",
  },
];
const slideUp = {
  initial: {
    y: "100%",
  },
  open: {
    y: "0%",
    transition: { duration: 0.5 },
  },
  closed: {
    y: "100%",
    transition: { duration: 0.5 },
  },
};

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [navScope, navAnimate] = useAnimate();

  const description = useRef(null);
  const isInView = useInView(description);

  useEffect(() => {
    if (isActive) {
      navAnimate(
        navScope.current,
        {
          height: "100%",
        },
        {
          duration: 0.7,
          ease: "easeInOut",
        }
      );
    } else {
      navAnimate(navScope.current, {
        height: 0,
      });
    }
  }, [navScope, navAnimate, isActive]);

  return (
    <header>
      <div
        className=" fixed top-0 left-0 h-0 w-full overflow-hidden bg-stone-900 z-20
      "
        ref={navScope}
      >
        <div className=" container h-full flex flex-col justify-between">
          <nav className="mt-20" ref={description}>
            {navItems.map(({ label, href }) => (
              <a
                href={href}
                key={label}
                className=" text-white relative flex flex-col overflow-hidden"
              >
                <motion.span
                  variants={slideUp}
                  animate={isInView ? "open" : "closed"}
                  className=" text-5xl lg:text-6xl  flex items-start justify-start "
                >
                  <div className="group cursor-pointer relative overflow-hidden [perspective:800px] text-white flex items-center justify-center">
                    <p
                      className="transition-all duration-[1200ms] [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] 
              group-hover:[transform:rotateX(90deg)] group-hover:opacity-0 [transform-origin:top_center]"
                    >
                      {label}
                    </p>
                    <p
                      className="font-cormorant-sans italic absolute transition-all duration-[1200ms] [transition-timing-function:cubic-bezier(0.76,0,0.24,1)]
               opacity-0 group-hover:opacity-100 group-hover:[transform:rotateX(0deg)_translateY(0)] [transform:rotateX(-90deg)_translateY(9px)] [transform-origin:bottom_center]"
                    >
                      {label}
                    </p>
                  </div>
                </motion.span>
              </a>
            ))}
          </nav>
          <div className=" mb-5 font-semibold">
            <ul className=" text-white">
              <li className="">Resources</li>
              <li>Discover the Museum</li>
              <li>Dark Mode</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container relative z-30">
        <div className=" flex justify-between items-center h-14 md:h-16">
          <div className="w-32 h-5 cursor-pointer relative overflow-hidden">
            {/* <div className=" uppercase text-sm md:text-[16px] font-bold tracking-tighter">
              Transmissions
            </div> */}
            <motion.div
              animate={{
                top: isActive ? "-100%" : "0",
              }}
              transition={{
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1],
              }}
              className=" relative w-full h-full"
            >
              <div className=" w-full h-full flex items-center justify-center uppercase">
                <p className="uppercase text-sm md:text-[16px] font-bold tracking-tighter">
                  Transmissions
                </p>
              </div>
              <div className=" w-full h-full flex items-center justify-center uppercase">
                <p className="absolute top-full uppercase text-sm md:text-[16px] font-bold tracking-tighter text-white">
                  Transmissions
                </p>
              </div>
            </motion.div>
          </div>
          <div className=" flex items-center gap-2">
            {/* <button className=" uppercase text-sm md:text-[16px] font-bold tracking-tighter">Menu</button> */}
            <div
              onClick={() => {
                setIsActive(!isActive);
              }}
              className=" w-12 h-5 cursor-pointer relative overflow-hidden "
            >
              <motion.div
                animate={{
                  top: isActive ? "-100%" : "0",
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className=" relative w-full h-full"
              >
                <div className=" w-full h-full flex items-center justify-center uppercase">
                  <p className=" text-sm font-semibold">Menu</p>
                </div>
                <div className="w-full h-full flex items-center justify-center uppercase">
                  <p className="text-sm text-white font-semibold absolute top-full ">
                    Close
                  </p>
                </div>
              </motion.div>
            </div>
            <div
              className={`bg-black w-2.5 h-2.5 rounded-full ${
                isActive && " bg-white"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
