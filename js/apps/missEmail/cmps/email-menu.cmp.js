
export default {
    name: 'emailMenu',
    props: ['unReadCount'],
    template: `
    <section class="email-menu">

        <router-link to="/email/compose"><div class="compose"><i class="fas fa-plus"></i><span class="compose-word">Compose</span></div></router-link>
        <ul class="menu-options">
            <router-link to="/email/inbox"><li class="inbox"><i class="fas fa-inbox"></i>Inbox
            <span class="email-status">({{unReadCount}})</span>
            </span></li></router-link>
            <router-link to="/email/starred"><li><i class="far fa-star coloredStar"></i>Starred</li></router-link>
            <li><i class="fas fa-share-square"></i>Sent mail</li>
            <router-link to="/email/trash"><li class="trash"><i class="fas fa-trash"></i>Trash</li></router-link>
        </ul>

    </section>
    `,
}