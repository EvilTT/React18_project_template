import React, { useState } from 'react'

import type { FC } from 'react'
import type { TAllProps } from './Table/type'

import { Table } from './Table'

export const DataTable: FC<TAllProps> = props => {
	const [] = useState()

	return <Table {...props} />
}
