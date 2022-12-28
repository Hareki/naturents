import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
function QueryClientSSR({ queryClient, dehydratedState, children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>{children}</Hydrate>
    </QueryClientProvider>
  );
}

export default QueryClientSSR;
