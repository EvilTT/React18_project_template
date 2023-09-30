import React from 'react'
import cn from 'classnames'

import type { FC } from 'react'
import type { IProps } from './type'
import s from './style.module.scss'

export const Caption: FC<IProps> = ({
	CSSTitleClassName,
	CSSTitleStyles,
	title: Title,
	stickyHeader,
}) => (
	<>
		{Title && (
			<caption
				className={cn(s.title, CSSTitleClassName, {
					[`${s.stickyHeader}`]: stickyHeader,
				})}
				style={CSSTitleStyles}>
				{typeof Title === 'string' ? Title : <Title />}
			</caption>
		)}
	</>
)
