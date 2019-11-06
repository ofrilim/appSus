import myRouter from './routes.js';

new Vue ({
    router: myRouter,
    el: '#my-app',                      
    
    template: `
        <div>
            <app-header></app-header>
            hdsdsd
            hey also!
        </div>
    `,
    components: {
        appHeader
    }
})

Vue.config.devtools = true;
