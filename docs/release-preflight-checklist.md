# Release Preflight Checklist

Hand-maintained sign-off list for the storefront release train. Each entry points
at an open engineering marker that the release team has agreed to track. This page
is curated by hand - it is not generated from every TODO comment in the tree.

## Open items

- [ ] **STF-150** - `src/account/profile.py:7` - Validate address changes against the postal database
- [ ] **STF-151** - `src/account/profile.py:13` - Show saved payment methods last-used date
- [ ] **STF-160** - `src/api/gateway.ts:5` - Return 429 with retry-after on burst limits
- [ ] **STF-161** - `src/api/gateway.ts:10` - Trace webhook deliveries with request ids
- [ ] **STF-195** - `src/auth/session.ts:4` - Mint a new session token when privileges change
- [ ] **STF-196** - `src/auth/session.ts:9` - Drop sessions idle for more than forty minutes
- [ ] **STF-197** - `src/auth/session.ts:14` - Show the coarse device label on the sessions page
- [ ] **STF-110** - `src/billing/invoices.py:8` - Emit credit notes for returned marketplace orders
- [ ] **STF-111** - `src/billing/invoices.py:14` - Round currency conversions to two decimals
- [ ] **STF-112** - `src/billing/invoices.py:20` - Queue invoice retries after gateway timeout
- [ ] **STF-113** - `src/billing/invoices.py:27` - Link invoices to the correct VAT profile
- [ ] **STF-180** - `src/billing/subscriptions.py:7` - Prorate plan changes mid-cycle
- [ ] **STF-181** - `src/billing/subscriptions.py:12` - Retry failed renewal charges on card update
- [ ] **STF-182** - `src/billing/subscriptions.py:17` - Surface upcoming renewal dates in account
- [ ] **STF-183** - `src/billing/subscriptions.py:22` - Cancel dunning emails after manual capture
- [ ] **STF-190** - `src/cart/discounts.py:5` - Apply tiered discounts on cart subtotal
- [ ] **STF-191** - `src/cart/discounts.py:13` - Audit discount usage in the admin report
- [ ] **STF-120** - `src/cart/reservations.py:9` - Expire stock reservations after 30 minutes
- [ ] **STF-121** - `src/cart/reservations.py:17` - Warn when a reservation outlives the cart session
- [ ] **STF-122** - `src/cart/reservations.py:23` - Release reservations when a coupon is removed
- [ ] **STF-130** - `src/catalog/facets.js:4` - Hide out-of-stock facets from the filter rail
- [ ] **STF-131** - `src/catalog/facets.js:9` - Persist facet selections across pagination
- [ ] **STF-132** - `src/catalog/facets.js:14` - Cap facet value lists at fifty entries
- [ ] **STF-170** - `src/checkout/promotions.ts:4` - Stack percentage and fixed-amount coupons safely
- [ ] **STF-171** - `src/checkout/promotions.ts:9` - Block promo codes for restricted regions
- [ ] **STF-101** - `src/checkout/summary.ts:7` - Render tax-inclusive totals for wholesale accounts
- [ ] **STF-102** - `src/checkout/summary.ts:14` - Collapse the order summary on mobile breakpoints
- [ ] **STF-103** - `src/checkout/summary.ts:20` - Handle partial refunds in summary line items
- [ ] **STF-140** - `src/search/query.js:4` - Boost exact SKU matches in search results
- [ ] **STF-141** - `src/search/query.js:9` - Debounce query suggestions while typing
- [ ] **STF-142** - `src/search/query.js:15` - Fall back to category matches when search returns nothing

## Notes

Update this page when tracked items are closed or moved. Vendor bundles and
markers without a ticket code are out of scope for the release sign-off.
