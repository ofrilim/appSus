


export default {
    name: 'emailSearch',
    template: `
        <section class="email-search">
            <input type="text" placeholder="Search mail" @input="onFilterEmails" v-model="searchBy.txt" />
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
                txt: '',
                options: 'All'
            }
        }
    },
    // created() {
    //     this.$emit('searchBy', this.searchBy);
    // },
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