export const ROLES = {
  MUNICIPAL: "municipal",
  TEACHER: "teacher",
  COORDINATOR: "coordinator",
  ADMIN: "admin",
} as const;

export type AppRole = (typeof ROLES)[keyof typeof ROLES];
