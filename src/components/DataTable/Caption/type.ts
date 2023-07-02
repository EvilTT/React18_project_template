import type { CSSProperties, ElementType } from 'react'

export interface IProps {
	/** Заголовок */
	title?: string | ElementType
	/** Пользовательские стили для заголовка */
	CSSTitleStyles?: CSSProperties
	/** Пользовательский класс для заголовка */
	CSSTitleClassName?: string
}
