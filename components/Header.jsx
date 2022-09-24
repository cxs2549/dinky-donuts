import Locations from "./Header/Locations"
import Logo from "./Header/Logo"
import Menu from "./Header/Menu"
import MiniNav from "./Header/MiniNav"
import Navigation from "./Header/Navigation"
import SignInBtn from "./Header/SignInBtn"

const Container = ({ children, classes }) => (
  <div
    className={`max-w-7xl mx-auto p-5 xl:px-0 ${classes}`}
  >
    {children}
  </div>
)

const Header = () => {
  return (
      <header className="border-b dark:border-gray-700 bg-white dark:bg-surface z-50">
        <Container classes={`grid grid-cols-3 items-center lg:flex lg:gap-8 `}>
          <Menu />
          <Logo />
          <Navigation />
          <Locations />
          <SignInBtn />
        </Container>
        <Container classes={`flex  border-t dark:border-gray-700 py-3 lg:hidden`}>
          <MiniNav />
        </Container>
      </header>
  )
}

export default Header
