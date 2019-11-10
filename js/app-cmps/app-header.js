import navBar from "./app-navbar.js";

export default {
  name: "appHeader",
  template: `
       <section class="app-header">
            <nav>
            <h1 class="app-title" ref="apptitle">Appsus</h1>
            <div class="header-cont"
                <router-link to="/"><i class="fas fa-home"></i> Home</router-link> |
                <router-link to="/books"><i class="fas fa-book"></i> Books</router-link> |
                <router-link to="/keep"><i class="fas fa-sticky-note"></i> Keep</router-link> |
                <router-link to="/email"><i class="fas fa-envelope-open"></i> Email</router-link> |
            </div>
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
