'use client';
import { ArrowUpRight, ArrowDownLeft, Clock } from 'lucide-react';

/**
 * Example: Transaction List with Glassmorphism
 * 
 * This demonstrates:
 * - glass-light for list items
 * - glow-border-accent for hover effects
 * - icon-tactical for transaction icons
 * - Shield status integration
 */
export function TransactionListExample() {
  const transactions = [
    {
      id: 1,
      type: 'sent',
      amount: '0.5 ETH',
      value: '$1,250',
      status: 'safe',
      time: '2 hours ago'
    },
    {
      id: 2,
      type: 'received',
      amount: '1.2 ETH',
      value: '$3,000',
      status: 'warning',
      time: '5 hours ago'
    },
    {
      id: 3,
      type: 'sent',
      amount: '2.0 ETH',
      value: '$5,000',
      status: 'danger',
      time: '1 day ago'
    },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'safe': return 'shield-status-safe text-xs py-1 px-2';
      case 'warning': return 'shield-status-warning text-xs py-1 px-2';
      case 'danger': return 'shield-status-danger text-xs py-1 px-2';
      default: return '';
    }
  };

  return (
    <div className="glass-frosted p-6 rounded-2xl max-w-2xl">
      <h3 className="text-xl font-semibold mb-4">Recent Transactions</h3>

      <div className="space-y-3">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="glass-light p-4 rounded-xl flex items-center justify-between glow-border-accent hover transition-all"
          >
            <div className="flex items-center gap-4">
              {tx.type === 'sent' ? (
                <ArrowUpRight className="icon-tactical w-6 h-6 text-destructive" />
              ) : (
                <ArrowDownLeft className="icon-tactical w-6 h-6 text-primary" />
              )}
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold">{tx.amount}</p>
                  <span className="text-muted-foreground">•</span>
                  <p className="text-muted-foreground">{tx.value}</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <Clock className="w-3 h-3" />
                  <span>{tx.time}</span>
                </div>
              </div>
            </div>
            <div className={`shield-status ${getStatusClass(tx.status)}`}>
              {tx.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
