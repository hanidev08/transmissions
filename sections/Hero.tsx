"use client";
import one from "@/assets/Confident Woman in Suit.jpeg";
import tow from "@/assets/Elegant Portrait Close-Up.jpeg";
import three from "@/assets/Elegant Evening Portrait.jpeg";
import four from "@/assets/Pregnant Woman in Flower Field.jpeg";
import five from "@/assets/Stylish Woman Portrait.jpeg";
import six from "@/assets/Serene Maternity Portrait.jpeg";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = [one.src, tow.src, three.src, four.src, five.src, six.src];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
 
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="container overflow-hidden">
        <div className=" h-[calc(85vh-56px)] md:h-[calc(90vh-64px)] flex items-center justify-center relative bg-white">
          <h1 className=" text-7xl md:text-8xl lg:text-9xl uppercase flex flex-col mix-blend-difference text-white z-10">
            <span>&nbsp;Transim</span>
            <span>Issions</span>
          </h1>
          <div className="absolute top-[20%] lg:top-[0%]">
            <div className="relative w-[250px] h-[350px] lg:w-[500px] lg:h-[500px]">
              {images.map((src, index) => (
                <motion.img
                  key={index}
                  src={src}
                  alt={`img-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === current ? 1 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] mx-auto z-30 bg-white">
          <p className=" text-sm md:text-xl lg:text-2xl text-center mix-blend-difference text-white z-10">
            An education project around the legacy of Cristobal Balenciaga
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
