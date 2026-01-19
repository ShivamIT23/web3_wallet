import Image from "next/image"


function Brand() {
  return (
    <section className="flex flex-col justify-evenly items-center w-full max-w-[calc(1280px+2vw)] px-[2vw] md:mx-auto py-[3vh] gap-12">
        <h2 className="text-3xl font-bold text-[#1e1e1e] dark:text-[#e0e0e0]">We Provide Security for Your Digital Assets</h2>
        <p className="text-lg text-center text-muted-foreground opacity-70 max-w-3xl -mt-8">At Wallet Guardian, we understand the importance of securing your digital assets in the ever-evolving world of web3. Our platform offers cutting-edge security solutions designed to protect your wallets and transactions from potential threats.</p>
        <div className="flex flex-wrap w-full justify-between items-center gap-4">
            <Image alt="Brand Image 1" src="/brand1.webp" width={400} height={400}></Image>
            <Image alt="Brand Image 2" src="/brand2.webp" width={400} height={400}></Image>
            <Image alt="Brand Image 3" src="/brand3.webp" width={400} height={400}></Image>
            {/* <Image alt="Brand Image 4" src="/brand4.webp" width={400} height={400}></Image> */}
        </div>
    </section>
  )
}

export default Brand