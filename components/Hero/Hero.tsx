import React from "react";
import Image from "next/image";

const Hero = () => {
    const bg = 'https://cdn.spectex.xyz/images/web/coding.png'
  return (
    <section className="pt-40 pb-52 bg-blue-bg">
      <div className="flex justify-around">
        <div className="ml-44 mr-72">
          <h1 className="text-7xl font-black" data-aos="fade-in" data-aos-duration="1000">
            Building Your <span className="text-green-400">Future</span> With{" "}
            <span className="text-blue-500">Technology</span>
          </h1>
          <p className=" font-medium pt-2" data-aos-duration="500" data-aos="slide-right">
            We're dedicated to building the digital future. Whether you need
            custom software, cloud services, or anything in between, we've got
            you covered. Let's unleash the power of technology and shape the
            future together.
          </p>
        </div>
        <div className="-my-20" data-aos="fade-in">
            <Image className="rounded-3xl" src={bg} width={1200} height={1200} alt="background"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
