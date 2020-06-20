// import appHeader from './app-cmps/app-header.js';
import missBooks from './apps/missBooks/cmps/book-app.cmp.js';
import missKeep from './apps/missKeep/pages/note-keep-app.cmp.js'
import emailApp from './apps/missEmail/cmps/email-app.cmp.js';
import emailList from './apps/missEmail/cmps/email-list.cmp.js';
import emailCompose from './apps/missEmail/cmps/email-compose.cmp.js';
import emailExpand from './apps/missEmail/cmps/email-expand.cmp.js';
import emailTrash from './apps/missEmail/cmps/email-trash.cmp.js';
import emailStarred from './apps/missEmail/cmps/email-starred.cmp.js';
import notePreview from './apps/missKeep/cmps/note-preview.cmp.js'
import noteEdit from './apps/missKeep/cmps/dynamic-cmps/note-edit.cmp.js'
import home from './app-cmps/home.cmp.js'


const myRoutes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/books',
        component: missBooks
    },
    {
        path: '/keep',
        component: missKeep
    },
    {
        path: "/keep/:noteId",
        component: notePreview
    },
      
    { path: "/keep/edit/:noteId",
         component: noteEdit 
    },
    {
        path: '/email',
        component: emailApp,
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
            },
            {
                path: 'starred',
                component: emailStarred
            },
            {
                path: 'expand/:id',
                component: emailExpand
            }
        ]
    }
]

const myRouter = new VueRouter({ routes: myRoutes });
export default myRouter;
