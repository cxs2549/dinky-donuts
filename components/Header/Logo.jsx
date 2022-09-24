import Link from "next/link"
import React from "react"

const Logo = () => {
  return (
    <Link href={`/`}>
      <a  className="flex justify-center">
        <h1 className=" text-4xl font-bold text-orange-500">DINKY</h1>
      </a>
    </Link>
  )
}

export default Logo
