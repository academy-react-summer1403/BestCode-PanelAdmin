import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './index.css'

// ** Router Import
const queryClient = new QueryClient();

import Router from "./router/Router";

const App = () => {
  return (
    <Suspense fallback={null}>
       <QueryClientProvider client={queryClient}>
         <Router />
      </QueryClientProvider>
    </Suspense>
  );
};

export default App;
