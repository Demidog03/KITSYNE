"use client";

import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from "@apollo/client";
import { useMemo } from "react";

interface ApolloProviderProps {
    children: React.ReactNode;
    initialApolloState?: any;
}

export function ApolloProviderWrapper({ children, initialApolloState }: ApolloProviderProps) {
    const client = useMemo(() => {
        return new ApolloClient({
            ssrMode: typeof window === "undefined",
            link: new HttpLink({
                uri: "YOUR_GRAPHQL_ENDPOINT",
            }),
            cache: new InMemoryCache().restore(initialApolloState || {}),
        });
    }, [initialApolloState]);

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
