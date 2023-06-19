import type { AppRouter } from '@drizzle-conduit/data-access/trpc';
import { createTRPCAngular } from 'ng-trpc-client';
export const [provideTRPCClient, injectTRPC] = createTRPCAngular<AppRouter>();
