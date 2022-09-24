/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react"

const Hero = () => {
  return (
    <div className="text-center pt-8 lg:pt-0 flex flex-col  mb-4  dark:border-slate-700 bg-white dark:bg-surface">
      <div className="relative bg-white dark:bg-surface flex flex-col items-center w-full  max-w-7xl sm:py-14 ">
        <h1
          className="text-4xl sm:text-5xl
         lg:text-6xl xl:text-7xl uppercase font-bold text-orange-500"
        >
          Bring on
        </h1>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl uppercase font-bold text-brandDark">
          the perks
        </h1>
        <p className="mt-2 text-sm font-medium sm:text-base lg:text-lg xl:text-xl">
          {" "}
          DD Perks rewards members on every Dinky's run.{" "}
        </p>
        <div className="sm:hidden z-0">
          <button className="w-[200px] mt-4 py-4 bg-brandDark hover:bg-brandLight transition-colors duration-200 rounded-full text-white">
            <h1 className="text-white  uppercase font-bold tracking-wide">
              sign up
            </h1>
          </button>
          <br />
          <button className="w-[200px] mb-8 mt-3 py-4 bg-white border-2 border-brandDark rounded-full text-white hover:bg-neutral-100 transition-colors duration-200">
            <h1 className="text-brandDark uppercase font-bold tracking-wide">
              learn more
            </h1>
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 lg:grid-cols-3 pb-6 rounded-2xl p-2  xl:p-3 xl:pb-9 lg:gap-4 px-5">
        <Card
          image="/home/coffee.png"
          title="earn on every run"
          desc="$1 = 5 points. Every 200 points earns you a free beverage. Plus, get
                exclusive bonus-point offers."
        />
        <Card
          image="/home/donut.png"
          title="pay any way"
          desc="Pay with a debit/credit card, cash or an enrolled Dinky Card to unlock rewards and offers. "
        />
        <Card
          invert
          image="/home/fast.png"
          title="Check out Faster "
          desc="Whether you’re stopping in or ordering ahead, load funds to your account to save time on your run. "
        />
        <div className="grid place-items-center lg:w-full  lg:col-span-3 lg:mt-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4">
            <button className="w-[200px] mt-4 lg:mt-3 lg:mb-0 py-4 bg-brandDark border-2 border-brandDark hover:bg-brandLight transition-colors duration-200 rounded-full text-white">
              <h1 className="text-white  uppercase font-bold tracking-wide">
                sign up
              </h1>
            </button>
            <button className="w-[200px] mb-8 mt-3 lg:mb-0 py-4 bg-white hover:bg-neutral-100 transition-colors duration-200 border-2 border-brandDark rounded-full text-white">
              <h1 className="text-brandDark uppercase font-bold tracking-wide">
                learn more
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

const Card = ({ image, title, desc, classes, invert }) => {
  return (
    <div
      className={` gap-4 w-full sm:max-w-sm xl:max-w-md border-brandDark   rounded-xl py-8  bg-white dark:bg-transparent ${classes}`}
    >
      <div className="flex w-full flex-col items-center justify-center">
        <img
          src={image}
          className={`w-[70px] h-[70px] lg:w-[110px] lg:h-[110px] object-contain mb-5 ${
            invert && "dark:invert"
          }`}
          alt=""
        />
        <p className="text-2xl text-brandDark font-extrabold capitalize">
          {title}
        </p>

        <p className=" text-[15px] text-center pt-2 w-full text-slate-600 dark:text-slate-200">
          {desc}{" "}
        </p>
      </div>
    </div>
  )
}
