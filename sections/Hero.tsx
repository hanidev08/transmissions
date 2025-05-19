import one from "@/assets/Confident Woman in Suit.jpeg";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="container overflow-hidden">
        <div className=" h-[calc(85vh-56px)] md:h-[calc(90vh-64px)] flex items-center justify-center relative bg-white">
          <h1 className=" text-7xl md:text-8xl lg:text-9xl uppercase flex flex-col mix-blend-difference text-white z-20">
            <span>&nbsp;Transim</span>
            <span>Issions</span>
          </h1>
          <div className="absolute top-[20%] lg:top-[-10%] max-w-[250px] max-h-[250px] lg:max-w-[400px] lg:max-h-[400px] ">
            <Image src={one} alt="ong" className=" size-full" />
          </div>
        </div>
        <div className="flex justify-center items-center w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] mx-auto z-30 bg-white">
          <p className=" text-sm md:text-xl lg:text-2xl text-center mix-blend-difference text-white z-20">
            An education project around the legacy of Cristobal Balenciaga
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
