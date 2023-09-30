import React from 'react'

import type { RouteObject } from 'react-router-dom'

import TablePage from '@pages/TablePage/TablePage'

export default (children: RouteObject[] = []): RouteObject => ({
	path: 'table',
	element: <TablePage />,
	children,
})
