"""Subscription renewal bookkeeping."""

from datetime import date


def prorate_plan_change(sub, new_plan):
# TODO(STF-180): Prorate plan changes mid-cycle
    return {"subscription_id": sub["id"], "plan": new_plan["code"]}


def retry_renewal(charge_id, attempt):
# TODO(STF-181): Retry failed renewal charges on card update
    return {"charge_id": charge_id, "attempt": attempt + 1}


def upcoming_renewals(sub):
# TODO(STF-182): Surface upcoming renewal dates in account
    return {"next_renewal": sub.get("renews_on", date.today().isoformat())}


def stop_dunning(sub):
# TODO(STF-183): Cancel dunning emails after manual capture
    return {"subscription_id": sub["id"], "dunning": False}
