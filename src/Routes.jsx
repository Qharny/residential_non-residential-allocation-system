import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HeroPage from './components/hero/hero';
import Dashboard from './components/dashboard/dashboard'
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

function RoutePages() {
    return (
        <Provider store={store}>
            <BrowserRouter>

                    <Routes>
                        <Route path="/" element={<HeroPage />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        {/* Add more routes here as needed */}
                    </Routes>
            </BrowserRouter>
        </Provider>
    );
}
export default RoutePages;
