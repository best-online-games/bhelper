	namespace $.$$ {
		interface HHProfRole {
			id: string
			name: string
		}

		interface HHProfCategory {
			id: string
			name: string
			roles: HHProfRole[]
		}

		type HHProfFlat = {
			id: string
			name: string
			category: string
		}

		export class $bog_bhelper_app_prof extends $.$bog_bhelper_app_prof {
			// Запасной набор, если API недоступно
			private fallback_helpers(): HHProfFlat[] {
				return [
					{ id: 'lawyer', name: 'Личный юрист', category: 'Юридические услуги' },
					{ id: 'accountant', name: 'Личный бухгалтер', category: 'Финансы' },
					{ id: 'finance', name: 'Финансовый консультант', category: 'Финансы' },
					{ id: 'career', name: 'Карьерный коуч', category: 'Карьерное развитие' },
				]
			}

			// Роли из API HH.ru (https://api.hh.ru/professional_roles)
			@$mol_mem
			roles_data(): HHProfCategory[] {
				const url = 'https://api.hh.ru/professional_roles'
				try {
					const data = this.$.$mol_fetch.json(url, { cache: 'force-cache' }) as {
						categories: HHProfCategory[]
					}
					return data?.categories ?? []
				} catch (error) {
					console.warn('[prof] Не удалось загрузить роли HH.ru', error)
					return []
				}
			}

			// Плоский список ролей: имя + категория
			@$mol_mem
			roles(): HHProfFlat[] {
				const categories = this.roles_data()
				if (!categories.length) return this.fallback_helpers()

				return categories.flatMap(cat =>
					(cat.roles ?? []).map(role => ({
						id: role.id,
						name: role.name,
						category: cat.name,
					})),
				)
			}

			@$mol_mem
			query(next?: string): string {
				return next ?? ''
			}

			// Отфильтрованный список ролей
			@$mol_mem
			filtered_roles(): HHProfFlat[] {
				const q = this.query().toLowerCase().trim()
				const roles = this.roles()
				if (!q) return roles
				return roles.filter(role => role.name.toLowerCase().includes(q) || role.category.toLowerCase().includes(q))
			}

			helper_title(id: number): string {
				return this.filtered_roles()[id]?.name ?? ''
			}

			helper_description(id: number): string {
				const role = this.filtered_roles()[id]
				return role ? `Категория: ${role.category}` : ''
			}

			Helper_item_uri(index: number) {
				// Используем ссылку по умолчанию — click обработает переход
				return '#'
			}

			@$mol_mem
			Helpers_gallery_items() {
				return this.filtered_roles().map((_, i) => this.Helper_item(i))
			}


			@$mol_action
			Helper_item_open(index: number, event?: Event) {
				event?.preventDefault()
				const title = this.helper_title(index)
				try {
					this.$.$mol_state_session?.value('history', null as any)
				} catch {}
				try {
					this.$.$mol_state_session?.value('title', null as any)
				} catch {}
				try {
					this.$.$mol_state_session?.value('digest', '')
				} catch {}
				try {
					this.$.$mol_state_session?.value('gd_profession', title)
				} catch {}
				this.$.$mol_state_arg.go({
					'': '',
					prompt: 'привет',
				})
			}
		}
	}
