


export default {
    name: 'emailPreview',
    props: ['email'],
    template: `
        <section class="email-preview">
            <li>
                <h1>{{email.subject}}</h1><h4> Sent At: {{email.sentAt}}</h4>
                <h4>Content: {{email.body}}</h4>
                <h1>isRead: {{email.isRead}}</h1>
                
            </li>
        </section>
    `,
    data() {
        return {

        }
    },
    created() {
         
    },
    methods: {
       
    },
    computed: {

    },
    watch: {
        
    },
    components: {
        
    }
}