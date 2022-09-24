import Link from "next/link"
import React from "react"
import { useRouter } from "next/router"

const MiniNav = () => {
    const router = useRouter()
  return (
    <nav className="uppercase grid grid-cols-3 justify-between  w-full z-0">
      <Link href="/menu">
        <a className={` ${router.asPath === "/menu" &&
              "after:bg-brandLight text-brandLight after:absolute after:left-0 after:w-full after:h-1 after:-bottom-3 "} relative flex justify-center hover:text-brandDark transition-colors duration-200`}>
          <h1 className={`${
                router.asPath === `/menu` &&
                "after:bg-brandLight text-brandDark after:absolute after:left-0 after:w-full after:h-1 after:-bottom-3  "
              }`}>Menu</h1>
        </a>
      </Link>
      <Link href="/delivery">
        <a className={` ${router.asPath === "/delivery" &&
              "after:bg-brandLight text-brandLight after:absolute after:left-0 after:w-full after:h-1 after:-bottom-3 "} relative flex justify-center hover:text-brandDark transition-colors duration-200`}>
          <h1 className={`${
                router.asPath === `/delivery` &&
                "after:bg-brandLight text-brandDark after:absolute after:left-0 after:w-full after:h-1 after:-bottom-3 "
              }`}>delivery</h1>
        </a>
      </Link>
      <Link href="/perks">
        <a className={` ${router.asPath === "/perks" &&
              "after:bg-brandLight text-brandLight after:absolute after:left-0 after:w-full after:h-1 after:-bottom-3 "} relative flex justify-center hover:text-brandDark transition-colors duration-200`}>
          <h1 className={`${
                router.asPath === `/perks` &&
                "after:bg-brandLight text-brandDark after:absolute after:left-0 after:w-full after:h-1 after:-bottom-3 whitespace-nowrap"
              }`}>dd perks</h1>
        </a>
      </Link>
    </nav>
  )
}

export default MiniNav
