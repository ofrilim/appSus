import emailPreview from './email-preview.cmp.js'



export default {
    name: 'emailList',
    props: ['emails'],
    template: `
        <section class="email-list">
            <ul>
                <email-preview v-for="(currEmail, idx) in emails" :key="currEmail.id" :email="currEmail"></email-preview>
            </ul>
        </section>
    `,
    components: {
        emailPreview        
    }
}