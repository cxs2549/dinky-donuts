import { GrLocation } from "react-icons/gr"
import { useState } from "react"
import Link from "next/link"

const Locations = () => {
  return (
    <Link href={`/locations`}>
      <a className="text-brandDark flex lg:hidden justify-end">
        <GrLocation size={30} className="text-brandDark" />
      </a>
      
    </Link>
  )
}

export default Locations
