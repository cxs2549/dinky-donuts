import Link from "next/link"
import React, { useRef, useState } from "react"
import { Menu, Transition } from "@headlessui/react"
import { useRouter } from "next/router"

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/locations", label: "Locations" },
  { href: "/perks", label: "DD Perks" },
  { href: "/dinky-card", label: "Dinky Card" },
  { href: "/shop", label: "Shop" },
]

const careers = [
  { label: "Working at Dinky's" },
  { label: "Apply Now" },
  { label: "Corporate Opportunities" },
]

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()
  const router = useRouter()
  return (
    <ul className="hidden lg:flex gap-8 flex-1 items-center">
      {links.map((link, i) => (
        <li key={i}>
          <Link href={link.href}>
            <a
              className={`relative`}
            >
              <h1 className={`uppercase ${
                router.asPath === `${link.href}` &&
                " text-brandDark"
              }`}>{link.label}</h1>
            </a>
          </Link>
        </li>
      ))}
      <li ref={ref}>
        <Menu>
          <Menu.Button>
            <h1>CAREERS</h1>
          </Menu.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items
              className={`absolute dark:bg-surface2 flex flex-col overflow-hidden rounded-xl min-w-[260px] divide-y dark:divide-gray-700 mt-5 shadow`}
            >
              {careers.map((link) => (
                <Menu.Item
                  as="a"
                  key={link.href}
                  href={link.href}
                  className="  whitespace-nowrap py-3 bg-neutral-100 dark:bg-surface2 text-base px-2"
                >
                  <h1 className="uppercase font-normal">{link.label}</h1>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </li>
    </ul>
  )
}

export default Navigation
