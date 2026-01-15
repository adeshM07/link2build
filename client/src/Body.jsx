import React from "react";
import bg from "./assets/l2b_bgIMG2.png";
// import logo from "../assets/l2bLogo.png";
import appStore from "./assets/appStoreLogo.png";
import playStore from "./assets/playStoreLogo.png";
import { useState, useEffect } from "react";

import { Linkedin, Youtube, Instagram } from "lucide-react";
import l2bVideo from "./assets/l2bHeroVideo.mp4";

const Body = () => {
  const [email, setEmail] = useState("");

  const handleNotify = () => {
    if (!email.trim()) {
      alert("Please fill the field");
      return;
    }

    const url =
      "https://script.google.com/macros/s/AKfycbxtcJDjfOltncNzQsZ7j0m3m5AlAS9LBu8JFB4UFN9l0ak7G97d-0PLp2psRhmiJNbM/exec";

    fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `Email=${encodeURIComponent(email)}`,
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
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center flex items-center justify-center px-4 sm:px-6"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full text-center px-2 sm:px-0">
        {/* Logo */}
        {/* <img
          src={logo}
          alt="Link 2 Build"
          className="logo-pixel-wrapper mx-auto w-[220px] sm:w-[220px] md:w-[427px] md:h-[187px]"
        /> */}
        <video
          src={l2bVideo}
          autoPlay
          loop
          muted
          playsInline
          className="mx-auto w-[220px] sm:w-[220px] md:w-[427px] md:h-[187px]"
        ></video>

        {/* Description */}
        <p className="mt-4 exo-medium sm:mt-8 text-[#4B4B4B] text-sm sm:text-base md:text-2xl leading-relaxed font-exo">
          Built for those who Build. <br />
          Powering the backbone of tomorrow’s projects.
        </p>

        {/* Email Input */}
        <div className="mt-6 sm:mt-8 flex justify-center px-3 sm:px-0">
          <div className="flex w-full max-w-xl items-center rounded-2xl border-2 border-[#1F1F1F] hover:bg-[#f5f5f5] px-1 py-1 flex-wrap sm:flex-nowrap">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Please enter your email address"
              className="flex-1 min-w-0 bg-transparent px-4 sm:px-5 py-1 text-sm sm:text-base text-gray-700 placeholder-gray-500 outline-none"
            />

            <button
              onClick={handleNotify}
              className="rounded-xl bg-[#FDB813] px-5 sm:px-7 py-2 sm:py-[14px] text-sm font-medium text-black shadow-sm hover:bg-[#f5ad0d] transition whitespace-nowrap"
            >
              Notify Me
            </button>
          </div>
        </div>

        <p className="text-[0.8rem] md:text-[1rem] text-[#1F1F1F] exo-semi-regular mt-4">
          Early access. No spam. Launch updates only.
        </p>

        {/* Coming Soon */}
        <h2 className="mt-8 exo-regular  sm:mt-8 text-2xl sm:text-2xl md:text-5xl text-[#1F1F1F]">
          Coming soon on
        </h2>

        {/* Store Buttons */}
        <div className="mt-3 sm:mt-6 flex justify-center gap-3 sm:gap-4 flex-wrap">
          <img
            src={appStore}
            alt="App Store"
            className="h-10 sm:h-12 cursor-pointer"
          />
          <img
            src={playStore}
            alt="Google Play"
            className="h-10 sm:h-12 cursor-pointer"
          />
        </div>

        {/* Social Icons */}
        <div className="mt-8 sm:mt-10 flex justify-center gap-3 sm:gap-4">
          <a
            href="https://www.linkedin.com/company/link2build-technologies-private-limited/?viewAsMember=true"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-black hover:text-white transition"
          >
            <Linkedin size={18} className="sm:hidden" />
            <Linkedin size={20} className="hidden sm:block" strokeWidth={1.8} />
          </a>

        

          <a
            href="https://www.instagram.com/p/DTheAxjkXKI/?igsh=cDh4MmNobm5sc2Nz"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-black hover:text-white transition"
          >
            <Instagram size={18} className="sm:hidden" />
            <Instagram
              size={20}
              className="hidden sm:block"
              strokeWidth={1.8}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Body;
