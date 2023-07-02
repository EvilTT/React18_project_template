import type { FC } from 'react'
import React from 'react'
import cn from 'classnames'

import type { TAllProps } from './type'

import { Caption } from './Caption'
import { ColumsHeaders } from './ColumsHeaders'
import { Rows } from './Rows'
import s from './style.module.scss'

export const DataTable: FC<TAllProps> = ({
	autoLayout = false,
	colums,
	title = '',
	CSSTitleClassName = '',
	CSSTitleStyles = {},
	...props
}) => (
	<table
		className={cn(s.table, {
			[`${s.layoutAuto}`]: autoLayout,
		})}>
		{/* Заголовок таблицы */}
		<Caption
			CSSTitleClassName={CSSTitleClassName}
			CSSTitleStyles={CSSTitleStyles}
			title={title}
		/>
		{/* Заголовки столбцов */}
		<ColumsHeaders colums={colums} />
		{/* Строки таблицы */}
		<Rows {...props} colums={colums} />
	</table>
)
