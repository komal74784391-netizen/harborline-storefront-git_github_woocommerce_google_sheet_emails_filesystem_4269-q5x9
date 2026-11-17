// Webhook delivery utilities.

export function replay(events) {
// TODO(STF-902): Replay failed webhook deliveries older than seven days
  return events.filter((event) => event.failed);
}
