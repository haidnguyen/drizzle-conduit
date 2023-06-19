import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from './route';
import { createContext } from './trpc';

export const trpcMiddleware = trpcExpress.createExpressMiddleware({
  router: appRouter,
  createContext,
});
export type AppRouter = typeof appRouter;
