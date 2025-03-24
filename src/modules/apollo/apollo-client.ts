import {useMemo} from 'react';
import {ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject} from '@apollo/client';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: new HttpLink({
            uri: 'YOUR_GRAPHQL_ENDPOINT',
            credentials: 'same-origin',
        }),
        cache: new InMemoryCache(),
    });
}

export function initializeApollo(initialState: Record<string, any> | null = null) {
    const _apolloClient = apolloClient ?? createApolloClient();

    if (initialState) {
        const existingCache = _apolloClient.extract();

        _apolloClient.cache.restore({ ...existingCache, ...initialState });
    }

    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined') return _apolloClient;

    if (!apolloClient) apolloClient = _apolloClient;

    return _apolloClient;
}

export function useApollo(initialState: any) {
    return useMemo(() => initializeApollo(initialState), [initialState]);
}

//NOTE: use in ssr component

// app/ssr-page/page.tsx
// import { gql } from "@apollo/client";
// import { getApolloServerClient } from "@/lib/get-apollo-server-client";
// import { ApolloProviderWrapper } from "../apollo-provider";
//
// const QUERY = gql`
//   query GetExampleData {
//     examples {
//       id
//       name
//     }
//   }
// `;

// export default async function SSRPage() {
//     // Server Component data fetching
//     const client = getApolloServerClient();
//     const { data } = await client.query({ query: QUERY });
//
//     // Extract cache to hydrate client
//     const initialApolloState = client.cache.extract();
//
//     return (
//         <ApolloProviderWrapper initialApolloState={initialApolloState}>
//             <h1>SSR Page with Apollo</h1>
//     <ClientSideComponent serverData={data} />
//     </ApolloProviderWrapper>
// );
// }
//

// // Client component that can use Apollo hooks
// "use client";
// function ClientSideComponent({ serverData }) {
//     // You can use Apollo hooks here if needed
//     return (
//         <ul>
//             {serverData.examples.map(example => (
//                     <li key={example.id}>{example.name}</li>
//                 ))}
//         </ul>
//     );
// }
