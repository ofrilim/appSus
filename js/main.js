import myRouter from './routes.js';

new Vue ({
    router: myRouter,
    el: '#my-app',                      
    
    template: `
        <div>
            hel
            hey also!
        </div>
    `,
    components: {
    }
})

Vue.config.devtools = true;
