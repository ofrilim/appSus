


export default {
    name: 'emailPreview',
    props: ['email'],
    template: `
        <section>
            <li class="email-preview">
                <p class="email-title" @click="emailClicked">{{email.from}}
                    <span>{{email.subject}}</span>
                    <span class="sentAt">{{email.sentAt}}</span>
                </p>
                <p class="email-content" v-show="isRead">{{email.body}}</p>
            </li>
        </section>
    `,
    data() {
        return {
            isRead: false
        }
    },
    created() {
         
    },
    methods: {
        emailClicked() {
            this.isRead = !this.isRead
        }
       
    },
    computed: {

    },
    watch: {
        
    },
    components: {
        
    }
}