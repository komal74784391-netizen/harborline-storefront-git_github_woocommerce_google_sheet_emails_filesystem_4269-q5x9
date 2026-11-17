// Promotion stacking rules for the checkout page.

export function stackCoupons(subtotal, coupons) {
// TODO(STF-170): Stack percentage and fixed-amount coupons safely
  return coupons.reduce((acc, coupon) => acc - coupon.value, subtotal);
}

export function regionAllowed(coupon, region) {
// TODO(STF-171): Block promo codes for restricted regions
  return !coupon.blockedRegions.includes(region);
}
