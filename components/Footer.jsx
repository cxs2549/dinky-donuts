/* eslint-disable @next/next/no-img-element */
import React from "react"

import { FiTwitter, FiFacebook } from "react-icons/fi"

const Container = ({ children, classes }) => (
  <div className={`max-w-7xl mx-auto p-5 xl:px-0 ${classes}`}>{children}</div>
)

const quick = [
  "press room",
  "corporate",
  "about us",
  "contact us",
  "mobile app",
  "sustainability",
  "franchising",
  "site map",
]

const terms = [
  "terms of use",
  "ca privacy",
  "privacy policy",
  "do not sell my personal info",
  "your ad choices",
  "contact us",
  "site map",
]

const Footer = () => {
  return (
    <footer className="">
      <Container classes={`py-8 flex flex-col gap-12 border-t dark:border-gray-600  bg-white dark:bg-surface xl:px-24`}>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12">
          <div className="flex  flex-col items-center justify-center relative">
            <h2 className="uppercase font-bold  footerStyle z-10">Quick Links</h2>
            <ul className=" grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-x-8  w-full mt-8">
              {quick.map((link, i) => (
                <li key={i} className="text-sm uppercase tracking-wider">
                  <h1 className="whitespace-nowrap">{link}</h1>
                </li>
              ))}
            </ul>
          </div>
          <div
            id="socials"
            className="flex  flex-col items-center justify-center relative w-full"
          >
            <h2 className="uppercase footerStyle font-bold z-10">Follow Us</h2>
            <div className="flex justify-between gap-6 mt-4 md:mt-12 md:-translate-y-4">
              <FiTwitter size={30} />
              <FiFacebook size={30} />
            </div>
          </div>
        </div>

        <div className="flex flex-col  items-center justify-center relative">
          <h2 className="uppercase font-bold z-10 footerStyle">Our Partners</h2>
          <div className="flex justify-between gap-6 mt-8">
            <img src="/footer/jet.png" alt="" className="w-24 object-contain" />
            <img src="/footer/baskin.png" className="w-20" alt="" />
          </div>
        </div>

        <ul className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2  w-full">
          {terms.map((link, i) => (
            <li key={i} className=" text-sm uppercase tracking-wider">
              <h1>{link}</h1>
            </li>
          ))}
        </ul>

        <div className="flex justify-center">
          <p className="text-xs">
            Copyright &copy; 2022 Venetic for DD IP Holder LLC
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
