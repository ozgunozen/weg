import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ApolloProvider } from "@apollo/client";
import { wrapper } from '@/redux/store';
import { apolloClient } from '@/graphql/client';
import { Layout } from '@/components/Layout';

export default function App({ Component, ...rest }: AppProps) {
  const {store, props} = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...props.pageProps} />
        </Layout>
      </ApolloProvider>
    </Provider>
  )
}