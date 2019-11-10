import emailService from '../services/email-service.js';



export default {
    name: 'emailExpand',
    template: `
        <section class="container">
            <ul class="email-content">
                <li class="email-content-header clicked-email"><h1>{{email.subject}}</h1></li>
                <li class="bold">{{email.from}} <span class="small"><{{email.from}}@gmail.com></span></li>
                <li class="">{{email.body}}</li>
            </ul>
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