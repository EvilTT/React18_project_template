import React from 'react'

import type { FC } from 'react'
import type { IProps } from './type'

export const ColumsHeaders: FC<IProps> = ({ colums }) => (
	<thead>
		<tr>
			{colums.map(({ name: Name, id }, i) => (
				<th key={id ? id : i.toString()}>
					{typeof Name === 'string' ? Name : <Name />}
				</th>
			))}
		</tr>
	</thead>
)
