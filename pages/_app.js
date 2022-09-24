import "../styles/globals.scss"
import { AnimatePresence } from "framer-motion"
import Header from "../components/Header"
import { SessionProvider } from "next-auth/react"
import Footer from "../components/Footer"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Header />

        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>

        <Footer />
      </SessionProvider>
    </>
  )
}

export default MyApp
