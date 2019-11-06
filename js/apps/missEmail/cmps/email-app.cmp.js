import emailService from '../services/email-service.js';
import emailList from './email-list.cmp.js';
import emailStatus from './email-status.cmp.js';


export default {
    name: 'emailApp',
    template: `
        <section class="email-app">
            <h1>Root Page- Email App</h1>
            <email-status></email-status>
            <email-list :emails="emails"></email-list>
        </section>
    `,
    data() {
        return {
            emails: []
        }
    },
    created() {
        this.emails = emailService.getEmails()
        console.log(this.emails)
    },
    methods: {
       
    },
    computed: {

    },
    watch: {
        
    },
    components: {
        emailList,
        emailStatus
    }
}