# Sponsorship Setup Guide

Three channels, in order of priority. GitHub Sponsors is the most important — it adds the Sponsor button directly to the repo page.

---

## 1. GitHub Sponsors (highest priority)

### What you get
- "Sponsor" button on every repo, your profile, and PRs
- Monthly tiers + one-time donations
- Direct deposit via Stripe
- GitHub covers processing fees for the first $5,000/year (wait — verify current policy, it changes)

### Registration steps
1. Go to https://github.com/sponsors/jaminliu89
2. Click "Join the sponsor program" (or similar — exact wording changes)
3. Connect a Stripe account (required for payouts)
4. Set up at least one tier

### Stripe identity verification requirements
- Passport or Chinese ID (护照 / 身份证)
- Home address (in English or Chinese — Stripe accepts both)
- Bank account for payout (支持中国银行卡，走 Stripe 跨境转账)
- Phone number for 2FA

### Recommended tier structure (Parchment-specific)
- **$5/mo — Supporter** — Access to early design notes and roadmap votes
- **$20/mo — Builder** — Private Q&A + priority issue triage
- **$100/mo — Studio** — 1hr design review call per month, logo on README
- **$500/mo — Partner** — Custom design system consulting

### Pitfalls
- Stripe verification can take 1-3 days. Do it on a weekday.
- 中国身份证 + 中国银行卡 can receive payouts but may have currency conversion fees (~1-2%).
- You'll need to upload a photo of your ID — make sure it's clear, no glare.

---

## 2. Buy Me a Coffee

### What you get
- Simple landing page with your bio + tiers
- One-time "buy me a coffee" ($3, $5, custom amount)
- Monthly membership tiers
- Payout via PayPal or Stripe
- No approval process — instant setup

### Registration steps
1. Go to https://buymeacoffee.com
2. Sign up with email or Google
3. Claim username: `jaminliu` (or `jaminliu89` if taken)
4. Connect PayPal or Stripe for payouts
5. Set up your page bio + tiers

### Recommended approach
- Keep it simple — one "coffee" price ($5) + 2-3 membership tiers
- Use the same tier structure as GitHub Sponsors for consistency
- Link from GitHub profile, Twitter bio, etc.

### Pitfalls
- PayPal fees are higher than Stripe (~2.9% + $0.30 vs ~2.9% + $0.30 — actually similar, but currency conversion adds up)
- BMC takes a 5% cut on top of payment processing (verify — they changed this, might be 0% now with optional tipping)

---

## 3. WeChat / Alipay (domestic China)

### What you get
- QR code scan → instant payment, no account needed for the payer
- Zero friction for Chinese users
- No monthly fees, no currency conversion

### How to set up
- **WeChat Pay**: Use 微信收款码 (personal) or 商家收款码 (business). For open-source donations, personal code works fine.
- **Alipay**: Same — 收钱码.
- Save both as PNG images, add to `docs/assets/sponsor/` directory.
- I'll build a simple HTML page that shows both QR codes side by side, then link it from README.

### Pitfalls
- Personal收款码 has annual limits (WeChat: ~200,000 RMB/year, Alipay similar). Should be plenty for donations.
- No way to automate thank-you notes unless you use a business account + developer API.
- 微信/支付宝官方不鼓励"捐赠"类收款，可能会被风控。建议收款码页面写"请我喝杯咖啡"而不是"捐赠"。

---

## Post-registration checklist

After you finish registering:

- [ ] GitHub Sponsors approved → I update FUNDING.yml with your exact username
- [ ] Buy Me a Coffee page live → I update the link in README
- [ ] WeChat / Alipay QR codes ready → I create the sponsor page + add images
- [ ] Pin sponsor info to GitHub profile
- [ ] Add sponsor link to any social bios (Twitter/X, 小红书, etc.)
- [ ] Write a short "thank you" post for the first sponsor milestone

---

## FUNDING.yml reference

The `.github/FUNDING.yml` file controls what shows up in the GitHub "Sponsor" button.
Currently set with placeholders. Update each line when you have the account.
