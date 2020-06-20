import emailPreview from './email-preview.cmp.js';

export default {
    name: 'emailTrash',
    props: ['trash'],
    template: `
        <section class="email-trash container">
            <h1>Trash:</h1>
            <ul>
                <email-preview v-for="(currEmail, idx) in trash" :key="currEmail.id" v-bind:email="currEmail"></email-preview>
            </ul>            
        </section>
    `,
    components: {
        emailPreview        
    }   
}