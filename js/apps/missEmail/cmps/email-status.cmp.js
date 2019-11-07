
// component that show the status for read and unread emails

export default {
    name: 'emailStatus',
    template: `
        <section class="email-status">
            <h1>{{unRead}} UnRead Emails</h1>
        </section>
    `,
    data() {
        return {
            unRead: 0
        }
    },
    created() {
         
    },
    methods: {
       
    },
    computed: {

    },
    watch: {
        
    },
    components: {
        
    }
}