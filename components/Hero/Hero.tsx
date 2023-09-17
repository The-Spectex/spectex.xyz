'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import coding from "@/assets/images/web/coding.png";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="pt-10 lg:pt-20 pb-16 lg:pb-32 bg-blue-bg">
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="text-center lg:text-left lg:ml-20 lg:mr-32 py-20 lg:py-0">
          <h1
            className="text-4xl lg:text-7xl font-black"
            data-aos="fade-in"
            data-aos-duration="1000"
          >
            Building Your <span className="text-green-400">Future</span> With{" "}
            <span className="text-blue-500">Technology</span>
          </h1>
          <p
            className="font-medium pt-2"
            data-aos-duration="500"
            data-aos="slide-right"
          >
            We&apos;re dedicated to building the digital future. Whether you need
            custom software, cloud services, or anything in between, we&apos;ve got
            you covered. Let&apos;s unleash the power of technology and shape the
            future together.
          </p>
        </div>
        <div className="hidden lg:block" data-aos="fade-left">
          <Image className="rounded-3xl" src={coding} width={1200} height={1200} alt="background" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
