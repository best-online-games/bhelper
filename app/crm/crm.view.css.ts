namespace $ {
  const { rem } = $mol_style_unit

  $mol_style_define( $bog_bhelper_app_crm, {
    maxWidth: rem(120),
    margin: '0 auto',
    Head: {
      padding: $mol_gap.block,
      background: { color: $mol_theme.card },
      boxShadow: `0 1px 0 var(--mol_theme_line) inset`,
      Query: { minWidth: rem(24) },
      Stage: { minWidth: rem(16) },
      Manager: { minWidth: rem(16) },
      Add: { margin: [0,0,0,$mol_gap.block] },
    },
    Grid: {
      margin: $mol_gap.block,
      background: { color: $mol_theme.back },
      border: { radius: $mol_gap.round },
      boxShadow: `0 0 0 1px var(--mol_theme_line) inset`,
    },
    Pager: {
      justifyContent: 'flex-end',
      padding: $mol_gap.block,
      gap: $mol_gap.block,
    },
  } )

}
