import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import BackgroundVideo from "../../images/banner-video.mp4";
import BannerImage from "../../images/banner-img.webp";
import Close from "../../images/close.png";
import { AuthContext } from "../../context/AuthContext";

const Banner = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.fromDashboard) {
      setIsModalOpen(true);
    }
  }, [location.state]);

  const handleResetImageClick = () => {
    if (isLoggedIn) {
      navigate("/banner", { state: { fromDashboard: true } });
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLoginClick = () => {
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="max-w-[1300px] relative">
      <video
        className="w-full z-[0] absolute h-screen object-cover"
        src={BackgroundVideo}
        autoPlay
        muted
        loop
        playsInline
      ></video>
      <div className="mx-auto relative z-10">
        <div className="bg-center bg-no-repeat bg-cover min-h-screen w-full">
          <nav className="w-full flex items-center mob:hidden">
            <div className="w-[65%] px-12 mt-7">
              <h3 className="text-primary font-xl font-medium">
                Dark Mode Has Arrived
              </h3>
            </div>
            <div className="flex w-[35%] justify-center relative mt-7 cursor-pointer ml-96 tab:ml-32">
              <div className="mr-8 mt-4">
                <h3 className="text-primary font-xl font-medium">Support</h3>
              </div>
              <div>
                <button
                  className="text-primary bg-pink px-12 py-3 rounded-2xl font-xl font-medium"
                  onClick={handleLoginClick}
                >
                  {isLoggedIn ? "Dashboard" : "Log In"}
                </button>
              </div>
            </div>
          </nav>
          {/* Mobile */}
          <nav className="w-full flex items-center px-4 py-6 z-20 relative">
            <div className="flex items-center w-full justify-end ml-96 mob:ml-52">
              <div
                className="hidden cursor-pointer mob:block"
                onClick={toggleMenu}
              >
                {menuOpen ? (
                  <img src={Close} className="h-8 w-8" />
                ) : (
                  <FaBars className="text-primary text-3xl" />
                )}
              </div>
            </div>
          </nav>
          {menuOpen && (
            <div className="hidden mob:block mt-[-80px] z-[10] w-full flex-col justify-center items-center absolute bg-blue py-[60px] rounded-b-3xl pl-[108px] pr-[108px] shadow-lg rounded-lg">
              <div className="mb-4 " onClick={closeMenu}>
                <h3 className="text-primary font-xl font-medium">Support</h3>
              </div>
              <div onClick={closeMenu}>
                <button
                  className="text-primary bg-pink px-12 py-3 rounded-xl font-xl font-medium w-full"
                  onClick={handleLoginClick}
                >
                  {isLoggedIn ? "Dashboard" : "Log In"}
                </button>
              </div>
            </div>
          )}
          {/* Main Headings */}
          <div className="flex justify-center items-center tab:mt-[314px] mob:mt-[6%] text-primary">
            <div>
              <div className="text-center relative">
                <div className="flex items-center justify-center mb-8 mob:flex-col mob:mt-24">
                  <span className="text-9xl tab:text-8xl mob:text-7xl font-extrabold uppercase bg-clip-text custom-border-text">
                    FITNESS
                  </span>
                  <div className="flex items-center justify-center ml-4 text-9xl font-extrabold uppercase bg-clip-text custom-border-text tab:text-7xl mob:text-7xl">
                    F
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        className="text-accent leading-6 font-semibold text-base"
                      >
                        <img
                          alt="video play"
                          loading="lazy"
                          width="112"
                          height="112"
                          decoding="async"
                          data-nimg="1"
                          className="mx-2 mob:h-20 mob:w-20 tab:w-24 tab:h-24"
                          src={BannerImage}
                        />
                      </button>
                    </div>
                    R
                  </div>
                </div>
                <div className="text-8xl tab:text-6xl mb-12 mob:text-7xl leading-6 text-primary font-bold">
                  THE CULTURE
                </div>
              </div>
              <div className="text-center mt-4 mb-8">
                <h1 className="text-center justify-center flex items-end">
                  <span className="font-normal text-base leading-5 ">
                    The first female fitness app catered towards cultural
                    diversity
                  </span>
                </h1>
              </div>
              <div className="flex justify-center">
                <button className="bg-pink font-medium py-3 rounded-2xl px-8 leading-[24px] overflow-hidden">
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
