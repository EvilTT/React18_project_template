import React from 'react'
import cn from 'classnames'

import type { FC } from 'react'
import type { IProps } from './type'

import s from './style.module.scss'

export const Rows: FC<IProps> = ({ data, keyField = 'id', colums }) => (
	<tbody>
		{data.map((item, i) => {
			const key =
				(item[keyField] && typeof item[keyField] === 'string') ||
				i.toString()
			return (
				<tr key={key}>
					{colums.map(({ selector, name }) => (
						<td key={`${key}_${name}`} className={cn(s.cell)}>
							{selector(item)}
						</td>
					))}
				</tr>
			)
		})}
	</tbody>
)
