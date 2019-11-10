import emailService from '../services/email-service.js';



export default {
    name: 'emailExpand',
    template: `
        <section class="container">
            <h1>heyy</h1>
        </section>
    `,
    data() {
        return {
            email: {}
        }
    },
    created() {
        const emailId = this.$route.params.id;
        if (emailId) {
            emailService.getEmailById(+emailId)
                .then(emailFromService => this.email = emailFromService)
        }
    }
}