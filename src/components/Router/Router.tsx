import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import type { FC } from 'react'

import { board, layout, home, calendar, table } from '@routes/'

const routes = [layout([home(), board(), calendar()]), table()]
const router = createBrowserRouter(routes)

export const Router: FC = () => <RouterProvider router={router} />
