import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import type { RouteObject } from 'react-router-dom'
import type { FC } from 'react'

import { board, layout, home, calendar } from '@routes/'

const routes: RouteObject[] = [layout([home(), board(), calendar()])]
const router = createBrowserRouter(routes)

export const Router: FC = () => <RouterProvider router={router} />
