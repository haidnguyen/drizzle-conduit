import { z } from 'zod';
import { procedure, router } from '../trpc';

const createUserProcedure = procedure.input(z.string()).query(async ({ input, ctx }) => {
  return { input };
});

export const userRouter = router({
  create: createUserProcedure,
});
