import { ArrowUpRight, ArrowDownLeft, RefreshCw, ShieldCheck } from "lucide-react"

const transactions = [
  {
    id: 1,
    type: "send",
    asset: "ETH",
    amount: "-0.5",
    value: "$1,234.56",
    to: "0x1234...5678",
    time: "2 hours ago",
    status: "completed"
  },
  {
    id: 2,
    type: "receive",
    asset: "USDC",
    amount: "+500",
    value: "$500.00",
    from: "0xabcd...efgh",
    time: "5 hours ago",
    status: "completed"
  },
  {
    id: 3,
    type: "swap",
    asset: "SOL → ETH",
    amount: "10 SOL",
    value: "$467.50",
    time: "1 day ago",
    status: "completed"
  },
  {
    id: 4,
    type: "receive",
    asset: "BTC",
    amount: "+0.025",
    value: "$1,320.00",
    from: "0x9876...5432",
    time: "2 days ago",
    status: "completed"
  },
  {
    id: 5,
    type: "send",
    asset: "ETH",
    amount: "-0.2",
    value: "$493.82",
    to: "0xfedc...ba98",
    time: "3 days ago",
    status: "completed"
  }
]

const typeIcons = {
  send: ArrowUpRight,
  receive: ArrowDownLeft,
  swap: RefreshCw
}

const typeColors = {
  send: "bg-red-500/10 text-red-500",
  receive: "bg-green-500/10 text-green-500",
  swap: "bg-blue-500/10 text-blue-500"
}

function RecentActivity() {
  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">Recent Activity</h2>
        <button className="text-sm text-primary hover:underline">View All</button>
      </div>
      
      <div className="glass-frosted rounded-2xl overflow-hidden">
        <div className="divide-y divide-border/50">
          {transactions.map((tx) => {
            const Icon = typeIcons[tx.type as keyof typeof typeIcons]
            const colorClass = typeColors[tx.type as keyof typeof typeColors]
            
            return (
              <div
                key={tx.id}
                className="flex items-center justify-between p-4 hover:bg-muted/20 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl ${colorClass} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-foreground capitalize">
                        {tx.type}
                      </p>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{tx.asset}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {tx.to ? `To: ${tx.to}` : tx.from ? `From: ${tx.from}` : tx.time}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${
                    tx.amount.startsWith("+") ? "text-green-500" : 
                    tx.amount.startsWith("-") ? "text-red-500" : "text-foreground"
                  }`}>
                    {tx.amount}
                  </p>
                  <p className="text-sm text-muted-foreground">{tx.value}</p>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Security Notice */}
        <div className="px-4 py-3 bg-green-500/5 border-t border-green-500/20 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-green-500" />
          <p className="text-sm text-green-500">
            All transactions verified and secured
          </p>
        </div>
      </div>
    </section>
  )
}

export default RecentActivity
