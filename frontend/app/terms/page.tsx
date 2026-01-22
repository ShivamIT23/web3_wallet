import TermsPage from "@wallet/pages/Terms";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Wallet Guardian",
  description: "Read the terms and conditions for using Wallet Guardian cryptocurrency wallet services.",
  openGraph: {
    title: "Terms & Conditions | Wallet Guardian",
    description: "Terms of service for Wallet Guardian.",
  },
};

export default function Terms() {
  return (
    <main className="min-h-full w-full overflow-hidden pt-28 px-[3vw] relative">
      <TermsPage />
    </main>
  );
}
