import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase";
import Image from "../../images/login.jpg";
import Apple from "../../images/apple.webp";
import Google from "../../images/google.png";
import Image2 from "../../images/5.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);

      navigate("/dashboard");
    } catch (error) {
      console.error("Login Error:", error);
      setError(
        <p className="text-sm text-lightgray mt-4 flex justify-center items-center ">
          Failed to log in. Please check your credentials and try again.
        </p>
      );
    }
  };

  const handleImage2Click = () => {
    navigate("/");
  };

  return (
    <div className="w-full flex max-w-[1300px] mob:flex-col">
      {/* Left Side */}
      <div className="w-[50%] tab:w-full mob:w-full  relative tab:h-[50vh] mob:h-[50vh]">
        <div
          className="w-full h-full flex items-center justify-center flex-col bg-cover bg-center"
          style={{ backgroundImage: `url(${Image})` }}
        >
          <div className="flex flex-col justify-center items-center lg:mt-[-9%] mob:mt-[-20%]">
            <h3 className="text-primary text-4xl font-bold pt-6 bg-clip-text custom-border-text-login uppercase">
              Welcome To
            </h3>
            <div className="w-[75%]">
              <img
                className="w-full -mt-20 lg:-mt-8 tab:-mt-10 mob:-mt-10 cursor-pointer"
                src={Image2}
                alt=""
                onClick={handleImage2Click}
              />
            </div>
          </div>
        </div>
        {/* Bottom Images */}
        <div className="flex flex-row w-80 -mt-12 ml-36 justify-center lg:ml-24 lg:-mt-32 tab:ml-0 tab:justify-center mob:ml-8 mob:justify-center">
          <div className="mr-5 -mt-11">
            <img src={Apple} alt="Apple Logo" />
          </div>
          <div className="-mt-11">
            <img src={Google} alt="Google Logo" />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-[50%] tab:w-full mob:w-full bg-blue flex items-center justify-center min-h-[100vh] tab:min-h-[50vh] mob:min-h-[50vh]">
        <div className="w-full max-w-[350px] mt-10">
          <h1 className="font-bold text-[40px] text-primary leading-10 mb-2">
            Log In
          </h1>
          <p className="text-base text-gray leading-5 font-bold mb-6">
            You don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-pink text-base ml-1 underline underline-offset-4 cursor-pointer"
            >
              Sign Up
            </Link>
          </p>
          <div>
            <form onSubmit={handleLogin}>
              <input
                className="w-full h-14 py-2 outline-none px-6 rounded-[22px] bg-lightblue  text-lightgray font-medium leading-6 mb-4  focus:bg-lightblue focus:text-lightgray border-css"
                placeholder="Email"
                required
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="w-full h-14 py-2 px-6 rounded-[22px] outline-none bg-lightblue text-lightgray font-medium leading-6 mb-2 focus:bg-lightblue focus:text-lightgray border-css"
                placeholder="Enter your password"
                required
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="text-pink text-base font-semibold underline leading-5 underline-offset-4 cursor-pointer">
                Forgot password?
              </span>
              {error && <p className="text-red-500">{error}</p>}
              <button
                className="bg-pink w-full mt-6 mb-4 max-h-[55px] py-4 text-primary font-bold leading-6 text-center rounded-[16px] flex justify-center items-center"
                type="submit"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
