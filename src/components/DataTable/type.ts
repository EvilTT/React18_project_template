import type { ICaptionProps } from './Caption'
import type { IColumsHeadersProps } from './ColumsHeaders'
import type { IRowsProps } from './Rows'

export interface IProps {
	/**  Включает выбор строк */
	// isSelectRow?: boolean
	//! Обработчик при выборе строк
	/** selectHandler?: <T>() => T */
	/** Включает эффект при наведении на строку */
	// hoverable?: boolean
	/** Автоматический подбор ширины столбцов */
	autoLayout?: boolean
}

export type TAllProps = IProps &
	ICaptionProps &
	IColumsHeadersProps &
	IRowsProps
