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
    created() {
        console.log('email is created:', this.emails)
    },
    components: {
        emailPreview        
    }
}