namespace $.$$ {
	export class $bog_bhelper_app_helpers extends $.$bog_bhelper_app_helpers {
		items(): {
			default_promt: string
			title: string
		}[] {
			return [
				{
					title: 'Юрист',
					default_promt: `Ты корпоративный юрист. Разбери ввод пользователя, объясни, какие договоры или документы нужны, предложи структуру и шаблон.`,
				},
				{
					title: 'Адвокат',
					default_promt: `Ты адвокат по гражданским делам. Сформируй стратегию защиты, составь план аргументов и список необходимых доказательств.`,
				},
			]
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
