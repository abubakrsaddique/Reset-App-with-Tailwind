import React from "react";
import AddButton from "../../images/7.webp";
import Google from "../../images/google.png";
import Apple from "../../images/apple.webp";

const Dashboard = () => {
  return (
    <div className="bg-blue w-full max-h-fit relative max-w-[1300px]">
      {/* Nav-Bar */}
      <div className="flex items-center justify-between py-6 px-[10%]">
        <div>
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="121"
              height="24"
              viewBox="0 0 121 24"
              fill="none"
            >
              <g clip-path="url(#clip0_8692_30318)">
                <path
                  d="M14.1725 23.6665L9.18515 16.2001H5.16503V23.6665H0.046875V0.333984H10.683C13.4525 0.333984 15.6071 1.01154 17.1469 2.36665C18.6867 3.72175 19.4569 5.61147 19.4574 8.03579V8.10303C19.4574 9.99111 18.9977 11.5299 18.0781 12.7194C17.1586 13.9088 15.9565 14.7802 14.4717 15.3334L20.1597 23.6665H14.1725ZM14.2731 8.30064C14.2731 7.18933 13.9188 6.35598 13.2102 5.8006C12.5016 5.24522 11.515 4.96726 10.2505 4.96671H5.16503V11.6665H10.3486C11.6115 11.6665 12.5809 11.3659 13.2568 10.7646C13.9327 10.1633 14.2714 9.36302 14.2731 8.36377V8.30064Z"
                  fill="#FF7565"
                ></path>
                <path
                  d="M69.1822 19.8501C68.7793 20.7299 68.1808 21.5055 67.4325 22.1173C66.6375 22.7527 65.7274 23.228 64.7524 23.5169C63.6328 23.8509 62.4694 24.014 61.3013 24.0007C59.522 23.9996 57.7563 23.6892 56.0826 23.0832C54.3608 22.4632 52.7792 21.5061 51.4297 20.2674L54.4548 16.6334C55.4524 17.4597 56.5515 18.1544 57.7252 18.7005C58.8794 19.2195 60.1322 19.481 61.397 19.4672C62.461 19.4672 63.2865 19.2728 63.8735 18.8842C64.4605 18.4955 64.7541 17.9565 64.7541 17.2672V17.2C64.7609 16.8961 64.6994 16.5946 64.5742 16.3177C64.4516 16.0625 64.2183 15.8236 63.8743 15.6011C63.4217 15.3282 62.9412 15.1047 62.4411 14.9345C61.8328 14.7125 61.0381 14.4789 60.057 14.2334C58.9729 13.9735 57.9047 13.651 56.8577 13.2675C55.9022 12.9116 55.0912 12.4727 54.4245 11.9507C53.7602 11.4332 53.2277 10.7649 52.8711 10.0008C52.5048 9.22296 52.3217 8.25623 52.3217 7.10065V7.03423C52.3217 5.9672 52.5195 5.00594 52.9153 4.15046C53.3075 3.30167 53.8761 2.54683 54.5832 1.93659C55.3362 1.29218 56.2094 0.804159 57.152 0.500851C58.2128 0.156768 59.3223 -0.0121568 60.4372 0.000680255C62.1427 0.000680255 63.7103 0.256232 65.14 0.767336C66.5653 1.27662 67.8962 2.02008 69.0783 2.96727L66.4195 6.83416C65.4608 6.16892 64.4361 5.6048 63.3617 5.1508C62.4146 4.7501 61.398 4.54058 60.3701 4.5342C59.3732 4.5342 58.6254 4.72853 58.1266 5.11718C57.6279 5.50584 57.3788 5.98906 57.3793 6.56686V6.63409C57.3707 6.97477 57.4448 7.31245 57.5952 7.61804C57.7396 7.89573 58.0007 8.14581 58.3784 8.36829C58.7562 8.59077 59.274 8.80177 59.9319 9.0013C60.586 9.20136 61.4136 9.43478 62.4149 9.70154C63.4873 9.97817 64.5393 10.3289 65.5635 10.7511C66.4089 11.094 67.196 11.5665 67.8969 12.1516C68.5128 12.6734 69.0026 13.3286 69.3293 14.0678C69.6515 14.8014 69.8128 15.6793 69.8134 16.7015V16.7679C69.8112 17.9235 69.6008 18.9509 69.1822 19.8501Z"
                  fill="#FF7565"
                ></path>
                <path
                  d="M77.5859 23.6665V0.333984H95.1021V4.9003H82.6379V9.63388H93.6059V14.2002H82.6379V19.1002H95.2681V23.6665H77.5859Z"
                  fill="#FF7565"
                ></path>
                <path
                  d="M113.714 5.06675V23.6665H108.595V5.06675H101.516V0.333984H120.794V5.06675H113.714Z"
                  fill="#FF7565"
                ></path>
                <path
                  d="M44.5303 5.5309H27.0419L24.5703 0.564453H47.0027L44.5303 5.5309Z"
                  fill="#FF7565"
                ></path>
                <path
                  d="M37.938 24.0005H27.0419L24.5703 19.0332H40.4104L37.938 24.0005Z"
                  fill="#FF7565"
                ></path>
                <path
                  d="M41.2346 14.7653H27.0419L24.5703 9.79883H43.7062L41.2346 14.7653Z"
                  fill="#FF7565"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_8692_30318">
                  <rect
                    width="120.75"
                    height="24"
                    fill="white"
                    transform="translate(0.046875)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <div>
          <button>
            <p className=" text-base  py-2 pr-3 text-primary  font-normal leading-6 tracking-[0.48px]">
              Logout
            </p>
          </button>
        </div>
      </div>
      {/* ProfileSection */}
      <div className="flex justify-center text-center">
        <div className="mt-[5%] text-center">
          <div className="flex justify-center">
            <div className="relative">
              <div>
                <img
                  alt="dp"
                  loading="lazy"
                  width="96"
                  height="96"
                  decoding="async"
                  data-nimg="1"
                  className="rounded-[50%] w-[96px] h-[96px] bg-cover bg-center"
                  src={AddButton}
                />
                <button
                  type="button"
                  className="text-accent leading-6 font-semibold font-sfPro text-base absolute bottom-[0] right-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M12.0469 2C6.53687 2 2.04688 6.49 2.04688 12C2.04688 17.51 6.53687 22 12.0469 22C17.5569 22 22.0469 17.51 22.0469 12C22.0469 6.49 17.5569 2 12.0469 2ZM16.0469 12.75H12.7969V16C12.7969 16.41 12.4569 16.75 12.0469 16.75C11.6369 16.75 11.2969 16.41 11.2969 16V12.75H8.04688C7.63688 12.75 7.29688 12.41 7.29688 12C7.29688 11.59 7.63688 11.25 8.04688 11.25H11.2969V8C11.2969 7.59 11.6369 7.25 12.0469 7.25C12.4569 7.25 12.7969 7.59 12.7969 8V11.25H16.0469C16.4569 11.25 16.7969 11.59 16.7969 12C16.7969 12.41 16.4569 12.75 16.0469 12.75Z"
                      fill="#FF7565"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <p className="dark:text-[#1E2534] text-[#1E2534] font-sfPro font-semibold py-2 text-xl">
            Welcome, trial
          </p>
          <p className="text-primary font-normal py-3 text-sm">
            Download the app below and login in with the same <br />{" "}
            creditentials you just used to create your account
          </p>
          <div className="flex justify-center my-3">
            <img
              alt=""
              loading="lazy"
              width="139"
              height="49"
              decoding="async"
              data-nimg="1"
              className="cursor-pointer"
              src={Apple}
            />
            <img
              alt=""
              loading="lazy"
              width="139"
              height="49"
              decoding="async"
              data-nimg="1"
              className="ml-4 cursor-pointer"
              src={Google}
            />
          </div>
        </div>
      </div>
      {/* Account Section */}
      <div className="flex justify-start w-full">
        <div className="mt-20 ml-[14%]">
          <div className="max-w-[450px] w-full min-w-[450px] ">
            <div className="flex justify-between  w-full">
              <p className="text-xl font-bold  leading-6  text-primary">
                MyAccount
              </p>
              <div>
                <button
                  type="button"
                  className="text-pink leading-6 font-semibold  text-base"
                >
                  Edit
                </button>
              </div>
            </div>
            <div className="bg-lightblue rounded-[24px] shrink-0 px-6 py-6 mt-6">
              <div className="flex justify-between items-center w-full">
                <p className="text-sm font-semibold leading-5 text-primary">
                  Email
                </p>
                <p className=" text-sm text-lightgray font-semibold  leading-5">
                  trialmonth@gmail.com
                </p>
              </div>
              <hr className="h-px my-5  border-0 bg-lightgray" />
              <div className="flex justify-between items-center w-full">
                <p className="text-sm font-semibold  leading-5 text-primary">
                  Password
                </p>
                <p className="text-sm font-semibold text-lightgray  leading-5">
                  ********
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex justify-between items-center w-full">
              <p className="text-xl font-bold  leading-6 text-primary ">
                My Profile
              </p>
              <div>
                <button
                  type="button"
                  className="text-pink leading-6 font-semibold  text-base"
                >
                  Edit
                </button>
              </div>
            </div>
            <div className="bg-lightblue rounded-[24px] shrink-0 px-6 py-6 mt-6">
              <div className="flex flex-wrap items-center justify-between">
                <p className="text-sm font-semibold leading-5 text-primary">
                  Age
                </p>
                <p className=" text-sm font-semibold text-lightgray leading-5">
                  23
                </p>
              </div>
              <hr className="h-px my-5  border-0 bg-lightgray" />
              <div className="flex flex-wrap items-center justify-between">
                <p className="text-sm font-semibold  leading-5 text-primary">
                  Height
                </p>
                <p className=" text-sm font-semibold  leading-5 text-lightgray">
                  5ft 0in
                </p>
              </div>
              <hr className="h-px my-5 border-0 bg-lightgray" />
              <div className="flex flex-wrap items-center justify-between">
                <p className="text-sm font-semibold text-primary leading-5 ">
                  Weight
                </p>
                <p className=" text-sm font-semibold text-lightgray leading-5">
                  70kg
                </p>
              </div>
              <hr className="h-px my-5 border-0 bg-lightgray" />
              <div className="flex flex-wrap items-center justify-between">
                <p className="text-sm font-semibold  leading-5 text-primary">
                  Goal
                </p>
                <p className=" text-sm font-semibold text-lightgray leading-5">
                  Maintain Weight
                </p>
              </div>
              <hr className="h-px my-5 border-0 bg-lightgray" />
              <div className="flex flex-wrap items-center justify-between">
                <p className="text-sm font-semibold  leading-5 text-primary">
                  Daily Meal Amount
                </p>
                <p className=" text-sm font-semibold text-lightgray leading-5">
                  6 meals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Left Side */}
      <div className="flex justify-end ">
        {/* Plan Section */}
        <div className="mr-[10%] mt-[-45%]">
          <div className="max-w-[450px] w-full min-w-[450px] ">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold  leading-6 text-primary">
                My Plan
              </p>
              <button
                type="button"
                className="text-pink leading-6 font-semibold  text-base"
              >
                Edit
              </button>
            </div>
            <div className="bg-lightblue rounded-[24px] shrink-0 px-6 py-6 mt-6">
              <div className="flex justify-between items-center w-full">
                <p className=" text-sm font-semibold  leading-5 ">
                  <span className="text-lightgray ">12 Month •</span>
                  <span className="text-lightgray">Best deal</span>
                  <br />
                  <span className="text-xs font-medium text-lightgray">
                    Term expires March 5, 2025
                  </span>
                </p>
                <p className="text-sm font-semibold  leading-5 text-pink">
                  $119.99
                </p>
              </div>
            </div>
          </div>
          {/* Payment Method */}
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold leading-6  text-primary">
                My Payment Method
              </p>
              <button
                type="button"
                className=" text-base leading-6 font-semibold  text-pink"
              >
                Edit
              </button>
            </div>
            <div className="bg-lightblue rounded-[24px] shrink-0 px-6 py-6 mt-6">
              <div className="flex flex-wrap items-center justify-between">
                <p className="text-sm font-semibold  leading-5 text-primary">
                  Payment Method
                </p>
                <p className=" text-sm font-semibold text-lightgray leading-5">
                  Credit Card
                </p>
              </div>
              <hr className="h-px my-5 bg-gray-200 border-0 bg-lightgray" />
              <div className="flex flex-wrap items-center justify-between">
                <p className="text-sm font-semibold  leading-5 text-primary">
                  Number Card
                </p>
                <p className=" text-sm font-semibold text-lightgray leading-5">
                  •••• •••• •••• 1234
                </p>
              </div>
              <hr className="h-px my-5  border-0 bg-lightgray" />
              <div className="flex flex-wrap items-center justify-between">
                <p className="text-sm font-semibold  leading-5 text-primary">
                  Expiry Date
                </p>
                <p className=" text-sm font-semibold text-lightgray leading-5">
                  01/2000
                </p>
              </div>
              <hr className="h-px my-5 bg-lightgray border-0 " />
              <div className="flex flex-wrap items-center justify-between">
                <p className="text-sm font-semibold text-primary leading-5 ">
                  Email
                </p>
                <p className=" text-sm font-semibold text-lightgray leading-5">
                  trialmonth@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
