import appHeader from './app-cmps/app-header.js';
import appFooter from './app-cmps/app-footer.js';
import myRouter from './routes.js';

new Vue ({
    router: myRouter,
    el: '#my-app',                      
    
    template: `
         <div>
            <app-header></app-header>
            <router-view></router-view>
            <!-- <app-footer></app-footer> -->
        </div>
    `,
    components: {
        appHeader,
        appFooter
    }
})

Vue.config.devtools = true;
