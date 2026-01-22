import { Bitcoin, Coins } from "lucide-react"

const assets = [
  {
    name: "Ethereum",
    symbol: "ETH",
    balance: "5.234",
    value: "$12,847.23",
    change: "+3.2%",
    color: "from-blue-500 to-purple-500"
  },
  {
    name: "Bitcoin",
    symbol: "BTC",
    balance: "0.156",
    value: "$8,234.50",
    change: "+1.8%",
    color: "from-orange-500 to-yellow-500"
  },
  {
    name: "Solana",
    symbol: "SOL",
    balance: "45.67",
    value: "$2,156.78",
    change: "-0.5%",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "USDC",
    symbol: "USDC",
    balance: "1,324.49",
    value: "$1,324.49",
    change: "0%",
    color: "from-blue-400 to-cyan-400"
  }
]

function WalletOverview() {
  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">Your Assets</h2>
        <button className="text-sm text-primary hover:underline">View All</button>
      </div>
      
      <div className="glass-frosted rounded-2xl p-5">
        {/* Total Balance Header */}
        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border/50">
          <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/25">
            <Coins className="w-7 h-7 text-white" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total Balance</p>
            <p className="text-3xl font-bold text-foreground">$24,563.00</p>
          </div>
        </div>
        
        {/* Assets List */}
        <div className="flex flex-col gap-3">
          {assets.map((asset, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${asset.color} flex items-center justify-center`}>
                  {asset.symbol === "BTC" ? (
                    <Bitcoin className="w-5 h-5 text-white" />
                  ) : (
                    <span className="text-white font-bold text-sm">{asset.symbol.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <p className="font-medium text-foreground">{asset.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {asset.balance} {asset.symbol}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-foreground">{asset.value}</p>
                <p className={`text-sm ${
                  asset.change.startsWith("+") 
                    ? "text-green-500" 
                    : asset.change.startsWith("-")
                    ? "text-red-500"
                    : "text-muted-foreground"
                }`}>
                  {asset.change}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WalletOverview
