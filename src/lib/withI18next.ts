import { withNamespaces } from 'react-i18next'
import { ComponentType } from 'react'
import { Subtract } from 'utility-types'
import i18n from '../../i18n'

export interface InjectedI18nextProps {
	t: Function
	lng: string
}

export const withI18next = <T extends InjectedI18nextProps = InjectedI18nextProps>(
	namespaces = ['common'],
) => (ComposedComponent: ComponentType<T>) => {
	const Extended: ComponentType<Subtract<T, InjectedI18nextProps>> = withNamespaces(namespaces, {
		wait: process.browser,
	})(ComposedComponent)
	;(Extended as any).getInitialProps = async (ctx: any) => {
		const composedInitialProps = (ComposedComponent as any).getInitialProps
			? await (ComposedComponent as any).getInitialProps(ctx)
			: {}

		const i18nInitialProps = ctx.req ? i18n.getInitialProps(ctx.req, namespaces) : {}

		return {
			...composedInitialProps,
			...i18nInitialProps,
		}
	}

	return Extended
}
