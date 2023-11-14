import {
    ApolloClient,
    DefaultOptions,
    HttpLink,
    InMemoryCache,
    from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import https from 'https';

const defaultOptions: DefaultOptions = {
    watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
    },
};
const errorLink = onError(({ graphQLErrors, networkError, response }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
        );
    }
    if (response) console.log(`[Response error]: ${response}`);

    if (networkError) console.log(`[Network error]: ${networkError}`);
});
/* const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    // operation.setContext(({ headers = {} }) => ({
    //     headers: {
    //         ...headers,
    //         authorization: localStorage.getItem("token") || null,
    //     },
    // }));
    return forward(operation);
});
*/
const API_URL = import.meta.env.VITE_API_URL;

const httpLink = new HttpLink({
    uri: API_URL,
    fetchOptions: {
        agent: new https.Agent({ rejectUnauthorized: false }),
    },
});
export const client = new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
    defaultOptions,
});
