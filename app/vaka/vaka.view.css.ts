namespace $.$$ {
	$mol_style_define($bog_prof_app_vaka, {
		flex: {
			grow: 1,
		},
		Tools: {
			padding: $mol_gap.block,
			flex: {
				wrap: 'wrap',
			},
			gap: $mol_gap.text,
		},
		Query: {
			flex: {
				grow: 1,
			},
			minWidth: '200px',
		},
		Area: {
			minWidth: '150px',
		},
		Results: {
			gap: $mol_gap.block,
			padding: $mol_gap.block,
		},
		Credits: {
			padding: $mol_gap.text,
			textAlign: 'center',
			opacity: 0.7,
		},
	})

	$mol_style_define($bog_prof_app_vaka_item, {
		padding: $mol_gap.block,
		gap: $mol_gap.text,
		background: {
			color: $mol_theme.card,
		},
		border: {
			radius: $mol_gap.text,
		},
		boxShadow: `0 2px 8px ${$mol_theme.shade}`,
		Title: {
			fontSize: '1.2rem',
			fontWeight: 'bold',
			color: $mol_theme.focus,
			textDecoration: 'none',
			':hover': {
				textDecoration: 'underline',
			},
		},
		Meta: {
			color: $mol_theme.shade,
			fontSize: '0.9rem',
		},
		Salary: {
			color: $mol_theme.special,
			fontWeight: 'bold',
			fontSize: '1rem',
		},
		Snippet: {
			color: $mol_theme.text,
			fontSize: '0.95rem',
			whiteSpace: 'pre-wrap',
		},
	})
}
