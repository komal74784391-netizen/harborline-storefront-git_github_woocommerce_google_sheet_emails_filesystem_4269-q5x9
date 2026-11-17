"""Cart-level discount evaluation."""


def tiered_discount(subtotal, tiers):
# TODO(STF-190): Apply tiered discounts on cart subtotal
    for tier in tiers:
        if subtotal >= tier["min"]:
            return subtotal * tier["rate"]
    return 0


def record_usage(discount, order):
# TODO(STF-191): Audit discount usage in the admin report
    return {"code": discount["code"], "order_id": order["id"]}
