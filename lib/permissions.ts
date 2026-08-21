import type { AppRole } from "@/config/roles";

export function hasRole(
  currentRole: AppRole,
  allowedRoles: readonly AppRole[],
): boolean {
  return allowedRoles.includes(currentRole);
}
