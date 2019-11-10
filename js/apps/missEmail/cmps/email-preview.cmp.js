import emailService from '../services/email-service.js';


export default {
    name: 'emailPreview',     
    props: ['email'],
    template: `
        <section>
            <li class="email-preview">
                <p class="email-title" 
                    :class="[email.isRead? '' : 'bold', isOpen? 'clicked-email' : '']" 
                    @click="emailClicked">
                    <i class="far fa-star" @click="starClicked" :class="email.isStar? 'coloredStar' :''"></i>
                    <span class="from">{{email.from}}</span>
                    <span class="subject">{{email.subject}}</span><span class="small">{{email.body}}</span>
                    <span class="sentAt">
                    <i class="fas fa-envelope-open onHover" @click="changeToUnRead" v-if="email.isRead"></i>
                    <i class="fas fa-envelope onHover" v-else></i>
                    <i class="fas fa-trash onHover" @click="deleteMail"></i>
                    {{email.sentAt}}</span>
                </p>
                <div v-show="isOpen">
                    <div class="email-content-header">
                        <h3>{{email.subject}}</h3>
                        <router-link :to="'/email/expand/' + email.id"><i class="fas fa-expand" @click="expandEmail"></i></router-link>
                    </div>
                    <div class="email-content">
                        <p>{{email.from}} <span class="small"><{{email.from}}@gmail.com></span></p>
                        <p>{{email.body}}</p>
                    </div>
                    </p>
                </div>
            </li>
        </section>
    `,
    data() {
        return {
            isOpen: false,
        }
    },
    created() {
         
    },
    methods: {
        emailClicked() {
            this.isOpen = !this.isOpen;
            if(!this.email.isRead) {
                this.email.isRead = true;
                emailService.updateStorage()
            } 
        }, 
        starClicked() {
            this.email.isStar = !this.email.isStar;
            emailService.updateStorage()
            console.log(this.email.isStar)
        },
        changeToUnRead() {
            this.email.isRead = false;
            emailService.updateStorage()
        },
        deleteMail() {
            emailService.deleteEmail(this.email.id)
        },
        expandEmail() {
            console.log('email expand clicked!')

        }
    },
    computed: {

    },
    watch: {
        
    },
    components: {
        
    }
}