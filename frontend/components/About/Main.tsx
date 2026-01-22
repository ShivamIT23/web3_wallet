import Hero from "./Hero"
import Mission from "./Mission"
import Team from "./Team"

function Main() {
  return (
    <div className="flex flex-col gap-8 w-full overflow-x-hidden">
      <Hero />
      <Mission />
      <Team />
    </div>
  )
}

export default Main
