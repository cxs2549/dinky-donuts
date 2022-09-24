/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react"
import Container from "../components/common/Container"

const menu = () => {
  return (
    <Container classes={`max-w-7xl mx-auto mb-4`}>
      <div className="pt-8 lg:pt-14 flex justify-center flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold lg:text-6xl text-center">
          DINKY'S CLASSICS & NEW FAVORITES
        </h1>
        <p
          className="text-sm sm:text-base lg:text-xl lg:font-medium text-center
         mt-4 px-5 xl:px-0"
        >
          Our menu is full of great-tasting items that will get you going and
          keep you running throughout your busy day. Plus, they’re always made
          to order—just the way you like.{" "}
        </p>
      </div>
      <div className="px-5 mt-12 grid gap-4 pb-12 sm:grid-cols-2 lg:grid-cols-3">
        <Card image="/menu/espresso.png" item="espresso & coffee" />
        <Card image="/menu/tea.png" item="teas & more" />
        <Card scale image="/menu/breakfast.png" item="sandwiches & more" />
        <Card scale image="/menu/donut.png" item="donuts" />
      </div>
      <div className="grid place-items-center pb-8">
        <button className="bg-brandDark text-white font-bold px-9 py-3 rounded-full tracking-wider uppercase">
          <h1>See all</h1>
        </button>
      </div>
    </Container>
  )
}

export default menu

const Card = ({ image, item, scale }) => {
  return (
    <div className="border dark:border-gray-700 rounded-2xl py-10 flex flex-col items-center justify-center gap-8">
      <div className="h-64 flex justify-center object-cover items-center">
        <img src={image} alt="" className={`w-32 ${scale && "scale-150"}`} />
      </div>
      <button className="px-8 py-3 bg-brandDark text-white rounded-full">
        <h1 className="uppercase">{item}</h1>
      </button>
    </div>
  )
}
