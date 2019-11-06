

export default {
    name: 'appHeader',
    template: `
       <section class="app-header">
            <nav>
                <router-link to="books/">Welcome</router-link>
                <router-link to="books/about">About</router-link>
                <router-link to="books/book">Books</router-link>
                <router-link to="books/book/add">Add Books</router-link>
            </nav>
            <h1>Miss Books Proj</h1>
       </section>
    `, 
}