import type { IColumsHeadersProps } from '../ColumsHeaders'

export interface IRows {
	/** Пользовательские данные */
	data: any[]
	/** Имя Key для доступа к уникальному key для строки */
	keyField?: string
}

export type IProps = IColumsHeadersProps & IRows
