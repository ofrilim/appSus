import navBar from "./app-navbar.js";

export default {
  name: "appHeader",
  template: `
       <section class="app-header">
            <nav>
            <h1 class="app-title" ref="apptitle">Appsus</h1>
                <router-link to="/">Home</router-link> |
                <router-link to="/books">Books</router-link> |
                <router-link to="/keep">Keep</router-link> |
                <router-link to="/email/inbox">Email</router-link> |
                <nav-bar></nav-bar>
                <img class="user-avatar" src="./img/user.jpeg" alt="user" @click="clearStorage">

            </nav>

       </section>
    `,
  components: {
    navBar
  },
  methods: {
    clearStorage() {
      console.log("local storage cleared");
      localStorage.clear();
    }
  }
};
