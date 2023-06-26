import React from 'react'

import type { RouteObject } from 'react-router-dom'

import { Layout, ErrorBoundary } from '@components/'

export default (children: RouteObject[] = []): RouteObject => ({
	element: <Layout />,
	errorElement: <ErrorBoundary />,
	children,
})
