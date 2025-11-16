namespace $ {
  const { rem } = $mol_style_unit

  $mol_style_define( $bog_bhelper_app_crm, {
    maxWidth: rem(120),
    margin: [0, 'auto'],
    Header: {
      padding: $mol_gap.block,
      background: { color: $mol_theme.card },
      boxShadow: `0 1px 0 var(--mol_theme_line) inset`,
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: $mol_gap.block,
    },
    AddClient: {
      margin: { left: $mol_gap.block },
    },
    Filters: {
      padding: $mol_gap.block,
      gap: $mol_gap.block,
    },
    TableCard: {
      margin: $mol_gap.block,
      background: { color: $mol_theme.back },
      border: { radius: $mol_gap.round },
      boxShadow: `0 0 0 1px var(--mol_theme_line) inset`,
    },
    Pagination: {
      justifyContent: 'flex-end',
      padding: $mol_gap.block,
      gap: $mol_gap.block,
    },
  } )

}
