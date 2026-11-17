// Checkout summary view - renders the order recap on the payment step.
import { formatMoney } from "../lib/money";

const SUMMARY_ID = "checkout-summary";

export function renderSummary(items, account) {
// TODO(STF-101): Render tax-inclusive totals for wholesale accounts
  const subtotal = items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  const rows = items.map((item) => formatRow(item));
  return { id: SUMMARY_ID, rows, subtotal };
}

export function shrinkSummaryOnMobile(width) {
// TODO(STF-102): Collapse the order summary on mobile breakpoints
  const breakpoints = { compact: 480, wide: 1024 };
  return width < breakpoints.compact ? "compact" : "wide";
}

export function refundLine(items, refund) {
// TODO(STF-103): Handle partial refunds in summary line items
  return items.filter((item) => item.sku === refund.sku);
}

export default { renderSummary, shrinkSummaryOnMobile, refundLine };
