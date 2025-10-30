namespace $.$$ {
  export class $bog_prof_app_prof extends $.$bog_prof_app_prof {
    // Ensure nested routing uses path like "prof/development"
    @ $mol_mem
    override spread(next?: string) {
      const param = this.param()
      if (next !== undefined) {
        const value = next ? `prof/${next}` : 'prof'
        this.$.$mol_state_arg.value(param, value)
        return next ?? ''
      }
      const raw = this.$.$mol_state_arg.value(param) ?? ''
      const parts = String(raw).split('/')
      if (parts[0] !== 'prof') return ''
      return parts[1] ?? ''
    }

    override arg(spread: string) {
      const param = this.param()
      const value = spread ? `prof/${spread}` : 'prof'
      return { [param]: value || null }
    }
    // Development list
    @ $mol_mem
    dev_titles(): readonly string[] {
      return [
        'Frontend Developer',
        'Backend Developer',
        'Full Stack Developer',
        'Mobile Developer',
        'QA Engineer',
        'Data Engineer',
        'ML Engineer',
      ]
    }

    dev_title(id: number): string {
      return this.dev_titles()[id] ?? ''
    }

    @ $mol_mem
    Dev_gallery_items() {
      return this.dev_titles().map((_, i) => this.Dev_item(i))
    }

    // Design list
    @ $mol_mem
    design_titles(): readonly string[] {
      return [
        'UI/UX Designer',
        'Product Designer',
        'Graphic Designer',
        'Motion Designer',
      ]
    }

    design_title(id: number): string {
      return this.design_titles()[id] ?? ''
    }

    @ $mol_mem
    Design_gallery_items() {
      return this.design_titles().map((_, i) => this.Design_item(i))
    }

    // DevOps list
    @ $mol_mem
    devops_titles(): readonly string[] {
      return [
        'DevOps Engineer',
        'Site Reliability Engineer',
        'Cloud Engineer',
        'Platform Engineer',
      ]
    }

    devops_title(id: number): string {
      return this.devops_titles()[id] ?? ''
    }

    @ $mol_mem
    Devops_gallery_items() {
      return this.devops_titles().map((_, i) => this.Devops_item(i))
    }

    // All = union
    @ $mol_mem
    all_titles(): readonly string[] {
      const all = [ ...this.dev_titles(), ...this.design_titles(), ...this.devops_titles() ]
      // Deduplicate while preserving order
      return Array.from(new Set(all))
    }

    all_title(id: number): string {
      return this.all_titles()[id] ?? ''
    }

    @ $mol_mem
    All_gallery_items() {
      return this.all_titles().map((_, i) => this.All_item(i))
    }
  }
}
