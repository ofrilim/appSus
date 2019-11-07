import emailService from '../services/email-service.js';
import emailList from './email-list.cmp.js';
import emailStatus from './email-status.cmp.js';
import emailSearch from './email-search.cmp.js';
import emailMenu from './email-menu.cmp.js';


export default {
    name: 'emailApp',
    template: `
        <section class="email-app">
            <h1>Root Page- Email App</h1>
            <email-search @searchBy="setSearchBy"></email-search>
            <div class="app-container">
                <email-menu></email-menu>
                <div class="search-list-container">
                    <email-status></email-status>
                    <email-list :emails="emailsToShow"></email-list>
                </div>
            </div>
        </section>
    `,
    data() {
        return {
            emails: [],
            searchBy: null
        }
    },
    created() {
        emailService.getEmails()
            .then(res => {this.emails = res})
    },
    methods: {
        setSearchBy(searchBy) {
            this.searchBy = searchBy;
        }
    },
    computed: {
        emailsToShow() {
            if (!this.searchBy || this.searchBy.subject === '') return this.emails;
            return this.emails.filter(email => {
                return email.subject.toLowerCase().includes(this.searchBy.subject.toLowerCase()) ||
                       email.from.toLowerCase().includes(this.searchBy.subject.toLowerCase())
            })                          
        }
    },
    components: {
        emailList,
        emailStatus,
        emailSearch,
        emailMenu
    }
}