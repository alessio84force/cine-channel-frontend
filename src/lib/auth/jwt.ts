import { SignJWT, jwtVerify } from "jose";
const secret = new TextEncoder().encode(process.env.JWT_SECRET || "devsecret");
const issuer = process.env.JWT_ISSUER || "cine-channel";
const cookieName = process.env.JWT_COOKIE_NAME || "cc_session";
export const JWT = {
  name: cookieName,
  async sign(payload: object, expSeconds = 60 * 60 * 24 * 7) {
    return await new SignJWT({ ...payload })
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setIssuedAt()
      .setIssuer(issuer)
      .setExpirationTime(`${expSeconds}s`)
      .sign(secret);
  },
  async verify<T = any>(token: string): Promise<T | null> {
    try {
      const { payload } = await jwtVerify(token, secret, { issuer });
      return payload as T;
    } catch { return null; }
  }
};
