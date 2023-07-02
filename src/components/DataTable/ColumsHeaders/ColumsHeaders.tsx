import React from 'react'
import cn from 'classnames'

import type { FC } from 'react'
import type { IProps } from './type'

import s from './style.module.scss'
export const ColumsHeaders: FC<IProps> = ({ colums }) => (
	<thead>
		<tr>
			{colums.map(({ name: Name, id }, i) => (
				<th key={id ? id : i.toString()} className={cn(s.cellHeader)}>
					{typeof Name === 'string' ? Name : <Name />}
				</th>
			))}
		</tr>
	</thead>
)
