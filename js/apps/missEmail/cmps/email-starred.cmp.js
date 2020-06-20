import emailPreview from './email-preview.cmp.js';

export default {
    name: 'emailStarred',
    props: ['starred'],
    template: `
        <section class="email-starred container">
            <h1>Starred:</h1>
            <ul>
                <email-preview v-for="(currEmail, idx) in starred" :key="currEmail.id" v-bind:email="currEmail"></email-preview>
            </ul>
        </section>
    `,
    components: {
        emailPreview        
    }
}