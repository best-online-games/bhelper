namespace $.$$ {
  export class $bog_prof_app extends $.$bog_prof_app {
    @ $mol_mem
    override spread(next?: string) {
      const param = this.param()
      if (next !== undefined) return this.$.$mol_state_arg.value(param, next) ?? ''
      const raw = this.$.$mol_state_arg.value(param) ?? ''
      return String(raw).split('/')[0] || ''
    }
  }
}
