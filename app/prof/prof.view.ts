namespace $.$$ {
	export class $bog_prof_app_prof extends $.$bog_prof_app_prof {
		@$mol_mem
		professions_by_category() {
			return {
				ИТ: ['Разработчик', 'Тестировщик', 'Аналитик', 'DevOps'],
				Дизайн: ['UI/UX дизайнер', 'Графический дизайнер'],
				Маркетинг: ['Маркетолог', 'SMM-менеджер'],
			} as const
		}

		@$mol_mem
		Categories() {
			return Object.keys(this.professions_by_category()).map(cat => this.Category_page(cat))
		}

		category_title(category: string) {
			return category
		}

		@$mol_mem_key
		profession_names(category: string) {
			const dict = this.professions_by_category() as Record<string, readonly string[]>
			return dict[category] ?? []
		}

		item_name(name: string) {
			return name
		}

		item_uri(name: string) {
			return `#${encodeURIComponent(name)}`
		}

		item_icon(name: string) {
			return `/bog/prof/assets/${ encodeURIComponent(name) }.png`
		}
	}
}

