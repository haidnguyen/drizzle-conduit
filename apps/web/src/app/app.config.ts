import { ApplicationConfig } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { provideTRPCClient } from '@drizzle-conduit/data-access/trpc-client';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideTRPCClient({ url: 'http://localhost:3333/trpc' }),
  ],
};
