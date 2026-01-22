import Hero from "./Hero"
import BlogList from "./BlogList"

function Main() {
  return (
    <div className="flex flex-col gap-4 w-full overflow-x-hidden">
      <Hero />
      <BlogList />
    </div>
  )
}

export default Main
