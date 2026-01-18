# Theme Usage Guide

## Color Palette

### Deep Obsidian (Background)
- **Background**: `var(--background)` - Deep dark background
- **Card**: `var(--card)` - Slightly lighter for cards
- **Border**: `var(--border)` - Subtle borders

### Electric Indigo (Primary Actions)
- **Primary**: `var(--primary)` - Main action color
- **Ring**: `var(--ring)` - Focus rings

### Neon Cyan (Highlights/Accents)
- **Accent**: `var(--accent)` - Highlight color
- **Highlight**: `var(--highlight)` - Bright highlights

## Glassmorphism Classes

### Basic Glass
```tsx
<div className="glass">
  <p>Basic glassmorphism effect</p>
</div>
```

### Frosted Glass (Recommended)
```tsx
<div className="glass-frosted p-6 rounded-xl">
  <h2>Frosted Glass Panel</h2>
  <p>Enhanced blur with Electric Indigo borders</p>
</div>
```

### Heavy Glass
```tsx
<div className="glass-heavy p-8 rounded-2xl">
  <h2>Heavy Glass Container</h2>
  <p>Maximum blur and depth effect</p>
</div>
```

### Light Glass
```tsx
<div className="glass-light p-4 rounded-lg">
  <p>Subtle glass effect for lighter elements</p>
</div>
```

## Glowing Borders

### Generic Glow Border
```tsx
<button className="glow-border px-6 py-3 rounded-lg">
  Hover me for glow
</button>
```

### Primary Glow (Electric Indigo)
```tsx
<button className="glow-border-primary px-6 py-3 rounded-lg active">
  Active Button with Indigo Glow
</button>
```

### Accent Glow (Neon Cyan)
```tsx
<div className="glow-border-accent p-4 rounded-xl hover">
  <p>Hover for Cyan glow</p>
</div>
```

### Glow Shadow
```tsx
<div className="glow-shadow p-6 rounded-xl">
  <p>Element with glowing shadow effect</p>
</div>
```

## Tactical Iconography

### Basic Tactical Icon
```tsx
import { Shield } from 'lucide-react';

<Shield className="icon-tactical w-6 h-6" />
```

### Tactical Icon Badge
```tsx
import { Lock } from 'lucide-react';

<div className="icon-tactical-badge active">
  <Lock className="w-5 h-5" />
</div>
```

### With Text
```tsx
<div className="flex items-center gap-2">
  <Shield className="icon-tactical w-5 h-5" />
  <span>Secure Transaction</span>
</div>
```

## Shield Status Dashboard

### Safe Status (Green)
```tsx
import { ShieldCheck } from 'lucide-react';

<div className="shield-status shield-status-safe">
  <ShieldCheck className="shield-status-icon w-5 h-5" />
  <span>Transaction Secure</span>
</div>
```

### Warning Status (Yellow/Orange)
```tsx
import { ShieldAlert } from 'lucide-react';

<div className="shield-status shield-status-warning">
  <ShieldAlert className="shield-status-icon w-5 h-5" />
  <span>Review Required</span>
</div>
```

### Danger Status (Red)
```tsx
import { ShieldX } from 'lucide-react';

<div className="shield-status shield-status-danger">
  <ShieldX className="shield-status-icon w-5 h-5" />
  <span>High Risk Detected</span>
</div>
```

### Dynamic Status (React Example)
```tsx
'use client';
import { useState } from 'react';
import { ShieldCheck, ShieldAlert, ShieldX } from 'lucide-react';

function ShieldStatusDashboard() {
  const [riskLevel, setRiskLevel] = useState<'safe' | 'warning' | 'danger'>('safe');

  const statusConfig = {
    safe: {
      className: 'shield-status-safe',
      icon: ShieldCheck,
      text: 'Transaction Secure'
    },
    warning: {
      className: 'shield-status-warning',
      icon: ShieldAlert,
      text: 'Review Required'
    },
    danger: {
      className: 'shield-status-danger',
      icon: ShieldX,
      text: 'High Risk Detected'
    }
  };

  const current = statusConfig[riskLevel];
  const Icon = current.icon;

  return (
    <div className="shield-status" className={current.className}>
      <Icon className="shield-status-icon w-5 h-5" />
      <span>{current.text}</span>
    </div>
  );
}
```

## Complete Example: Wallet Card

```tsx
'use client';
import { Wallet, ShieldCheck, ArrowRight } from 'lucide-react';

export function WalletCard() {
  return (
    <div className="glass-frosted p-6 rounded-2xl max-w-md">
      {/* Header */}
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="icon-tactical-badge">
          <Wallet className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold">Wallet Balance</h3>
      </div>
    </div>

    {/* Balance */}
    <div className="mb-6">
      <p className="text-muted-foreground text-sm mb-1">Total Balance</p>
      <p className="text-3xl font-bold text-foreground">$12,450.00</p>
    </div>

    {/* Shield Status */}
    <div className="mb-4">
      <div className="shield-status shield-status-safe">
        <ShieldCheck className="shield-status-icon w-4 h-4" />
        <span>All Systems Secure</span>
      </div>
    </div>

    {/* Action Button */}
    <button className="glow-border-primary w-full py-3 rounded-lg font-medium active">
      View Details
      <ArrowRight className="w-4 h-4 ml-2 inline" />
    </button>
  </div>
  );
}
```

## Complete Example: Transaction List

```tsx
'use client';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

export function TransactionList() {
  const transactions = [
    { id: 1, type: 'sent', amount: '0.5 ETH', status: 'safe' },
    { id: 2, type: 'received', amount: '1.2 ETH', status: 'warning' },
    { id: 3, type: 'sent', amount: '2.0 ETH', status: 'danger' },
  ];

  return (
    <div className="space-y-3">
      {transactions.map((tx) => (
        <div
          key={tx.id}
          className="glass-light p-4 rounded-xl flex items-center justify-between glow-border-accent hover"
        >
          <div className="flex items-center gap-3">
            {tx.type === 'sent' ? (
              <ArrowUpRight className="icon-tactical w-5 h-5 text-destructive" />
            ) : (
              <ArrowDownLeft className="icon-tactical w-5 h-5 text-primary" />
            )}
            <div>
              <p className="font-medium">{tx.amount}</p>
              <p className="text-sm text-muted-foreground">
                {tx.type === 'sent' ? 'Sent' : 'Received'}
              </p>
            </div>
          </div>
          <div className={`shield-status shield-status-${tx.status} text-xs py-1 px-2`}>
            {tx.status}
          </div>
        </div>
      ))}
    </div>
  );
}
```

## Using Color Variables Directly

### In CSS/SCSS
```css
.my-custom-element {
  background: var(--background);
  border: 1px solid var(--primary);
  color: var(--accent);
}
```

### In Tailwind (via className)
```tsx
<div className="bg-background border border-primary text-accent">
  Content
</div>
```

### In Inline Styles
```tsx
<div style={{ 
  backgroundColor: 'var(--background)',
  borderColor: 'var(--primary)',
  color: 'var(--accent)'
}}>
  Content
</div>
```

## Combining Classes

### Glass Panel with Glowing Border
```tsx
<div className="glass-frosted glow-border-primary p-6 rounded-xl active">
  <p>Combined effects</p>
</div>
```

### Tactical Icon with Glow Shadow
```tsx
<div className="glow-shadow p-4 rounded-lg inline-block">
  <Shield className="icon-tactical w-8 h-8" />
</div>
```

## Best Practices

1. **Glassmorphism**: Use `glass-frosted` for most panels, `glass-heavy` for modals/overlays
2. **Glowing Borders**: Use `glow-border-primary` for primary actions, `glow-border-accent` for highlights
3. **Shield Status**: Always include an icon for better UX
4. **Tactical Icons**: Use for security-related features and important actions
5. **Color Usage**: 
   - Electric Indigo (`--primary`) for main actions
   - Neon Cyan (`--accent`) for highlights and secondary actions
   - Deep Obsidian (`--background`) as base

## Responsive Considerations

All classes work responsively. For mobile, you might want to adjust blur values:

```tsx
<div className="glass-frosted p-4 md:p-6 lg:p-8">
  Responsive padding
</div>
```
