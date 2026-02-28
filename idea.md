# Nivesh-Setu — Project Idea

> **"From a basic portfolio viewer to an institutional-grade, AI-powered risk intelligence platform for retail investors."**

---

## What Are We Building?

**Nivesh-Setu** (Bridge to Investment) is a **full-stack, AI-augmented stock portfolio risk analyzer** that goes far beyond simple return calculations. It arms retail investors with the same quantitative tools used by hedge funds and institutional desks — packaged into an accessible, real-time web dashboard.

Unlike commercial tools that cost thousands per month, Nivesh-Setu is open, transparent, and built for the modern data ecosystem.

---

## Scope

| Dimension | Scope |
|---|---|
| **Users** | Retail investors, finance students, quant hobbyists |
| **Asset Class** | US equities (via Yahoo Finance), extensible to crypto/ETF |
| **Data Sources** | yfinance, VIX, Google Trends, News API |
| **Platform** | Web (React frontend + FastAPI backend) |
| **Intelligence** | Rule-based risk alerts + ML volatility forecasting |
| **Scale** | Hackathon MVP → production-ready extension |

---

## Three-Layer Architecture

### Layer 1 — Core Risk Metrics
The quantitative foundation. All calculations run server-side in Python using NumPy/SciPy/Pandas.

| Metric | Description |
|---|---|
| **Historical VaR (95%)** | Max daily loss at 95% confidence |
| **Parametric VaR** | Assumes normal distribution; faster for live updates |
| **CVaR / Expected Shortfall** | Average loss *beyond* the VaR threshold — captures tail risk |
| **Monte Carlo VaR** | 10,000 simulated paths; most realistic |
| **Sharpe Ratio** | Risk-adjusted return vs 4% risk-free rate |
| **Sortino Ratio** | Like Sharpe but penalizes only downside volatility |
| **Max Drawdown** | Largest peak-to-trough decline in portfolio history |
| **Beta** | Portfolio sensitivity vs S&P 500 |
| **Risk Contribution** | Each ticker's marginal contribution to total portfolio risk |
| **Efficient Frontier** | Markowitz mean-variance optimization; optimal weight finder |
| **Correlation Heatmap** | Pairwise correlation matrix of all holdings |

### Layer 2 — Alternative Data Intelligence
Non-traditional signals that institutional "quants with terminals" already use — now democratized.

| Signal | Source | Insight |
|---|---|---|
| **VIX Fear Meter** | yfinance `^VIX` | Market fear gauge; correlated with your portfolio VaR |
| **Google Trends** | pytrends | Search interest over time → "Hype vs Risk" visualization |
| **News Sentiment** | NewsAPI / RSS | Headline-level positive/negative scoring |

### Layer 3 — ML Intelligence
Data-driven models that predict future risk, not just measure past risk.

| Model | Technique | Output |
|---|---|---|
| **Volatility Forecasting** | Random Forest on rolling features | Predicted volatility for next 5/10/30 days |
| **Crash Probability Predictor** | Gradient Boosting on VIX + sentiment + vol | Probability of >5% portfolio drawdown |
| **Smart Risk Alerts** | Rule engine + ML anomaly detection | Push notifications when risk thresholds are breached |

---

## Key Features

### Portfolio Input & Management
- Multi-ticker input with custom weights
- Auto-normalization to 100%
- "Load Demo Portfolio" with tech-heavy preset (AAPL/MSFT/TSLA/AMZN/NVDA)

### Risk Dashboard
- Live VaR gauge with color zones (green/yellow/red)
- Sharpe, Sortino, Beta displayed as KPI cards
- CVaR displayed alongside VaR to show tail risk premium
- Max Drawdown timeline chart
- Risk Contribution pie chart per ticker

### Alternative Data Panel
- **VIX Fear Meter**: Speedometer-style gauge (0–80) with historical overlay
- **Hype vs Risk Chart**: Google Trends interest vs portfolio VaR over time
- **News Feed**: Top 5 relevant headlines with sentiment color-coding

### Simulation & Optimization
- Monte Carlo simulation: 10,000 paths, 252 days, animated chart
- Efficient Frontier scatter plot with current portfolio highlighted
- One-click Sharpe-maximizing weight optimizer
- Scenario Analysis: "What if TSLA drops 30%?"

### ML Insights
- Volatility forecast chart (7-day rolling predicted vol)
- Crash Risk % badge (Low / Medium / High / Extreme)
- Alert history log

---

## Data Flow Summary

```
User Input (Tickers + Weights)
         │
         ▼
  FastAPI Backend
  ├── yfinance → Price history + VIX
  ├── pytrends → Google Trends data
  └── NewsAPI → Headlines
         │
         ▼
  Computation Engine
  ├── NumPy/SciPy → VaR, CVaR, Sharpe, Sortino, Beta, MDD
  ├── Monte Carlo → 10,000 simulated paths
  ├── scipy.optimize → Efficient Frontier
  ├── VADER → Sentiment scores
  └── sklearn → ML volatility + crash predictor
         │
         ▼
  React Dashboard (Plotly.js)
  ├── KPI Cards
  ├── Heatmaps & Charts
  ├── Monte Carlo animation
  ├── Sentiment panels
  └── ML Insight badge
```

---
