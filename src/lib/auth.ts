import bcrypt from "bcryptjs";

type DemoUser = { email: string; name: string; passwordHash: string };

export const DEMO_USERS: DemoUser[] = [
  { email: "demo@cine-channel.test", name: "Demo User", passwordHash: "$2b$10$GFm/Jos/hmfSvJaKjcWt8eYpuE2.7G8yNAG4gomVGLxic2jW5ALTm" }
];

export async function verifyUser(email: string, password: string) {
  const u = DEMO_USERS.find(x => x.email.toLowerCase() === email.toLowerCase());
  if (!u) return null;
  const ok = await bcrypt.compare(password, u.passwordHash);
  return ok ? { email: u.email, name: u.name } : null;
}
