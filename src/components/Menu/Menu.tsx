import React from 'react'
import { Grid, Spacer } from '@geist-ui/core'
import { Calendar, Columns } from '@geist-ui/icons'
import { Link as RouteLink } from 'react-router-dom'

import type { FC } from 'react'
import { Link } from '@components/'

import s from './style.module.scss'

export const Menu: FC = () => (
	<div className={s.menu_container}>
		<Spacer h={2} />
		<RouteLink className={s.logo} to='/'>
			Pro manage
		</RouteLink>
		<Spacer h={4} />
		<Grid.Container direction='column'>
			<Link link='board' value='Board' icon={Columns} />
		</Grid.Container>
		<Grid.Container direction='column'>
			<Link link='calendar' value='Calendar' icon={Calendar} />
		</Grid.Container>
		<Grid.Container direction='column'>
			<Link link='table' value='Table' />
		</Grid.Container>
	</div>
)
