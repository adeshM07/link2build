import React from "react";
import "./App.css";
import easy from "./assets/easy.png";
import equip from "./assets/equip.png";
import fast from "./assets/fast.png";
import material from "./assets/material.png";

const Landing = () => {
  const features = [
    {
      icon: material,
      title: "Materials",
      description: "Bricks, cement, steel, pipes, electrical & more",
    },
    {
      icon: equip, // Using Send for Equipment/Heavy Machinery (often self-propelled)
      title: "Equipment",
      description: "Excavators, cranes, mixers, pumps on rent",
    },
    {
      icon: easy,
      title: "Easy Booking",
      description: "Compare prices, check availability, book instantly",
    },
    {
      icon: fast,
      title: "Delivery",
      description: "Reliable logistics & on-time delivery",
    },
  ];
  return (
    <>
      <div className=" ">
        <div
          id="innerBanner"
          className="  leading-10 h-[45vh]  md:h-[35vh] lg:h-[50vh] flex flex-col justify-end"
        >
          <div
            id="innerDiv"
            className="
    relative
    mx-5 lg:mx-10
    rounded-t-3xl
    flex flex-col justify-center
    px-5
     md:px-12
     h-[43vh]
     md:h-[33vh]
    lg:h-[47vh]

    bg-transparent
    border border-white/20
    shadow-xl
    overflow-hidden
  "
          >
            {/* Faded yellow overlay only on top */}
            <div
              className="
      absolute inset-0
      bg-gradient-to-b
      from-yellow-100/40
      to-transparent
      pointer-events-none
    "
            />

            {/* Content */}
            <div className="relative z-10">
              <p className="text-6xl lg:text-8xl font-black mb-2 leading-none">
                Link2Build
              </p>
              <p className="text-xl lg:text-2xl font-semibold mb-6">
                Your Complete Construction Market Place
              </p>
              <p className="text-[0.8rem] lg:text-[1rem] md:w-[47vw] lg:w-[30vw] leading-5">
                India's first unified platform connecting contractors, builders,
                and suppliers for construction materials and equipment rental.
                From TMT bars to excavators, cement to cranes – everything you
                need, one platform.
              </p>
              <button
                className="
    bg-[#FDC000] mt-5 text-black font-bold
    py-3 px-6
    text-sm sm:text-base md:text-lg
    rounded-lg

    shadow-[0_4px_15px_rgba(0,0,0,0.25)] 
    hover:shadow-[0_10px_25px_rgba(253,192,0,0.5)] 
    transition duration-300 transform hover:scale-105

    w-auto min-w-fit
    whitespace-nowrap
  "
              >
                Coming Soon...
              </button>
            </div>
          </div>
        </div>

        <div className="h-full bg-[#37393C] py-5">
          <div className="w-screen flex gap-y-10 md:gap-y-0 flex-col md:flex-row place-items-center  md:justify-between lg:py-10 py-5  px-4 lg:px-15">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-[#FBC839] text-black  shadow-xl flex flex-col items-center justify-center text-center gap-2 rounded-md transition duration-300 hover:shadow-2xl hover:scale-[1.02] lg:w-[22vw] w-[76%] h-[20vh] md:w-[22vw] md:h-[14vh] lg:h-[35vh]"
              >
                <img
                  src={feature.icon}
                  alt=""
                  className="h-[5vh] md:h-[4vh] lg:h-[10vh]"
                />
                <h3 className="text-xl lg:text-[2rem] font-bold mb-1">
                  {feature.title}
                </h3>
                <p className="px-2 text-sm lg:text-base text-gray-800 font-medium">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div>
            <div className="flex flex-col gap-1 pl-[60px] md:pl-[10px] lg:pl-[50px] ">
              <p className="text-white text-[2rem] md:text-[3rem] lg:text-[2rem] font-semibold">
                Be First to Know
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  className="rounded-sm w-[40vw] md:w-[27vw] lg:w-[14vw] px-2 py-1 bg-white "
                  placeholder="Enter your email address"
                />
                <button className="rounded-sm text-[1rem] px-4 py-2 bg-[#FBC839] font-semibold">
                  Notify Me
                </button>
              </div>
              <p className="text-white">
                Support: <span>support@link2build.com</span>
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
