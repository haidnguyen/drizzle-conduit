import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';

export const createContext = async (context: trpcExpress.CreateExpressContextOptions) => {
  return {
    req: context.req,
    res: context.res,
  };
};

const t = initTRPC.context<inferAsyncReturnType<typeof createContext>>().create();

export const procedure = t.procedure;
export const router = t.router;
