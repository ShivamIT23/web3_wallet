import Brand from "./Brand"
import Hero from "./Hero"
import Features from "./Features"
import HowItWorks from "./HowItWorks"
import CTA from "./CTA"

function Main() {
  return (
    <div className="flex flex-col gap-10 w-full overflow-x-hidden pt-12">
      <Hero />
      <Brand />
      <Features />
      <HowItWorks />
      <CTA />
    </div>
  )
}

export default Main