import AboutPage from "@wallet/pages/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Wallet Guardian",
  description: "Learn about Wallet Guardian's mission to revolutionize Web3 security and make cryptocurrency accessible for everyone.",
  openGraph: {
    title: "About Us | Wallet Guardian",
    description: "Learn about Wallet Guardian's mission to revolutionize Web3 security.",
  },
};

export default function About() {
  return (
    <main className="min-h-full w-full overflow-hidden pt-28 px-[3vw] relative">
      <AboutPage />
    </main>
  );
}
