// import {eventBus} from '../../../services/event-bus.service.js';

import emailService from '../services/email-service.js';
import emailSearch from './email-search.cmp.js';
import emailMenu from './email-menu.cmp.js';
import emailList from './email-list.cmp.js';


export default {
    name: 'emailApp',
    template: `
        <section class="email-app" v-if="emails">
            <email-search @searchBy="filterEmails"></email-search>
            <div class="app-container">
                <email-menu :unReadCount="countUnRead"></email-menu> 
                <router-view :emails="emailsToShow"></router-view>
            </div>
        </section>
    `,
    data() {
        return {
            emails: [],
            emailsToShow: []
        }
    },
    created() {
        emailService.getEmails()
            .then(res => {
                this.emails = res;
                this.emailsToShow = res;
            });
    },
    methods: {
        filterEmails(searchBy) {
            var filteredByTxt = this.emails.filter(email => {
                return email.subject.toLowerCase().includes(searchBy.txt.toLowerCase()) ||
                       email.from.toLowerCase().includes(searchBy.txt.toLowerCase())
            });

            var filtered;

            switch(searchBy.options) {
                case 'Read': 
                    filtered = filteredByTxt.filter(email => email.isRead)
                    break;
                case 'Unread':
                    filtered = filteredByTxt.filter(email => !email.isRead)
                    break;
                default:
                    filtered = filteredByTxt
            }
            this.emailsToShow = filtered;
        }
    },
    computed: {
        countUnRead() {
            return this.emails.reduce(function(acc , email) {
                return acc + !email.isRead
            }, 0)
        }
    },
    components: {
        emailList,
        emailSearch,
        emailMenu
    }
}