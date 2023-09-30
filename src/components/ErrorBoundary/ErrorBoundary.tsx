import React from 'react'
import {
	useNavigate,
	isRouteErrorResponse,
	useRouteError,
} from 'react-router-dom'

import type { FC, MouseEvent } from 'react'

import s from './style.module.scss'

export const ErrorBoundary: FC = () => {
	const [error, navigate] = [useRouteError(), useNavigate()]

	const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		navigate(-1)
	}
	const isRouteError = isRouteErrorResponse(error)

	return <div className={s.wrapper} />
}
