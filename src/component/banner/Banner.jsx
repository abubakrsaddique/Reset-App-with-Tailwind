import React from "react";
import BackgroundVideo from "../../images/banner-video.mp4";
import BannerImage from "../../images/banner-img.webp";

const Banner = () => {
  return (
    <div className="">
      <video
        className="w-full z-[0] absolute  h-screen object-cover "
        src={BackgroundVideo}
        autoPlay
        muted
        loop
        playsInline
      ></video>
      <div className="mx-auto  relative z-10">
        <div className="bg-center bg-no-repeat bg-cover h-screen w-full">
          <nav className="w-full flex  items-center">
            <div className="w-[65%] px-12 mt-7">
              <h3 className="text-primary font-xl font-medium">
                Dark Mode Has Arrived
              </h3>
            </div>
            <div className="flex w-[35%] justify-center relative mt-7 cursor-pointer ml-96">
              <div className="mr-8 mt-4">
                <h3 className="text-primary font-xl font-medium">Support</h3>
              </div>
              <div>
                <button className="text-primary bg-pink px-12 py-3 rounded-xl font-xl font-medium">
                  Log In
                </button>
              </div>
            </div>
          </nav>
          <div className="flex  justify-center items-center text-primary">
            <div>
              <div className="  text-center relative ">
                <div className="flex items-center justify-center mb-3 ">
                  <span className="text-9xl font-extrabold uppercase  bg-clip-text custom-border-text">
                    FITNESS
                  </span>
                  <div className=" flex items-center justify-center ml-4 text-9xl font-extrabold uppercase  bg-clip-text custom-border-text ">
                    F
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        className="text-accent leading-6 font-semibold  text-base"
                      >
                        <img
                          alt="video play"
                          loading="lazy"
                          width="112"
                          height="112"
                          decoding="async"
                          data-nimg="1"
                          className="mx-2 mob:hidden"
                          style={{ color: "transparent" }}
                          src={BannerImage}
                        />
                      </button>
                    </div>
                    R
                  </div>
                </div>
                <div className="text-8xl text-primary font-bold">
                  THE CULTURE
                </div>
              </div>
              <div className="text-center mt-4 mb-8">
                <h1 className="text-center justify-center flex items-end">
                  <span className="font-normal text-base leading-5">
                    The first female fitness app catered towards cultural
                    diversity
                  </span>
                </h1>
              </div>
              <div className="flex justify-center">
                <button className="bg-pink font-medium py-5 rounded-2xl px-12 leading-[24px] overflow-hidden">
                  Start Your 7-Day Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
