// import appHeader from './app-cmps/app-header.js';
import missBooks from './apps/missBooks/cmps/0000.cmp.js';
import missKeep from './apps/missKeep/pages/note-keep-app.cmp.js'
import missEmail from './apps/missEmail/cmps/0000.cmp.js';


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
        component: missEmail
    }
]

const myRouter = new VueRouter({routes: myRoutes})

export default myRouter;