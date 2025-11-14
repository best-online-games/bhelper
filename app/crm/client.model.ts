namespace $.$$ {

	export class $bog_bhelper_crm_profile extends $hyoo_crus_dict.with({
		Clients: $hyoo_crus_list_ref( () => $bog_bhelper_crm_client )
	}) {}

	export class $bog_bhelper_crm_client extends $hyoo_crus_dict.with({

		// Базовая инфа
		Name: $hyoo_crus_atom_str,			  // Имя/название
		Company: $hyoo_crus_atom_str,		   // Компания (если есть)
		Status: $hyoo_crus_atom_str,			// new/lead/client/lost
		Segment: $hyoo_crus_atom_str,
		Source: $hyoo_crus_atom_str,			// Источник лида (сайт, ad, ...)

		// Контакты
		Phone: $hyoo_crus_atom_str,
		Email: $hyoo_crus_atom_str,
		Telegram: $hyoo_crus_atom_str,
		WhatsApp: $hyoo_crus_atom_str,
		PreferredChannel: $hyoo_crus_atom_str,  // phone/email/tg/wa

		// Бизнес-метрики
		City: $hyoo_crus_atom_str,
		AverageCheck: $hyoo_crus_atom_str,
		LTV: $hyoo_crus_atom_str,
		VisitFrequency: $hyoo_crus_atom_str,	// "еженедельно", "раз в месяц"

		// Воронка/активность
		PipelineStage: $hyoo_crus_atom_str,	 // discovery/demo/offer/closed
		LastContactAt: $hyoo_crus_atom_str,	 // ISO-строка даты
		NextActionAt: $hyoo_crus_atom_str,	  // когда дернуть снова
		IsVIP: $hyoo_crus_atom_bool,			// важный клиент

		// Заметки / ИИ-подсказки
		LastNote: $hyoo_crus_text,		 // ручные заметки
		AiSummary: $hyoo_crus_text,		// конспект общения от ИИ
		AiNextStep: $hyoo_crus_text,	   // предложенный ИИ next step

		// Служебное
		CreatedAt: $hyoo_crus_atom_str,
		UpdatedAt: $hyoo_crus_atom_str,
		TagsCsv: $hyoo_crus_text,		  // "доставка,кофейня,постоянный"

	}) {}

}
