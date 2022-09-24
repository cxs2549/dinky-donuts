import { RiMenuFill } from "react-icons/ri"
import { useState } from "react"
import { Menu, Transition } from "@headlessui/react"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/perks", label: "DD Perks" },
  { href: "/dinky-card", label: "Dinky Card" },
  { href: "/shop", label: "Shop" },
  { href: "/careers", label: "Careers" },
]

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { data: session } = useSession()
  return (
    <div className="xl:hidden z-50 relative">
      <Menu>
        <Menu.Button
          className="text-brandDark translate-y-1 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <RiMenuFill size={30} />
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
            as="ul"
            className="absolute divide-y dark:divide-gray-600 min-w-[220px] rounded-2xl mt-4 overflow-hidden shadow z-50"
          >
            {links.map((link, i) => (
              <Menu.Item key={i} onClick={() => setIsOpen(false)}>
                <Link href={link.href}>
                  <div  className="bg-neutral-100 dark:bg-surface2 hover:bg-neutral-200 dark:hover:bg-neutral-600  cursor-pointer transition-colors duration-200 z-50">
                    <h1 className="dark:text-white py-3 px-2 uppercase">
                      {link.label}
                    </h1>
                  </div>
                </Link>
              </Menu.Item>
            ))}
            <Menu.Item>
              <div className="px-5 flex flex-col  items-center justify-center bg-neutral-100 dark:bg-surface2 py-3 z-50">
                {session ? (
                  <button
                    onClick={() => signOut()}
                    className="w-full bg-brandDark rounded-full hover:bg-brandLight transition-colors duration-200"
                  >
                    <h1 className="uppercase  text-white px-8 py-3">
                      Sign out
                    </h1>
                  </button>
                ) : (
                  <button
                    onClick={() => signIn()}
                    className="w-full bg-brandDark rounded-full hover:bg-brandLight transition-colors duration-200"
                  >
                    <h1 className="uppercase  text-white px-8 py-3">Sign in</h1>
                  </button>
                )}
                {!session && (
                  <div className="flex flex-col items-center">
                    <p className="text-xs mt-1 text-center dark:text-white">
                      Not a DD Perks member?
                    </p>
                    <button className="text-xs font-medium mt-2 ">
                      <h1 className="text-brandDark dark:text-brandDark">
                        LEARN MORE
                      </h1>
                    </button>
                  </div>
                )}
              </div>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default MyComponent
