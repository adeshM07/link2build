import React from "react";
import "./App.css";
import { useState } from "react";
import easy from "./assets/easy.png";
import equip from "./assets/equip.png";
import fast from "./assets/fast.png";
import material from "./assets/material.png";

import app from "./assets/app.png";
import play from "./assets/play.png";

import app2 from "./assets/app2.png";
import play2 from "./assets/play2.png";

const Landing = () => {
  const [email, setEmail] = useState("");

const handleNotify = () => {
  if (!email.trim()) {
    alert("Please fill the field");
    return;
  }

  const url = "https://script.google.com/macros/s/AKfycbxtcJDjfOltncNzQsZ7j0m3m5AlAS9LBu8JFB4UFN9l0ak7G97d-0PLp2psRhmiJNbM/exec";

  fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `Email=${encodeURIComponent(email)}`
  })
  .then(() => {
    alert("Thank you! We’ll notify you soon.");
    setEmail("");
  })
  .catch((err) => {
    alert("Something went wrong. Try again");
    console.error(err);
  });
};

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
          className=" leading-10 h-[45vh]   md:h-[35vh]  xl:h-[55vh] lg:h-[50vh] flex flex-col justify-end"
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
              <p className="text-6xl md:text-4xl lg:text-8xl font-black mb-2 leading-none">
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
              {/* <div className="flex justify-center">
                <p className="text-4xl font-semibold mr-3">Coming Soon on</p>
                <img src={play} alt="" className="h-[5vh] mr-1" />
                <img src={app} alt="" className="h-[5vh]" />
             </div> */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 w-full text-center">
                <p
                  className="font-semibold 
     text-lg 
     xs:text-xl 
     sm:text-2xl 
     md:text-3xl 
     lg:text-3xl 
     xl:text-5xl"
                >
                  Coming Soon on
                </p>

                <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4">
                  <img
                    src={play2}
                    alt="Play Store"
                    className="h-[3.5vh] sm:h-[4vh] md:h-[5vh] lg:h-[5.5vh] xl:h-[6vh] object-contain"
                  />
                  <img
                    src={app2}
                    alt="App Store"
                    className="h-[3.5vh] sm:h-[4vh] md:h-[5vh] lg:h-[5.5vh] xl:h-[6vh] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:h-screen  [@media(min-width:1024px)_and_(max-width:1535px)]:h-screen  lg:h-full bg-[#37393C] py-5">
          <div className="w-screen  flex gap-y-10 md:gap-y-0 flex-col md:flex-row place-items-center [@media(min-width:1024px)]:gap-10  md:justify-between lg:py-10 py-5  px-4 lg:px-15">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-[#FBC839] text-black  shadow-xl flex flex-col items-center justify-center text-center gap-2 rounded-md transition duration-300 hover:shadow-2xl hover:scale-[1.02] [@media(min-width:1024px)_and_(max-width:1270px)]:w-[30vw] [@media(min-width:1024px)_and_(max-width:1270px)]:h-[15vh] lg:w-[22vw] w-[76%] h-[20vh] md:w-[22vw] md:h-[14vh] lg:h-[35vh]"
              >
                <img
                  src={feature.icon}
                  alt=""
                  className="h-[5vh] md:h-[4vh] [@media(min-width:1024px)_and_(max-width:1270px)]:h-[5vh] lg:h-[10vh]"
                />
                <h3 className="text-xl [@media(min-width:1024px)]:text-[1.5rem] lg:text-[2rem] font-bold mb-1">
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
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-sm w-[40vw] md:w-[27vw] lg:w-[14vw] px-2 py-1 bg-white "
                  placeholder="Enter your email address"
                />
                <button
                  onClick={handleNotify}
                  className="rounded-sm text-[1rem] px-4 py-2 bg-[#FBC839] font-semibold
                   transition-all duration-300 ease-in-out
                   hover:scale-105 hover:shadow-[0_0_15px_rgba(251,200,57,0.8)]
                   active:scale-95 animate-pulse"
                >
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
