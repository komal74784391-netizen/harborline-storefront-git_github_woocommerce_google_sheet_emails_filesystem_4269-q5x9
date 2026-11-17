"""Profile settings handlers."""

from address_tools import postal_lookup


def update_shipping_address(profile, address):
# TODO(STF-150): Validate address changes against the postal database
    profile["address"] = address
    return profile


def list_payment_methods(profile):
# TODO(STF-151): Show saved payment methods last-used date
    return [{"id": pm["id"], "brand": pm["brand"]} for pm in profile["payment_methods"]]
