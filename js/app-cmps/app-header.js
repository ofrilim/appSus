



export default {
    name: 'appHeader',
    template: `
       <section class="app-header">
            <nav>
                <router-link to="/">home</router-link> |
                <router-link to="/books">miss-books</router-link> |
                <router-link to="/keep">miss-keep</router-link> |
                <router-link to="/email">miss-email</router-link> |
            </nav>
       </section>
    `, 
}