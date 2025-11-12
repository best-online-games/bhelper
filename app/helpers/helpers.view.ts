namespace $.$$ {
	export const $mol_github_model_polyglots = ['xai/grok-3']

	export class $bog_bhelper_app_helpers extends $.$bog_bhelper_app_helpers {
		private readonly helper_catalog_data: readonly {
			default_promt: string
			title: string
			description: string
			icon: string
		}[] = [
			{
				title: 'Юрист',
				description: 'Документы, договоры, правовые заключения, сопровождение сделок.',
				icon: 'briefcase',
				default_promt: `Ты корпоративный юрист. Разбери ввод пользователя, объясни, какие договоры или документы нужны, предложи структуру и шаблон.`,
			},
			{
				title: 'Адвокат',
				description: 'Судебные стратегии, консультации по спорам, анализ доказательств.',
				icon: 'scales',
				default_promt: `Ты адвокат по гражданским делам. Сформируй стратегию защиты, составь план аргументов и список необходимых доказательств.`,
			},
		]

		@$mol_mem
		query(next?: string) {
			return next ?? ''
		}

		@$mol_mem
		items(): readonly {
			default_promt: string
			title: string
			description: string
			icon: string
		}[] {
			const query = this.query().trim().toLowerCase()
			const catalog = this.helper_catalog_data
			if (!query) return catalog
			return catalog.filter(helper => {
				const haystack = `${helper.title} ${helper.description}`.toLowerCase()
				return haystack.includes(query)
			})
		}

		@$mol_mem
		helper_cards() {
			return this.items().map((_, index) => this.item(index)) as readonly $mol_view[]
		}

		helper_title(index: number) {
			return this.items()[index]?.title ?? ''
		}

		helper_description(index: number) {
			return this.items()[index]?.description ?? ''
		}

		icon_path(index: number) {
			return this.items()[index]?.icon ?? ''
		}

		item_uri(index: number) {
			const helper = this.items()[index] ?? this.items()[0]
			return this.$.$mol_state_arg.link({ '': '\t', prompt: helper?.default_promt ?? '' })
		}

		@$mol_action
		item_open(index: number, event?: Event) {
			event?.preventDefault()
			const helper = this.items()[index] ?? this.items()[0]
			const title = helper?.title ?? ''
			const prompt = helper?.default_promt ?? ''
			try {
				this.$.$mol_state_session?.value('history', null as any)
			} catch (error) {}
			try {
				this.$.$mol_state_session?.value('title', null as any)
			} catch (error) {}
			try {
				this.$.$mol_state_session?.value('digest', '')
			} catch (error) {}
			try {
				this.$.$mol_state_session?.value('gd_profession', title)
			} catch (error) {}
			this.$.$mol_state_arg.go({ '': '\t', prompt })
		}
	}
}
