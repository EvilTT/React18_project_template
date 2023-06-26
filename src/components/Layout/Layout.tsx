import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Grid } from '@geist-ui/core'

import { Loader, Menu } from '@components/'

import type { FC } from 'react'

export const Layout: FC = () => {
	return (
		<Grid.Container height='100vh' gap={1}>
			<Grid xs={3}>
				<Menu />
			</Grid>
			<Grid xs={21}>
				<Grid.Container direction='column'>
					<Grid xs={2}>Nav</Grid>
					<Grid xs={22}>
						<Suspense fallback={<Loader />}>
							<Outlet />
						</Suspense>
					</Grid>
				</Grid.Container>
			</Grid>
		</Grid.Container>
	)
}
