import emailService from '../services/email-service.js';


export default {
    name: 'emailMenu',
    template: `
    <section class="email-menu">

        <router-link to="/email/compose"><p class="compose">+ Compose</p></router-link>
        <router-link to="/email/inbox"><p class="inbox"><p>Inbox</p></router-link>
        <p>Starred</p>
        <p>Sent mail</p>
        <router-link to="/email/trash"><p class="trash"><p>Trash</p></router-link>

    </section>
    `,
    methods: {
        // newEmail() {
        //     console.log('new email is created!');
        //     // var newEmail = emailService.createEmail('didi', 'Dada', 'having fun');
        //     // console.log(newEmail)
        // }
    }

}