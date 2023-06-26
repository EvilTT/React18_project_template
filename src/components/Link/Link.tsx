import React from 'react'
import { NavLink } from 'react-router-dom'

import type { FC } from 'react'
import { Text, Grid } from '@geist-ui/core'
import cn from 'classnames'

import type { Props } from './type'

import { FONT_COLOR } from '@constants/colors'

import s from './style.module.scss'

export const Link: FC<Props> = ({ link, value, icon: Icon }, ...props) => {
	return (
		<NavLink
			{...props}
			to={link}
			className={({ isActive }) =>
				cn(s.link, {
					[s.active as string]: isActive,
				})
			}>
			{({ isActive }) => (
				<Grid.Container
					gap={1}
					wrap='nowrap'
					alignItems='center'
					justify='flex-start'>
					<Grid>
						{Icon && (
							<Icon
								color={FONT_COLOR}
								size={isActive ? 26 : 24}
							/>
						)}
					</Grid>
					<Grid>
						<Text font='16px'>{value}</Text>
					</Grid>
				</Grid.Container>
			)}
		</NavLink>
	)
}
