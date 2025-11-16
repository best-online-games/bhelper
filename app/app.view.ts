namespace $.$$ {

	export class $bog_bhelper_app extends $.$bog_bhelper_app {
		@ $mol_mem
		realm() {
			return this.Realm()
		}
		override Bot() {
			const obj = super.Bot()
			;(obj as any).context = () => this.Bot_context()
			return obj
		}

		Bot_context() {
			const base = this.Bot().rules()
			const prof = this.$.$mol_state_session.value('gd_profession') as string | null
			return prof
				? `${base}\nТы сейчас отвечаешь как ${prof}. Если пользователь поздоровается и попросит рассказать о себе, опиши, чем ты можешь помочь людям в этой роли, и приведи три типичных вопроса, которые тебе обычно задают.`
				: base
		}

	}
}
