import React from "react";
import Image from "../../images/login.jpg";
import Image2 from "../../images/5.png";
import Apple from "../../images/apple.webp";
import Google from "../../images/google.png";

const Signup = () => {
  return (
    <div className="w-full flex max-w-[1300px] mob:flex-col ">
      {/* Left Side */}
      <div className="w-[50%]  tab:w-full mob:w-full   tab:h-[50vh] mob:h-[50vh]">
        <div
          className="w-full h-full flex items-center justify-center flex-col bg-cover bg-center "
          style={{ backgroundImage: `url(${Image})` }}
        >
          <div className="flex flex-col justify-center items-center lg:mt-[-9%] mob:mt-[-20%]">
            <h3 className="text-primary text-4xl mob:text-3xl mob:font-semibold font-bold pt-6 bg-clip-text custom-border-text-login uppercase">
              Welcome To
            </h3>
            <div className="w-[75%]">
              <img
                className="w-full -mt-20 lg:-mt-8 tab:-mt-10 mob:-mt-10"
                src={Image2}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* Bottom Images */}
        <div className="flex flex-row w-80 -mt-12 ml-36 justify-center lg:ml-24 lg:-mt-32 tab:justify-center mob:-mt-12 mob:ml-8 mob:justify-center">
          <div className="mr-5 -mt-11">
            <img src={Apple} alt="" />
          </div>
          <div className=" -mt-11">
            <img src={Google} alt="" />
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="w-[50%]  tab:w-full mob:w-full bg-blue flex items-center justify-center min-h-[100vh]  tab:min-h-[50vh] mob:min-h-[50vh]">
        <div className="w-full max-w-[350px] mt-10">
          <h1 className="font-bold text-[40px] text-primary leading-10 mb-2">
            Sign Up
          </h1>
          <p className="text-base text-gray leading-5 font-bold mb-6">
            Already have an account?
            <span className="text-pink text-base ml-1 underline underline-offset-4 cursor-pointer">
              Log In
            </span>
          </p>
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-primary">
              Create Your Account
            </h2>
          </div>
          <div>
            <form>
              <input
                className="w-full h-14 py-2 px-6 rounded-[22px] bg-lightblue text-lightgray font-medium leading-6 mb-4 focus:bg-lightblue focus:text-lightgray"
                placeholder="First Name"
                required
                type="text"
                name="firstname"
              />
              <input
                className="w-full h-14 py-2 px-6 rounded-[22px] bg-lightblue text-lightgray font-medium leading-6 mb-4 focus:bg-lightblue focus:text-lightgray"
                placeholder="Last Name"
                required
                type="text"
                name="lastname"
              />
              <input
                className="w-full h-14 py-2 px-6 rounded-[22px] bg-lightblue text-lightgray font-medium leading-6 mb-4 focus:bg-lightblue focus:text-lightgray"
                placeholder="Email"
                required
                type="text"
                name="email"
              />
              <input
                className="w-full h-14 py-2 px-6 rounded-[22px] bg-lightblue text-lightgray font-medium leading-6 mb-2 focus:bg-lightblue focus:text-lightgray"
                placeholder="Enter your password"
                required
                type="password"
                name="password"
              />

              <button
                className="bg-pink w-full mt-6 mb-4 max-h-[55px] py-4 text-primary font-bold leading-6 text-center rounded-[16px] flex justify-center items-center"
                type="submit"
              >
                Sign Up
              </button>
              <p className="text-[13px] font-medium uppercase text-lightgray ml-3 mb-4">
                secured checkout with 256-bit SSL encryption
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
