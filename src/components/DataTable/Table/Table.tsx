import React from 'react'
import cn from 'classnames'

import type { FC } from 'react'
import type { TAllProps } from './type'

import { Caption } from '../Caption'
import { ColumsHeaders } from '../ColumsHeaders'
import { Rows } from '../Rows'

import s from './style.module.scss'

export const Table: FC<TAllProps> = ({ autoLayout = false, ...props }) => (
	<table
		className={cn(s.table, {
			[`${s.layoutAuto}`]: autoLayout,
		})}>
		{/* Заголовок таблицы */}
		<Caption
			// CSSTitleClassName={CSSTitleClassName}
			// CSSTitleStyles={CSSTitleStyles}
			// title={title}
			{...props}
		/>
		{/* Заголовки столбцов */}
		<ColumsHeaders {...props} />
		{/* Строки таблицы */}
		<Rows {...props} />
	</table>
)

export default Table
