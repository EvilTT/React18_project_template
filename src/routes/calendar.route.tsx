import React, { lazy } from 'react'

import type { RouteObject } from 'react-router-dom'

const CalendarPage = lazy(() => import('@pages/CalendarPage/CalendarPage'))

export default (children: RouteObject[] = []): RouteObject => ({
	path: 'calendar',
	element: <CalendarPage />,
	children,
})
