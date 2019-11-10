// import {eventBus} from '../../../services/event-bus.service.js'

import emailPreview from './email-preview.cmp.js'


export default {
    name: 'emailList',
    props: ['emails'],
    template: `
        <section class="email-list container">
            <ul>
                <email-preview v-for="(currEmail, idx) in emails" :key="currEmail.id" v-bind:email="currEmail"></email-preview>
            </ul>
        </section>
    `,
    data() {
        return {
            // emails: []
        }
    },
    created() {
        // console.log('email is created:', this.emails)
        // eventBus.$on('emailsToShow', emails => this.emails = emails);

    },
    components: {
        emailPreview        
    }
}







 // watch: {
    //     '$route'() {
    //         console.log('text')
    //     } 
    // },