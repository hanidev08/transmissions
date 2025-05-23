import Image from "next/image";
import one from "@/assets/Elegant Portrait Close-Up.jpeg";

const About = () => {
  return (
    <section className=" py-12">
      <div className="container">
        <div className=" flex justify-center items-center">
          <h1 className=" text-4xl uppercase text-center tracking-tighter font-light">
            <span>Transimissions</span>
            <br />
            <span>Cristobal</span>
            <br />
            <span>Balenciaga</span>
            <br />
            <span>Museum</span>
            <br />
          </h1>
        </div>
        <div className=" relative flex justify-center items-center mt-5">
          <Image src={one} alt="one" className=" w-[200px] object-cover" />
        </div>
        <div className=" flex justify-center items-center mt-5">
          <h1 className=" text-4xl uppercase text-center tracking-tighter font-light">
            <span>Heritage And</span>
            <br />
            <span>New Creation</span>
          </h1>
        </div>
        <hr className=" mt-20" />
        <h1 className=" text-6xl mt-2">01.</h1>
        <h3 className=" text-3xl font-cormorant-sans italic font-medium">
          Programme
        </h3>
        <p className=" text-[20px] mt-10 font-medium">
          &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The
          contemporary nature of Cristóbal Balenciaga’s legacy is a permanent
          source of inspiration for fashion and the Cristóbal Balenciaga Museum
          understands that it is within its mission to share its knowledge of
          Balenciaga’s work, technique and values to present and future
          creators.
        </p>
      </div>
    </section>
  );
};

export default About;
