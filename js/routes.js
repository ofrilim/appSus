// import appHeader from './app-cmps/app-header.js';
import missBooks from './apps/missBooks/cmps/book-app.cmp.js';
import missKeep from './apps/missKeep/pages/note-keep-app.cmp.js'
import missEmail from './apps/missEmail/cmps/email-app.cmp.js';
import emailList from './apps/missEmail/cmps/email-list.cmp.js';
import emailCompose from './apps/missEmail/cmps/email-compose.cmp.js';
import emailTrash from './apps/missEmail/cmps/email-trash.cmp.js';



const myRoutes = [
    {
        path: '/books',
        component: missBooks
    },
    {
        path: '/keep',
        component: missKeep
    },
    {
        path: '/email',
        component: missEmail,
        children: [
            {
                path: 'inbox',
                component: emailList
            },
            {
                path: 'compose',
                component: emailCompose
            },
            {
                path: 'trash',
                component: emailTrash
            }
        ]
    }
]

const myRouter = new VueRouter({routes: myRoutes})

export default myRouter;