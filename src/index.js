import React from 'react';
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import Home from './components/Home'
import App from './components/App'
import Errorpage from './components/Errorpage';

const appElement = document.getElementById('app');
const root = createRoot(appElement);
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Errorpage />,
        children:[
            {
                index: true,
                element: <Home />
            }
        ]
    }
])

root.render( <RouterProvider router={router}/>);