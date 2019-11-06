import cmpName from './apps/missBooks/cmps/0000.cmp.js';


const myRoutes = [
    {
        path: '/',
        component: cmpName
    }
]

const myRouter = new VueRouter({routes: myRoutes})

export default myRouter;