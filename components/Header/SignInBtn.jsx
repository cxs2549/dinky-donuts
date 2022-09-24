import Link from "next/link"
import React from "react"
import { useSession, signIn, signOut } from "next-auth/react"

const SignInBtn = () => {
  const { data: session } = useSession()
  if(!session) {

    return (
      <div className="hidden lg:block">
        <button onClick={() => signIn()} className="rounded-full px-8 py-3 bg-brandDark font-bold">
            <h1 className="uppercase text-white">Sign in</h1>
        </button>
      </div>
    )
  }
  return (
    <div className="hidden lg:block">
       <button onClick={() => signOut()}  className="rounded-full px-8 py-3 bg-brandDark font-bold">
            <h1 className="uppercase text-white">Sign out</h1>
        </button>
    </div>
  )
}

export default SignInBtn
