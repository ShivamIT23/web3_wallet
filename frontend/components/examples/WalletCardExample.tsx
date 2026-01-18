'use client';
import { Wallet, ShieldCheck, ArrowRight, TrendingUp } from 'lucide-react';

/**
 * Example: Wallet Card using the new theme utilities
 * 
 * This demonstrates:
 * - glass-frosted for the main container
 * - icon-tactical-badge for the wallet icon
 * - shield-status for security indicator
 * - glow-border-primary for the action button
 */
export function WalletCardExample() {
  return (
    <div className="glass-frosted p-6 rounded-2xl max-w-md">
      {/* Header with Tactical Icon */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="icon-tactical-badge">
            <Wallet className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold">Wallet Balance</h3>
        </div>
        <TrendingUp className="icon-tactical w-5 h-5 text-accent" />
      </div>

      {/* Balance Display */}
      <div className="mb-6">
        <p className="text-muted-foreground text-sm mb-1">Total Balance</p>
        <p className="text-3xl font-bold text-foreground">$12,450.00</p>
        <p className="text-sm text-muted-foreground mt-1">+2.5% from last month</p>
      </div>

      {/* Shield Status */}
      <div className="mb-4">
        <div className="shield-status shield-status-safe">
          <ShieldCheck className="shield-status-icon w-4 h-4" />
          <span>All Systems Secure</span>
        </div>
      </div>

      {/* Action Button with Glow */}
      <button className="glow-border-primary w-full py-3 rounded-lg font-medium active flex items-center justify-center gap-2">
        View Details
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
