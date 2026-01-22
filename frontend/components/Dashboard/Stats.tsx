import { TrendingUp, TrendingDown, Wallet, ArrowUpRight, ArrowDownRight, Activity } from "lucide-react"

const stats = [
  {
    title: "Total Balance",
    value: "$24,563.00",
    change: "+12.5%",
    trend: "up",
    icon: Wallet,
    description: "vs last month"
  },
  {
    title: "Portfolio Growth",
    value: "+$2,847.23",
    change: "+8.3%",
    trend: "up",
    icon: TrendingUp,
    description: "this month"
  },
  {
    title: "Total Transactions",
    value: "156",
    change: "+23",
    trend: "up",
    icon: Activity,
    description: "this month"
  },
  {
    title: "Gas Saved",
    value: "$127.50",
    change: "-15%",
    trend: "down",
    icon: TrendingDown,
    description: "vs average"
  }
]

function Stats() {
  return (
    <section className="w-full">
      <h2 className="text-lg font-semibold text-foreground mb-4">Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="glass-frosted rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <span
                className={`inline-flex items-center gap-1 text-sm font-medium ${
                  stat.trend === "up"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {stat.trend === "up" ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-foreground mb-1">
              {stat.value}
            </p>
            <p className="text-sm text-muted-foreground">
              {stat.title} <span className="opacity-70">• {stat.description}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
