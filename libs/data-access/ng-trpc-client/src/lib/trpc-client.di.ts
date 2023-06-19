import { InjectionToken, Provider, inject } from '@angular/core';
import { createTRPCProxyClient, httpLink } from '@trpc/client';
import { AnyRouter } from '@trpc/server';
export interface TRPCClientConfig {
  url: string;
}

export function createTRPCAngular<TRouter extends AnyRouter>() {
  const TRPC_CLIENT_INJECTION_TOKEN = new InjectionToken<ReturnType<typeof createTRPCProxyClient<TRouter>>>(
    '__TRPC_CLIENT_INJECTION_TOKEN__'
  );

  const provideTRPCClient = (config: TRPCClientConfig): Provider => ({
    provide: TRPC_CLIENT_INJECTION_TOKEN,
    useFactory: () => {
      const client = createTRPCProxyClient<AnyRouter>({
        links: [
          httpLink({
            url: config.url,
            fetch(url, options) {
              return fetch(url, { ...options, credentials: 'include' });
            },
          }),
        ],
      });
      return client;
    },
  });

  const injectTRPC = () => inject(TRPC_CLIENT_INJECTION_TOKEN);

  return [provideTRPCClient, injectTRPC] as const;
}
