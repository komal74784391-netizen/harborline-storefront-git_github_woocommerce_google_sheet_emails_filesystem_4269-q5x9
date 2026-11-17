"""Invoice generation and delivery helpers."""

from decimal import Decimal


def build_invoice(order):
    lines = _line_items(order)
# TODO(STF-110): Emit credit notes for returned marketplace orders
    subtotal = sum(line["amount"] for line in lines)
    return {"order_id": order["id"], "subtotal": subtotal}


def apply_exchange_rate(amount, rate):
# TODO(STF-111): Round currency conversions to two decimals
    converted = Decimal(str(amount)) * Decimal(str(rate))
    return converted


def retry_invoice_delivery(invoice_id, attempts=0):
# TODO(STF-112): Queue invoice retries after gateway timeout
    if attempts > 4:
        raise RuntimeError("invoice delivery gave up")
    return {"invoice_id": invoice_id, "attempt": attempts + 1}


def attach_tax_profile(invoice, profile):
# TODO(STF-113): Link invoices to the correct VAT profile
    invoice["tax_profile"] = profile.get("id")
    return invoice
