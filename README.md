# 247 PRINT HOUSE Website

A production-ready, conversion-focused **Next.js (App Router) + TypeScript + Tailwind CSS** website for **247 PRINT HOUSE**, a professional printing company in Accra, Ghana.

## 1) Project Overview

This project delivers a modern, responsive business website designed to:
- explain printing services clearly,
- build trust with prospective clients,
- drive quote requests,
- and provide quick contact actions (call, email, WhatsApp).

Pages included:
- Home
- Services
- About
- Contact
- Quote
- Privacy

## 2) Public Business Details Used

- Business name: **247 PRINT HOUSE**
- Phone (display): **0558213040**
- Phone link: **+233558213040**
- Email: **printproduction247@gmail.com**
- Address: **George Walker Bush Highway, Awoshie Waterworks, Accra, Ghana**
- Store ID default: **vRDr1e4KMpPKo53i9VHufJQRVcS2**

## 3) Required Environment Variables

Create `.env.local` from `.env.example`:

```bash
cp .env.example .env.local
```

Variables:

- `SEDIFEX_API_BASE_URL=`
- `SEDIFEX_STORE_ID=vRDr1e4KMpPKo53i9VHufJQRVcS2`
- `SEDIFEX_INTEGRATION_KEY=`

Sedifex integration is optional. The site works fully with static fallback data when variables are unset or API is unavailable.

## 4) Run Locally

Install dependencies and start development server:

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

Optional checks:

```bash
npm run lint
npm run type-check
npm run build
```

## 5) Deploy to Vercel

1. Push repository to GitHub/GitLab/Bitbucket.
2. Import project in [Vercel](https://vercel.com).
3. Set environment variables in Vercel project settings.
4. Deploy.

Vercel automatically detects Next.js and builds with production settings.

## 6) Update Company Contact Information

Update business contact details in:

- `lib/constants.ts`

Specifically edit:
- `BUSINESS.phoneDisplay`
- `BUSINESS.phoneLink`
- `BUSINESS.email`
- `BUSINESS.address`
- `BUSINESS.whatsapp`

## 7) Expand Services Later

To add or edit services:

1. Open `lib/constants.ts`.
2. Update the `SERVICES` array.
3. Each service supports:
   - `slug`
   - `title`
   - `description`
   - `useCases`
   - `icon`
   - `image`

The homepage, services page, and quote dropdown automatically reflect updates.

## 8) Data Safety Note (Very Important)

This public website must never expose internal billing/admin metadata, including but not limited to:

- billing
- currentPeriodEnd
- graceEndsAt
- lastChargeReference
- paystackCustomerCode
- paystackEmailToken
- paystackPlanCode
- paystackSubscriptionCode
- planKey
- paymentStatus
- contractStatus
- trialEndsAt
- ownerUid
- internal-only status metadata

Only safe public business information should be rendered on public pages.
