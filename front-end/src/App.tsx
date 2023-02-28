import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppRoutes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import Theme from './styles/themes/default';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={Theme}>
                <AppRoutes />
                <GlobalStyles />
            </ThemeProvider>
        </QueryClientProvider>
    );
};

export default App;
