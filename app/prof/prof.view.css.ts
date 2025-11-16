namespace $.$$ {
		$mol_style_define($bog_bhelper_app_prof, {
			Helper_item: {
				padding: $mol_gap.block,
				overflow: 'hidden',
				flex: {
					grow: 1,
					shrink: 1,
					basis: '18rem',
				},
				border: {
					radius: $mol_gap.round,
				},
				boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
				background: {
					color: $mol_theme.card,
				},
				gap: $mol_gap.space,
				cursor: 'pointer',
				transition: 'transform 0.3s ease, box-shadow 0.3s ease',
				':hover': {
					transform: 'translateY(-8px)',
					boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
				},
			},
			Helper_title_view: {
				whiteSpace: 'normal',
				wordBreak: 'break-word',
				overflowWrap: 'anywhere',
				maxWidth: '100%',
				fontWeight: '700',
				fontSize: '1.05rem',
			},
			Helper_descr_view: {
				whiteSpace: 'normal',
				wordBreak: 'break-word',
				overflowWrap: 'anywhere',
				maxWidth: '100%',
			},
			Helper_link: {
				display: 'flex',
				flexWrap: 'wrap',
				width: '100%',
			},
		})
	}
