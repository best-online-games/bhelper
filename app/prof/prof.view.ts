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
        prof_rows(): readonly any[] {
            const ids = this.professions_by_category()
            console.log(ids)
            // return ids.map(id => this.Row(id))
			return ['Разработчик', 'Тестировщик', 'Аналитик', 'DevOps']
        }
    }
}
