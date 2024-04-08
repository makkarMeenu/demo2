import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  split,
  ApolloLink,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { useState, useMemo, useCallback } from 'react';
import { SubscriptionClient } from 'subscriptions-transport-ws';

import { Env } from '@/config/env';

// Apollo Client instances for token-based (authenticated) and token-less (unauthenticated) scenarios
let _apolloClientWithToken: ApolloClient<NormalizedCacheObject> | null = null;
let _apolloClientWithoutToken: ApolloClient<NormalizedCacheObject> | null =
  null;

// Utility function to construct headers for Apollo requests
const getHeaders = (token: string | null) => ({
  authorization: `Bearer ${token}`,
  // Include any other headers here
});

// Function to create Apollo Links including WebSocket and HTTP Links

const getLinks = (token: string | null) => {
  const errorLink = onError(({ networkError }) => {
    if (networkError) {
      console.error(`[Network error]: ${networkError}`);
    }
  });

  const http = httpLink(token); // Ensure this is our HTTP link initialization

  // Initialize your WebSocket link only if needed
  const ws = token ? wsLink(token) : null;

  const link = ws
    ? split(
        // Condition for splitting between ws and http
        ({ query }) => {
          const definition = getMainDefinition(query);
          if (definition.kind === 'OperationDefinition') {
            const operation = definition.operation; // Remove unnecessary type assertion
            return operation === 'subscription';
          }
          return false;
        },
        ws, // Use WebSocket for subscriptions
        http // Use HTTP for queries and mutations
      )
    : http; // Default to HTTP if WebSocket isn't applicable

  return ApolloLink.from([errorLink, link]);
};

// Function to create an HTTP Link
const httpLink = (token: string | null) =>
  new HttpLink({
    uri: Env.EXPO_PUBLIC_GRAPHQL_URL,
    headers: getHeaders(token),
    preserveHeaderCase: true,
    fetchOptions: {
      mode: 'cors',
    },
  });

// Function to create a WebSocket Link
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const wsLink = (token: string | null) => {
  const subscriptionClient = new SubscriptionClient(
    Env.EXPO_PUBLIC_WS_URL as string,
    {
      reconnect: true,
      reconnectionAttempts: 5,
      connectionParams: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    }
  );
  subscriptionClient.onDisconnected(() => console.log('disconnected'));
  subscriptionClient.onReconnected(() => console.log('onReconnected'));
  subscriptionClient.onError(() => console.log('onbError'));
  return new WebSocketLink(subscriptionClient);
};

// Function to initialize Apollo Client
export const initializeApollo = (
  initialState: NormalizedCacheObject = {},
  token?: string
): ApolloClient<NormalizedCacheObject> => {
  let client: ApolloClient<NormalizedCacheObject>;

  if (token) {
    if (!_apolloClientWithToken) {
      _apolloClientWithToken = createApolloClient(token);
    }
    client = _apolloClientWithToken;
  } else {
    if (!_apolloClientWithoutToken) {
      _apolloClientWithoutToken = createApolloClient(null);
    }
    client = _apolloClientWithoutToken;
  }

  // Restore the cache with the initial state
  if (initialState && Object.keys(initialState).length > 0) {
    const existingCache = client.extract();
    client.cache.restore({ ...existingCache, ...initialState });
  }
  return client;
};
// Function to create an Apollo Client instance
export function createApolloClient(token: string | undefined | null) {
  if (token !== undefined && token !== null) {
    const apolloClient = new ApolloClient({
      link: getLinks(token),
      cache: new InMemoryCache(),
      headers: getHeaders(token),
    });
    return apolloClient;
  } else {
    return new ApolloClient({
      uri: Env.EXPO_PUBLIC_GRAPHQL_URL,
      cache: new InMemoryCache(),
    });
  }
}

export const useApollo = (
  initialState: NormalizedCacheObject,
  token: string
) => {
  const [networkError, setNetworkError] = useState<Error | null>(null);

  const handleError = useCallback((error: Error) => {
    setNetworkError(error);
  }, []);

  const store = useMemo(() => {
    const client = initializeApollo(initialState, token);

    // Setup a listener for network errors
    const errorLink = onError(({ networkError: error }) => {
      if (error) {
        handleError(new Error(`[Network error]: ${error}`));
      }
    });

    const link = ApolloLink.from([errorLink, client.link]);

    client.setLink(link);
    return client;
  }, [initialState, token, handleError]);

  return {
    client: store,
    networkError,
    clearNetworkError: () => setNetworkError(null),
  };
};

// Function to reset Apollo Client instances
export const resetApolloClient = () => {
  _apolloClientWithToken = null;
  _apolloClientWithoutToken = null;
};
