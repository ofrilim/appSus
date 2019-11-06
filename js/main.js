import myRouter from './routes.js';

new Vue ({
    router: myRouter,
    el: '#my-app',                      
    
    template: `
        <div>
            <app-header></app-header>
        </div>
    `,
    components: {
        appHeader
    }
})

Vue.config.devtools = true;
