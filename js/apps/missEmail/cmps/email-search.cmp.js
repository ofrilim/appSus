


export default {
    name: 'emaiSearch',
    template: `
        <section class="email-search">
            <input type="text" placeholder="Search mail" @input="onFilterEmails" v-model="searchBy.subject" />
            <select v-model="searchBy.options" @change="onFilterEmails">
                <option value="All">All</option>
                <option value="Read">Read</option>
                <option value="Unread">Unread</option>
            </select>
        </section>
    `,
    data() {
        return {
            searchBy: {
                subject: '',
                options: 'All'
            }
        }
    },
    created() {

    },
    methods: {
        onFilterEmails() {
            this.$emit('searchBy', this.searchBy)
            console.log(this.searchBy)
        }
    },
    computed: {

    },
    watch: {
        
    },
    components: {
        
    }
}