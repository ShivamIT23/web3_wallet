import { FileText, Scale } from "lucide-react"

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: `By accessing and using Wallet Guardian ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.

These Terms of Service apply to all users of the Service, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.`
  },
  {
    id: "use-license",
    title: "2. Use License",
    content: `Permission is granted to temporarily access and use Wallet Guardian for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:

• Modify or copy the materials
• Use the materials for any commercial purpose or for any public display
• Attempt to decompile or reverse engineer any software contained in Wallet Guardian
• Remove any copyright or other proprietary notations from the materials
• Transfer the materials to another person or "mirror" the materials on any other server`
  },
  {
    id: "wallet-services",
    title: "3. Wallet Services",
    content: `Wallet Guardian provides cryptocurrency wallet management services. You acknowledge that:

• You are solely responsible for the security of your wallet credentials, private keys, and recovery phrases
• Wallet Guardian does not store your private keys or recovery phrases on our servers
• We cannot recover your assets if you lose access to your credentials
• Cryptocurrency transactions are irreversible and Wallet Guardian cannot reverse any transactions
• You are responsible for ensuring the accuracy of all transaction details before confirmation`
  },
  {
    id: "disclaimer",
    title: "4. Disclaimer",
    content: `The materials on Wallet Guardian are provided on an 'as is' basis. Wallet Guardian makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation:

• Implied warranties or conditions of merchantability
• Fitness for a particular purpose
• Non-infringement of intellectual property or other violation of rights

Further, Wallet Guardian does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials.`
  },
  {
    id: "limitations",
    title: "5. Limitations of Liability",
    content: `In no event shall Wallet Guardian or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use Wallet Guardian, even if Wallet Guardian or an authorized representative has been notified orally or in writing of the possibility of such damage.

Wallet Guardian shall not be liable for any loss of cryptocurrency assets, whether due to:
• User error or negligence
• Security breaches not caused by Wallet Guardian
• Third-party attacks or hacking attempts
• Network failures or blockchain-related issues`
  },
  {
    id: "privacy",
    title: "6. Privacy Policy",
    content: `Your privacy is important to us. We collect and process personal information in accordance with applicable data protection laws. By using our Service, you consent to the collection and use of your information as described in our Privacy Policy.

Key points:
• We collect only necessary information to provide our services
• We do not sell your personal information to third parties
• We implement industry-standard security measures to protect your data
• You have the right to access, modify, or delete your personal information`
  },
  {
    id: "modifications",
    title: "7. Modifications to Terms",
    content: `Wallet Guardian may revise these Terms of Service at any time without notice. By using this Service, you are agreeing to be bound by the then-current version of these Terms of Service.

We recommend reviewing these terms periodically for any changes. Your continued use of the Service after any modifications indicates your acceptance of the updated terms.`
  },
  {
    id: "governing-law",
    title: "8. Governing Law",
    content: `These terms and conditions are governed by and construed in accordance with applicable laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.

Any disputes arising from or relating to the use of Wallet Guardian shall be resolved through binding arbitration in accordance with the rules of the applicable arbitration association.`
  },
  {
    id: "contact",
    title: "9. Contact Information",
    content: `If you have any questions about these Terms of Service, please contact us at:

Email: legal@walletguardian.com
Address: [Company Address]

Last Updated: January 23, 2026`
  }
]

function Main() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto px-[2vw] py-16">
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary font-medium mb-8">
          <Scale className="mr-2 h-4 w-4" />
          <span>Legal</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1e1e1e] dark:text-[#e0e0e0] leading-[1.1] mb-6">
          Terms &{" "}
          <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
            Conditions
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground opacity-80 max-w-2xl leading-relaxed">
          Please read these terms carefully before using Wallet Guardian services.
        </p>
      </section>

      {/* Table of Contents */}
      <section className="w-full max-w-4xl mx-auto px-[2vw] mb-12">
        <div className="glass-frosted rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Table of Contents
          </h2>
          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-muted-foreground hover:text-primary transition-colors text-sm py-1"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Content Sections */}
      <section className="w-full max-w-4xl mx-auto px-[2vw] pb-16">
        <div className="flex flex-col gap-8">
          {sections.map((section) => (
            <article
              key={section.id}
              id={section.id}
              className="glass-frosted rounded-2xl p-6 md:p-8 scroll-mt-28"
            >
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {section.title}
              </h2>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Main
