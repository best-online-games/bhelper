namespace $.$$ {
  export class $bog_prof_app extends $.$bog_prof_app {
    @ $mol_mem
    override param() {
      return 'book'
    }
    @ $mol_mem
    override spread(next?: string) {
      const param = this.param()
      if (next !== undefined) return this.$.$mol_state_arg.value(param, next) ?? ''
      const raw = this.$.$mol_state_arg.value(param) ?? ''
      const head = String(raw).split('/')[0] || ''
      return head
    }
  }
}
