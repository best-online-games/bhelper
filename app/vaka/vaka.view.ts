namespace $.$$ {
	// Интерфейсы для типизации ответов API HH.ru
	interface HHVacancy {
		id: string
		name: string
		url: string
		salary: {
			from: number | null
			to: number | null
			currency: string
		} | null
		employer: {
			name: string
		}
		area: {
			name: string
		}
		snippet: {
			requirement: string | null
			responsibility: string | null
		}
		published_at: string
	}

	interface HHSearchResponse {
		items: HHVacancy[]
		found: number
		pages: number
		page: number
	}

	// Маппинг названий регионов на их ID в API HH.ru
	const AREA_MAP: Record<string, string> = {
		Россия: '113',
		Москва: '1',
		'Санкт-Петербург': '2',
	}

	export class $bog_prof_app_vaka extends $.$bog_prof_app_vaka {
		// Текущий поисковый запрос
		@$mol_mem
		query(next?: string): string {
			return next ?? 'разработчик'
		}

		// Выбранный регион
		@$mol_mem
		area_name(next?: string): string {
			return next ?? 'Россия'
		}

		// Получение ID региона для API
		@$mol_mem
		area_id(): string {
			return AREA_MAP[this.area_name()] ?? '113'
		}

		// Триггер поиска
		@$mol_mem
		search(next?: any): any {
			if (next !== undefined) {
				// Сбрасываем кэш результатов при новом поиске
				this.vacancies_data(null)
			}
			return next
		}

		// Получение данных о вакансиях с API
		@$mol_mem
		vacancies_data(reset?: null): HHSearchResponse | null {
			if (reset === null) return null

			const query = this.query()
			const area = this.area_id()

			if (!query.trim()) return null

			// Формируем URL для запроса
			const url = new URL('https://api.hh.ru/vacancies')
			url.searchParams.set('text', query)
			url.searchParams.set('area', area)
			url.searchParams.set('per_page', '20')
			url.searchParams.set('page', '0')

			try {
				// Выполняем запрос через $mol_fetch
				const response = this.$.$mol_fetch.json(url.toString()) as HHSearchResponse
				return response
			} catch (error) {
				console.error('Ошибка при загрузке вакансий:', error)
				return null
			}
		}

		// Список ID вакансий для отображения
		@$mol_mem
		vacancy_ids(): string[] {
			const data = this.vacancies_data()
			if (!data || !data.items) return []

			return data.items.map(v => v.id)
		}

		// Получение конкретной вакансии по ID
		@$mol_mem_key
		vacancy(id: string): HHVacancy | null {
			const data = this.vacancies_data()
			if (!data || !data.items) return null

			return data.items.find(v => v.id === id) ?? null
		}
	}
}
