import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://chatapp-ali.herokuapp.com',
    cache: new InMemoryCache()
});