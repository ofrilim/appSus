import navBar from "./app-navbar.js";

export default {
  name: "appHeader",
  template: `
       <section class="app-header">
           <div class="app-title-logo">
           <router-link to="/"><img class="user-avatar" src="./img/user.jpeg" alt="user" ></router-link>
                  <!-- <span class="app-title" ref="apptitle">Appsus</span> -->
            </div>
            <div class="app-title-content">
                <router-link to="/">Home</router-link> 
                <router-link to="/books">Books</router-link> 
                <router-link to="/keep">Keep</router-link> 
                <router-link to="/email/inbox">Email</router-link> 
            </div>
                <nav-bar class="nav-icon"></nav-bar>


       </section>
    `,
  components: {
    navBar
  },
  methods: {
  }
};
