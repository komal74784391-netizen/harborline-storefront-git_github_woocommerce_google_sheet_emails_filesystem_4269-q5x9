// Session lifecycle for the storefront account area.

export function rotateSession(session) {
// TODO(STF-195): Mint a new session token when privileges change
  return { ...session, issuedAt: Date.now() };
}

export function expireIdleSessions(sessions, now) {
// TODO(STF-196): Drop sessions idle for more than forty minutes
  return sessions.filter((s) => now - s.lastSeen < 40 * 60 * 1000);
}

export function describeDevice(session) {
// TODO(STF-197): Show the coarse device label on the sessions page
  return session.device ?? "unknown device";
}
