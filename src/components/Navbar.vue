<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar w/ text</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link :to="{ name: 'home' }" class="nav-link"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'about' }" class="nav-link"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'messages' }" class="nav-link"
              >Messages</router-link
            >
          </li>
        </ul>
        <!-- <span class="navbar-text"> Navbar text with an inline element </span> -->
        <ul class="navbar-nav">
          <li class="nav-item" v-if="isAuthenticated">
            <span class="nav-link" v-if="currentUser != null"
              >Welcome, <b>{{ currentUser.username }}</b></span
            >
          </li>
          <li class="nav-item" v-if="!isAuthenticated">
            <router-link :to="{ name: 'login' }" class="nav-link"
              >Login</router-link
            >
          </li>
          <li class="nav-item" v-if="!isAuthenticated">
            <router-link :to="{ name: 'sign-up' }" class="nav-link"
              >Sign up</router-link
            >
          </li>
          <li class="nav-item" v-if="isAuthenticated">
            <router-link :to="{ name: 'logout' }" class="nav-link"
              >Logout</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { axiosBase } from '@/api/axiosConfig';
export default {
  data(){
    return {
      drawer: false,
      group: null,
      user: {},
    };
  },
  computed:{
     ...mapGetters(["isAuthenticated"]),
        currentUser(){
          if(this.isAuthenticated){
            const crrUser = this.$store.state.user.user;
            return crrUser;
          }
          else{
            const temp_user = {
              username: "None"
            };
            return temp_user;
          }
        },
        
     },
  methods :{
    getCurrentUser(){
      console.log("from store");
      console.log(this.$store.state.user.user);
      if(this.isAuthenticated){
        axiosBase
        .get("auth/user/", {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          console.log(res.data.username);
          // this.user = res.data;
          this.$store.commit('currentUser', res.data);
          console.log("from store");
          console.log(this.$store.state.user.user.username);
          this.user = this.$store.state.user.user;
        })
        .catch((err) => console.log(err));
      }
    },
  },
  mounted() {
    this.getCurrentUser();
    console.log("Navbar Component Mounted");
  },
  created(){
    console.log("Navbar Created");
  }
};
</script>
<style scoped>
#nav {
  margin-bottom: 20px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>