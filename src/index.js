import React from 'react';
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import Home from './components/Home'
import App from './components/App'
import Errorpage from './components/Errorpage';

import Play from './components/Play'

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
            },
            {
                path: "play",
                element: <Play />
            }
        ]
    }
])

root.render( <RouterProvider router={router}/>);