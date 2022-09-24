import Container from "../components/common/Container"

export default function Custom404() {
  return (
    <Container classes={`p-5 flex flex-col items-center justify-center h-[calc(100vh-200px)]`}>
      <h1 className="text-orange-500 text-4xl xl:text-6xl lg:text-5xl">404</h1>
      <h1 className="text-brandDark text-4xl xl:text-6xl lg:text-5x text-centerl">PAGE NOT FOUND</h1>
      <p>No donut for you!</p>
    </Container>
  )
}
