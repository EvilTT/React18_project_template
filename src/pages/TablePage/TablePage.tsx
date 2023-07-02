import React from 'react'

import { DataTable } from '@components/'

import type { FC } from 'react'

const col = [
	{
		name: 'Name',
		selector: (d: (typeof data)[0]) => d.name,
		id: '1',
	},
	{
		name: 'Surasdasdae',
		selector: (d: (typeof data)[0]) => d.surname,
		id: '2',
	},
	{
		name: 'Age',
		selector: (d: (typeof data)[0]) => d.age,
		id: '3',
	},
]

const data = [
	{
		name: 'max',
		age: 22,
		surname: 'zavadskiy',
	},
	{
		name: 'max',
		age: 22,
		surname: 'zavadskiy',
	},
	{
		name: 'max',
		age: 22,
		surname: 'zavadskiy',
	},
]

const TablePage: FC = () => (
	<DataTable
		colums={col}
		data={data}
		title='DataTable'
		CSSTitleStyles={{ fontSize: '25px' }}
	/>
)

export default TablePage
