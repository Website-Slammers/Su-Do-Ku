import React from 'react';
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children:[
            {
                index: true,
                element: <Home />
            }
        ]
    }
])

const root = createRoot( document.getElementById("app"));
root.render( <RouterProvider router={router}/>);

