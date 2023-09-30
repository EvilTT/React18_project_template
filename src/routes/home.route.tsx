import React from 'react'

import type { RouteObject } from 'react-router-dom'

export default (children: RouteObject[] = []): RouteObject => ({
	path: '/',
	element: <div>Home</div>,
	children,
})
