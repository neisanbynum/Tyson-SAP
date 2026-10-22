import type { ResolvedPathname } from "$app/types";

export type Prettier<T extends object> = { [K in keyof T]: T[K] } & {};

export type RouteArray = Array<ResolvedPathname>