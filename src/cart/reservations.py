"""Stock reservation bookkeeping for the cart service."""

from datetime import timedelta

RESERVATION_TTL = timedelta(minutes=30)

# Multi-warehouse helpers added for the replenishment pilot.
WAREHOUSE_PRIORITY = ("west", "central", "east")


def _warehouse_priority(sku, warehouses):
    available = []
    for name in WAREHOUSE_PRIORITY:
        if warehouses.get(name, {}).get("has_stock", {}).get(sku):
            available.append(name)
    return available


def _reservation_key(cart):
    return "reservation/" + str(cart["id"])



def reserve_stock(cart, items):
# TODO(STF-120): Expire stock reservations after 30 minutes
    reservations = []
    for item in items:
        reservations.append({"sku": item["sku"], "qty": item["qty"], "at": cart["updated_at"]})
    return reservations


def warn_stale_reservation(cart):
# TODO(STF-121): Warn when a reservation outlives the cart session
    age = cart["updated_at"] - cart["created_at"]
    return age > RESERVATION_TTL


def release_on_coupon_change(cart, previous_coupon):
# TODO(STF-122): Release reservations when a coupon is removed
    if previous_coupon != cart.get("coupon"):
        return True
    return False

# TODO(STF-199): Sync reservation counts with the multi-warehouse stock feed
