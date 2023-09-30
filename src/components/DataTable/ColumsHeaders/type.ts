import type { ElementType } from 'react'

export interface IProps {
	colums: IColum[]
}

interface IColum {
	/** Имя столбца */
	name: string | ElementType
	/** Уникальный key для столбца */
	id?: string
	/** Селектор данных в столбце */
	selector: (_d: any) => any
	/** Включает сортировку в столбце */
	sorted?: boolean
	/** Пользовательская фнкция сортировки */
	sotrFunc?: <T>(_a: T, _b: T) => number | undefined
}
