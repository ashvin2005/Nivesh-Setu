# Stock Portfolio Risk Analyzer — Problem Statement

## Overview

Retail investors increasingly manage diversified stock portfolios across platforms like Zerodha, Robinhood, and Groww. However, **understanding portfolio risk requires far more than watching daily gains and losses**.

Professional risk metrics such as **Value at Risk (VaR)**, **Sharpe Ratio**, **Beta**, and **Correlation Matrices** provide deeper insight into portfolio exposure and vulnerability. Most retail investors lack accessible, integrated tools that compute, visualize, and explain these metrics interactively.

---

## The Problem

There is no integrated, free tool available to retail investors that:

- Accepts custom portfolio holdings (tickers + weights)
- Processes historical price data from live financial APIs
- Computes key financial risk metrics (VaR, CVaR, Sharpe, Sortino, Beta, Max Drawdown)
- Simulates potential future scenarios using Monte Carlo methods
- Visualizes risk exposure through interactive, interpretable dashboards
- Incorporates alternative signals (social sentiment, fear indices, search trends)
- Applies machine learning to forecast volatility and predict market crashes

---

## Key Challenges

### 1. Financial Model Accuracy
Implementing quantitative risk models correctly is non-trivial:
- **VaR** and **CVaR** require proper handling of return distributions, confidence levels, and tail events
- **Parametric VaR** assumes normality — a simplification that breaks down during crises
- **Monte Carlo simulations** must use correlated multivariate return paths to be valid
- **Efficient Frontier** requires constrained optimization under covariance matrices

### 2. Computational Stability
- Portfolio covariance matrices can become singular or ill-conditioned with correlated assets
- Monte Carlo with 10,000 paths × 252 days requires efficient NumPy vectorization
- Scipy optimization converges to local minima without proper initialization

### 3. Alternative Data Heterogeneity
- Reddit posts are noisy, informal, and ticker-ambiguous (e.g., "apple" vs. "AAPL")
- Google Trends data has weekly granularity with normalization quirks across time windows
- VIX and price data must be time-aligned precisely to avoid look-ahead bias

### 4. Machine Learning on Financial Data
- Financial time series are non-stationary — features must be carefully engineered (rolling windows, z-scores)
- Crash events are rare (~2–3% of trading days) causing severe class imbalance in the crash predictor
- ML models must be trained without data leakage (time-ordered train/test split mandatory)

### 5. Real-Time User Experience
- API calls to yfinance, Reddit, and Google Trends can take 5–8 seconds combined
- Dashboard must remain responsive during long-running computations
- Visualizations must be interactive, not static images

---

## The Consequence

Without proper, accessible risk analysis tools:

| Problem | Impact |
|---|---|
| Investors underestimate portfolio volatility | Exposed to sudden drawdowns they cannot absorb |
| Diversification weaknesses go unnoticed | Portfolios appear diversified but are secretly correlated (e.g., all tech) |
| Risk-adjusted performance remains unclear | A 30% return means nothing without knowing the risk taken |
| Scenario analysis is impossible | No way to answer "What if TSLA drops 30%?" before it happens |
| Social sentiment is ignored | Retail-driven squeezes (GME, AMC) catch rule-based investors completely off guard |
| VIX spikes go unmonitored | Market fear signals are missed until portfolio value has already collapsed |
| Decisions made on intuition | Emotional trading destroys returns — studies show retail underperforms benchmarks by 3–5% annually |

**Lack of structured risk analysis directly increases financial vulnerability for millions of retail investors.**

---

## The Challenge

Can we build a **Stock Portfolio Risk Analyzer** that solves all of the above — accessible to any retail investor with zero finance background?

Specifically, a system that:

- Calculates Historical VaR, Parametric VaR, CVaR, Sharpe Ratio, Sortino, Beta, Max Drawdown
- Runs Monte Carlo simulations (10,000 paths, 252 trading days)
- Supports scenario analysis (e.g., "What if TSLA drops 30%?")
- Computes Efficient Frontier and suggests optimal portfolio weights
- Monitors Reddit sentiment (r/wallstreetbets) per ticker via VADER NLP
- Tracks VIX Market Fear Meter and correlates it with portfolio VaR
- Shows Google Trends "Hype vs Risk" for each holding
- Applies ML to forecast volatility and predict crash probability
- Fires smart alerts when risk thresholds are breached
- Visualizes everything in an interactive, Plotly-powered dashboard

---

## Our Solution: Nivesh-Setu

> **See [`idea.md`](./idea.md) for the full solution design.**

**Nivesh-Setu** (Hindi: *Bridge to Investment*) directly addresses every problem and challenge listed above through a **three-layer architecture**:

```
┌───────────────────────────────────────────────────────────┐
│  PROBLEM                    │  NIVESH-SETU SOLUTION        │
├───────────────────────────────────────────────────────────┤
│  No VaR / CVaR tool         │  Layer 1: Historical,        │
│  for retail investors       │  Parametric + Monte Carlo    │
│                             │  VaR + CVaR engine           │
├───────────────────────────────────────────────────────────┤
│  No Efficient Frontier /    │  Layer 1: Markowitz          │
│  portfolio optimization     │  optimization via scipy      │
├───────────────────────────────────────────────────────────┤
│  No social sentiment        │  Layer 2: PRAW → Reddit      │
│  integration                │  + VADER NLP scoring         │
├───────────────────────────────────────────────────────────┤
│  VIX spikes missed          │  Layer 2: ^VIX Fear Meter    │
│                             │  + VaR correlation analysis  │
├───────────────────────────────────────────────────────────┤
│  Hype bubbles ignored       │  Layer 2: Google Trends      │
│                             │  "Hype vs Risk" chart        │
├───────────────────────────────────────────────────────────┤
│  No predictive capability   │  Layer 3: RandomForest vol   │
│                             │  forecast + GBM crash        │
│                             │  probability predictor       │
├───────────────────────────────────────────────────────────┤
│  No proactive risk alerts   │  Layer 3: Smart Alert        │
│                             │  Engine (rule + ML hybrid)   │
└───────────────────────────────────────────────────────────┘
```

Nivesh-Setu democratizes institutional-grade risk intelligence — no Bloomberg Terminal required.

---

## Objective

The objective is to bring **professional-grade, multi-signal risk analytics** to any retail investor through an open, free, web-based platform — enabling data-driven financial decisions with clarity, transparency, and confidence.

---
