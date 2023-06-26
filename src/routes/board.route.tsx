import React, { lazy } from 'react'

import type { RouteObject } from 'react-router-dom'

const BoardPage = lazy(() => import('@pages/BoardPage/BoardPage'))

export default (children: RouteObject[] = []): RouteObject => ({
    path: 'board',
    element: <BoardPage />,
    children,
})
