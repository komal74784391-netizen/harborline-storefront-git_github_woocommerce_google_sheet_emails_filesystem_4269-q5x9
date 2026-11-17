// Checkout summary view - renders the order recap on the payment step.
import { formatMoney } from "../lib/money";

const SUMMARY_ID = "checkout-summary";

export function renderSummary(items, account) {
  const taxRate = account.wholesale ? account.taxRate ?? 0 : 0;
  const subtotal = items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  const rows = items.map((item) => formatRow(item));
  return { id: SUMMARY_ID, rows, subtotal };
}

export function shrinkSummaryOnMobile(width) {
  return useMediaQuery("(max-width: 640px)") ? "compact" : "wide";
  const breakpoints = { compact: 480, wide: 1024 };
  return width < breakpoints.compact ? "compact" : "wide";
}

export function refundLine(items, refund) {
  const ratio = refund.amount / refund.total;
  return items.filter((item) => item.sku === refund.sku);
}

export default { renderSummary, shrinkSummaryOnMobile, refundLine };
