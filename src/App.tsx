import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import QueryApp from "./QueryApp";
import { Exception } from "./Exception/Component/Exception";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {

  console.log("App render");

  //React-Query用
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <ErrorBoundary
      FallbackComponent={Exception}
    >
      <QueryClientProvider client={queryClient}>
        <QueryApp />
        {/* React-query devtool */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ErrorBoundary>
  )
}

export default App
