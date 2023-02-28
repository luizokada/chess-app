import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Board from './pages/Board';

type RouteArrayProps = {
    path: string;
    component: React.FC;
    private: boolean;
    hideHeader?: boolean;
};

export const RoutesArray: RouteArrayProps[] = [
    {
        path: '/',
        component: Board,
        private: false,
    },
];

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                {RoutesArray.map((route, index) => {
                    if (route.private) {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={<route.component />}
                            />
                        );
                    } else if (!route.private) {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <>
                                        <route.component />
                                    </>
                                }
                            />
                        );
                    }
                })}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
