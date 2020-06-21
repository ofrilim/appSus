import appHeader from './app-cmps/app-header.js';
import myRouter from './routes.js';

new Vue ({
    router: myRouter,
    el: '#my-app',                      
    
    template: `
         <div>
            <app-header></app-header>
            <router-view></router-view>
        </div>
    `,
    components: {
        appHeader,
    }
})

Vue.config.devtools = true;
