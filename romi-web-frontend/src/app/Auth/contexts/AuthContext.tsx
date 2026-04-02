"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { decodeJwt, getToken, clearToken, setToken } from "@/lib/auth";
import { useRouter, usePathname } from "next/navigation";

type Role = "DOCTOR" | "PATIENT" | "ADMIN";
type Decoded = { sub: string; role?: Role | Role[]; roles?: (Role | string)[]; exp?: number };

type User = { id: string; roles: Role[] };

type AuthCtx = {
  user: User | null;
  ready: boolean;
  login: (accessToken: string) => void;
  logout: () => void;
};

const Ctx = createContext<AuthCtx>({
  user: null,
  ready: false,
  login: () => {},
  logout: () => {},
});

function parseRoles(decoded: Decoded | null): Role[] {
  if (!decoded) return [];
  const raw = (decoded.roles ?? decoded.role) as (Role | string)[] | Role | string | undefined;
  if (!raw) return [];
  return (Array.isArray(raw) ? raw : [raw]).map((r) => String(r).toUpperCase() as Role);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const boot = useCallback(() => {
    const t = getToken();
    if (!t) {
      setUser(null);
      setReady(true);
      return;
    }
    const decoded = decodeJwt<Decoded>(t);
    const now = Math.floor(Date.now() / 1000);
    const roles = parseRoles(decoded);

    if (!decoded || (decoded.exp && decoded.exp < now) || roles.length === 0) {
      clearToken();
      setUser(null);
      setReady(true);
      if (!pathname?.startsWith("/Auth")) router.replace("/Auth/Login");
      return;
    }
    setUser({ id: decoded.sub, roles });
    setReady(true);
  }, [pathname, router]);

  useEffect(() => {
    boot();
  }, [boot]);

  const login = useCallback((accessToken: string) => {
    setToken(accessToken);
    const decoded = decodeJwt<Decoded>(accessToken);
    const roles = parseRoles(decoded);
    if (decoded?.sub && roles.length > 0) {
      setUser({ id: decoded.sub, roles });
    } else {
      clearToken();
      setUser(null);
    }
  }, []);

  const logout = useCallback(() => {
    clearToken();
    setUser(null);
    router.replace("/Auth/Login");
  }, [router]);

  const value = useMemo(() => ({ user, ready, login, logout }), [user, ready, login, logout]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useAuth = () => useContext(Ctx);
