namespace $.$$ {
	export class $bog_prof_app_vaka_item extends $.$bog_prof_app_vaka_item {
		// Данные вакансии передаются извне
		vacancy(next?: any): any {
			return next ?? null
		}

		// Название вакансии
		@$mol_mem
		title(): string {
			const vacancy = this.vacancy()
			return vacancy?.name ?? 'Без названия'
		}

		// Ссылка на вакансию
		@$mol_mem
		url(): string {
			const vacancy = this.vacancy()
			return vacancy?.url ?? '#'
		}

		// Метаинформация (работодатель и регион)
		@$mol_mem
		meta(): string {
			const vacancy = this.vacancy()
			if (!vacancy) return ''

			const employer = vacancy.employer?.name ?? 'Неизвестный работодатель'
			const area = vacancy.area?.name ?? 'Не указан'

			return `${employer} • ${area}`
		}

		// Зарплата
		@$mol_mem
		salary(): string {
			const vacancy = this.vacancy()
			if (!vacancy?.salary) return 'Зарплата не указана'

			const { from, to, currency } = vacancy.salary
			const curr = this.currency_symbol(currency)

			if (from && to) {
				return `💰 ${from.toLocaleString()} - ${to.toLocaleString()} ${curr}`
			} else if (from) {
				return `💰 от ${from.toLocaleString()} ${curr}`
			} else if (to) {
				return `💰 до ${to.toLocaleString()} ${curr}`
			}

			return 'Зарплата не указана'
		}

		// Преобразование кода валюты в символ
		currency_symbol(code: string): string {
			const symbols: Record<string, string> = {
				RUR: '₽',
				RUB: '₽',
				USD: '$',
				EUR: '€',
				KZT: '₸',
				UAH: '₴',
				BYR: 'Br',
			}
			return symbols[code] ?? code
		}

		// Описание вакансии (snippet)
		@$mol_mem
		snippet(): string {
			const vacancy = this.vacancy()
			if (!vacancy?.snippet) return ''

			const parts: string[] = []

			if (vacancy.snippet.requirement) {
				parts.push(`📋 Требования: ${this.clean_html(vacancy.snippet.requirement)}`)
			}

			if (vacancy.snippet.responsibility) {
				parts.push(`✅ Обязанности: ${this.clean_html(vacancy.snippet.responsibility)}`)
			}

			return parts.join('\n\n')
		}

		// Очистка HTML-тегов из текста
		clean_html(text: string): string {
			return text
				.replace(/<highlighttext>/gi, '**')
				.replace(/<\/highlighttext>/gi, '**')
				.replace(/<[^>]+>/g, '')
				.trim()
		}
	}
}
