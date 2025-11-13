namespace $.$$ {

    export class $bog_bhelper_app_crm extends $.$bog_bhelper_app_crm {

        @ $mol_mem
        realm() {
            return $hyoo_crus_realm
        }

        @ $mol_mem
        profile() {
            // Один профиль на пользователя
            return this.realm().home().hall_by( $bog_bhelper_crm_profile, {} )
        }

        @ $mol_mem
        clients_all() {
            const list = this.profile()?.Clients()?.remote_list() ?? []
            return list as readonly $bog_bhelper_crm_client[]
        }

        // --- Поиск / фильтры ---

        @ $mol_mem
        search(next?: string) {
            return next ?? ''
        }

        @ $mol_mem
        status_filter(next?: string) { return next ?? '' }

        @ $mol_mem
        segment_filter(next?: string) { return next ?? '' }

        @ $mol_mem
        manager_filter(next?: string) { return next ?? '' }

        @ $mol_action
        filters_reset() {
            this.search('')
            this.status_filter('')
            this.segment_filter('')
            this.manager_filter('')
        }

        @ $mol_mem
        status_options() {
            const base = [ '', 'new', 'lead', 'client', 'lost' ]
            return base
        }

        @ $mol_mem
        segment_options() {
            const segments = new Set<string>()
            this.clients_all().forEach( c => {
                const seg = c.Segment(null)?.str() ?? ''
                if( seg ) segments.add(seg)
            })
            return [ '', ...segments ]
        }

        @ $mol_mem
        manager_options() {
            const managers = new Set<string>()
            this.clients_all().forEach( c => {
                const m = c.ManagerName(null)?.str() ?? ''
                if( m ) managers.add(m)
            })
            return [ '', ...managers ]
        }

        @ $mol_mem
        clients_filtered() {
            const q = this.search().trim().toLowerCase()
            const status = this.status_filter()
            const segment = this.segment_filter()
            const manager = this.manager_filter()

            return this.clients_all().filter( client => {

                const name = client.Name(null)?.str() ?? ''
                const company = client.Company(null)?.str() ?? ''
                const tags = client.TagsCsv(null)?.text() ?? ''

                if( q ) {
                    const hay = `${name} ${company} ${tags}`.toLowerCase()
                    if( !hay.includes(q) ) return false
                }

                if( status && client.Status(null)?.str() !== status ) return false
                if( segment && client.Segment(null)?.str() !== segment ) return false
                if( manager && client.ManagerName(null)?.str() !== manager ) return false

                return true
            })
        }

        page_size() { return 20 }

        @ $mol_mem
        page(next?: number) {
            return next ?? 0
        }

        @ $mol_mem
        page_count() {
            return Math.ceil( this.clients_filtered().length / this.page_size() ) || 1
        }

        @ $mol_mem
        client_ids_page() {
            const list = this.clients_filtered()
            const page = Math.min( this.page(), this.page_count() - 1 )
            const from = page * this.page_size()
            const to = from + this.page_size()

            return list.slice(from, to).map( c => c.ref().description! )
        }

        @ $mol_mem
        page_has_prev() {
            return this.page() > 0
        }

        @ $mol_mem
        page_has_next() {
            return this.page() < this.page_count() - 1
        }

        @ $mol_action
        page_prev() {
            if( this.page_has_prev() ) this.page( this.page() - 1 )
        }

        @ $mol_action
        page_next() {
            if( this.page_has_next() ) this.page( this.page() + 1 )
        }

        @ $mol_mem
        page_info_text() {
            const total = this.clients_filtered().length
            const page = this.page() + 1
            const count = this.page_count()
            return `Показано ${total} клиентов • Стр. ${page} из ${count}`
        }

        @ $mol_mems
        client( id: string ) {
            const ref = $hyoo_crus_ref( id )
            return this.realm().Node( ref, $bog_bhelper_crm_client )
        }

        @ $mol_action
        client_add() {
            const list = this.profile()?.Clients(null)
            if( !list ) return

            const client = list.remote_make({ '': $hyoo_crus_rank_get })! as $bog_bhelper_crm_client

            client.Name(null)!.val('Новый клиент')
            client.Status(null)!.val('new')
            client.CreatedAt(null)!.val(new Date().toISOString())
            client.UpdatedAt(null)!.val(new Date().toISOString())

            return client
        }
    }


    export class $bog_bhelper_app_crm_client_row extends $.$bog_bhelper_app_crm_client_row {

        client_id() { return '' }

        @ $mol_mem
        client() {
            const id = this.client_id()
            const ref = $hyoo_crus_ref( id )
            return this.$.$hyoo_crus_realm.Node( ref, $bog_bhelper_crm_client )
        }

        @ $mol_mem
        Name() {
            return this.client().Name(null)?.str() ?? '—'
        }

        @ $mol_mem
        Company() {
            const v = this.client().Company(null)?.str() ?? ''
            return v || ''
        }

        @ $mol_mem
        Status() {
            return this.client().Status(null)?.str() ?? '—'
        }

        @ $mol_mem
        Segment() {
            return this.client().Segment(null)?.str() ?? '—'
        }

        @ $mol_mem
        City() {
            return this.client().City(null)?.str() ?? '—'
        }

        @ $mol_mem
        LastContact() {
            const dt = this.client().LastContactAt(null)?.str()
            return dt ? dt.slice(0, 10) : '—'
        }

        @ $mol_mem
        NextAction() {
            const txt = this.client().AiNextStep(null)?.text()
                || this.client().NextActionAt(null)?.str()
            return txt || '—'
        }

        @ $mol_mem
        Manager() {
            return this.client().ManagerName(null)?.str() ?? '—'
        }

    }

}
