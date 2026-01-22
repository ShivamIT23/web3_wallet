import BlogPage from "@wallet/pages/Blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Wallet Guardian",
  description: "Stay updated with the latest news, tutorials, and insights about Web3, cryptocurrency security, and blockchain technology.",
  openGraph: {
    title: "Blog | Wallet Guardian",
    description: "Latest insights on Web3, crypto security, and blockchain technology.",
  },
};

export default function Blog() {
  return (
    <main className="min-h-full w-full overflow-hidden pt-28 px-[3vw] relative">
      <BlogPage />
    </main>
  );
}
