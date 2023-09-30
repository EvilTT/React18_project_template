import type { To } from 'react-router-dom'
import type { Icon } from '@geist-ui/icons'

export interface Props {
	link: To
	value: string
	icon?: Icon
}
