/** Mensaje seguro desde valores capturados en catch */
export function errMsg(e: unknown, fallback = "Error"): string {
  if (e instanceof Error) return e.message;
  if (typeof e === "string") return e;
  return fallback;
}
