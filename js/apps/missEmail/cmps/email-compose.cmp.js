import emailService from '../services/email-service.js';



export default {
    name: 'emailCompose',
    template: `
        <section class="email-compose container">
        <form class="compose-form" @submit.prevent="saveEmail">
            <ul>
                <li>New Message</li>
                <li><input type="text" placeholder="From:" v-model="newEmail.from"></li>
                <li><input type="text" placeholder="Subject:" v-model="newEmail.subject"></li>
                <li><textarea placeholder="Message:" v-model="newEmail.body"></textarea></li>
                <li><button class="compose-btn">Send</button></li>
            </ul>
        </form>
        </section>
    `,
    data() {
        return {
            newEmail: emailService.createEmail()
        }
    },
    created() {
    },
    methods: {
        saveEmail() {
            console.log('email saved.....' ,this.newEmail)
            emailService.addNewEmail(this.newEmail)
            this.$router.push('/email/inbox')
        },
    },
    computed: {
        
    },
    watch: {
        
    },
    components: {
        
    }
}