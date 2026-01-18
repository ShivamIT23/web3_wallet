'use client';
import { useState } from 'react';
import { ShieldCheck, ShieldAlert, ShieldX } from 'lucide-react';

/**
 * Example: Dynamic Shield Status Dashboard
 * 
 * This demonstrates how to use Shield Status with dynamic risk levels
 * based on real-time transaction analysis
 */
export function ShieldStatusExample() {
  const [riskLevel, setRiskLevel] = useState<'safe' | 'warning' | 'danger'>('safe');

  const statusConfig = {
    safe: {
      className: 'shield-status-safe',
      icon: ShieldCheck,
      text: 'Transaction Secure',
      description: 'All checks passed. Safe to proceed.'
    },
    warning: {
      className: 'shield-status-warning',
      icon: ShieldAlert,
      text: 'Review Required',
      description: 'Unusual activity detected. Please review.'
    },
    danger: {
      className: 'shield-status-danger',
      icon: ShieldX,
      text: 'High Risk Detected',
      description: 'Potential security threat. Transaction blocked.'
    }
  };

  const current = statusConfig[riskLevel];
  const Icon = current.icon;

  return (
    <div className="glass-frosted p-6 rounded-2xl max-w-md">
      <h3 className="text-lg font-semibold mb-4">Transaction Security Status</h3>

      {/* Shield Status Display */}
      <div className={`shield-status ${current.className} mb-4`}>
        <Icon className="shield-status-icon w-5 h-5" />
        <span>{current.text}</span>
      </div>

      <p className="text-sm text-muted-foreground mb-6">{current.description}</p>

      {/* Control Buttons (for demo) */}
      <div className="flex gap-2">
        <button
          onClick={() => setRiskLevel('safe')}
          className="glow-border-accent px-4 py-2 rounded-lg text-sm hover"
        >
          Safe
        </button>
        <button
          onClick={() => setRiskLevel('warning')}
          className="glow-border-accent px-4 py-2 rounded-lg text-sm hover"
        >
          Warning
        </button>
        <button
          onClick={() => setRiskLevel('danger')}
          className="glow-border-accent px-4 py-2 rounded-lg text-sm hover"
        >
          Danger
        </button>
      </div>
    </div>
  );
}
