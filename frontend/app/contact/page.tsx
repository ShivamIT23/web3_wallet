import ContactPage from "@wallet/pages/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Wallet Guardian",
  description: "Get in touch with Wallet Guardian. We're here to help with your questions about cryptocurrency wallets and security.",
  openGraph: {
    title: "Contact Us | Wallet Guardian",
    description: "Get in touch with Wallet Guardian support team.",
  },
};

export default function Contact() {
  return (
    <main className="min-h-full w-full overflow-hidden pt-28 px-[3vw] relative">
      <ContactPage />
    </main>
  );
}
