import Image from "next/image"

function Brand() {
  const brands = [
    { name: "Brand 1", src: "/brand1.webp" },
    { name: "Brand 2", src: "/brand2.webp" },
    { name: "Brand 3", src: "/brand3.webp" },
    // Add more brands as needed or duplicate for continuous scroll effect if implemented later
    { name: "Brand 4", src: "/brand1.webp" }, 
  ]

  return (
    <section className="w-full py-16 border-y border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02]">
        <div className="container px-4 md:px-6 mx-auto flex flex-col items-center gap-10">
            <h2 className="text-xl md:text-2xl font-semibold text-center text-muted-foreground opacity-60">
                Trusted by industry leaders
            </h2>
            
            <div className="flex flex-wrap w-full justify-center md:justify-around items-center gap-8 md:gap-12 opacity-80">
                {brands.map((brand, index) => (
                    <div 
                        key={index} 
                        className="relative group w-32 h-16 md:w-40 md:h-20 flex items-center justify-center transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
                    >
                        <Image 
                            alt={brand.name} 
                            src={brand.src} 
                            width={160} 
                            height={80}
                            className="object-contain w-full h-full"
                        />
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Brand