import { router } from '../trpc';
import { userRouter } from './user';

export const appRouter = router({
  user: userRouter,
});
