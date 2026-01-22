import { LayoutDashboard } from "lucide-react"
import Stats from "./Stats"
import WalletOverview from "./WalletOverview"
import RecentActivity from "./RecentActivity"

function Main() {
  return (
    <div className="flex flex-col gap-8 w-full overflow-x-hidden pt-[calc(2vh+20px)]">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
          <LayoutDashboard className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Welcome back! Here&apos;s your wallet overview.</p>
        </div>
      </div>

      {/* Stats Cards */}
      <Stats />

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WalletOverview />
        <RecentActivity />
      </div>
    </div>
  )
}

export default Main
