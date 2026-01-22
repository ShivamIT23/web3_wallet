import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react"
import { Button } from "@wallet/components/ui/button"

function Main() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto px-[2vw] py-16">
        <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm text-accent font-medium mb-8">
          <MessageSquare className="mr-2 h-4 w-4" />
          <span>Get in Touch</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1e1e1e] dark:text-[#e0e0e0] leading-[1.1] mb-6">
          Contact{" "}
          <span className="bg-linear-to-r from-accent to-primary bg-clip-text text-transparent">
            Us
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground opacity-80 max-w-2xl leading-relaxed">
          Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
        </p>
      </section>

      {/* Contact Content */}
      <section className="w-full max-w-6xl mx-auto px-[2vw] py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="glass-frosted rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Send us a Message
            </h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80 ml-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-secondary/30 border border-white/5 text-foreground rounded-lg px-4 py-3 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50 hover:bg-secondary/40"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80 ml-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-secondary/30 border border-white/5 text-foreground rounded-lg px-4 py-3 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50 hover:bg-secondary/40"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80 ml-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-secondary/30 border border-white/5 text-foreground rounded-lg px-4 py-3 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50 hover:bg-secondary/40"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80 ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-secondary/30 border border-white/5 text-foreground rounded-lg px-4 py-3 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50 hover:bg-secondary/40"
                  placeholder="How can we help?"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80 ml-1">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-secondary/30 border border-white/5 text-foreground rounded-lg px-4 py-3 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50 hover:bg-secondary/40 resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <Button
                type="submit"
                className="w-full glow-shadow hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-semibold text-base py-6"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            {/* Info Cards */}
            <div className="glass-frosted rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">support@walletguardian.com</p>
                    <p className="text-muted-foreground">hello@walletguardian.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      123 Blockchain Street<br />
                      San Francisco, CA 94102<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 9am - 6pm PST</p>
                    <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Prompt */}
            <div className="glass-frosted rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Looking for quick answers?
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Check out our FAQ section for common questions about wallet security, transactions, and more.
              </p>
              <Button variant="outline" className="w-full">
                Visit FAQ
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Main
