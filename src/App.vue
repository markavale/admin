<template>
  <v-app>
    <Sidebar>
    <!-- <v-main>
      <router-view />
    </v-main> -->
    </Sidebar>
  </v-app>
</template>

<script>
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
import Sidebar from "@/components/Sidebar"
export default {
  name: "App",

  components: {
    // HelloWorld,
    Sidebar
  },

  data: () => ({
    //
  }),
};
</script>


<style lang="scss">
#app {
  font-family: 'Montserrat', sans-serif;//Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color:#181818;
  // text-align: center;
  // color: #2c3e50;
}

#nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.theme--dark.v-application {
    background-color: #181818;
}

.theme--dark.v-card, 
.theme--dark.v-data-table,
.theme--dark.v-tabs-items,
.theme--dark.v-tabs .v-tabs-bar {
    background-color: #232323;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

::-webkit-scrollbar {
    width: 8px;
    background-color: #111;
}

::-webkit-scrollbar-thumb {
    background-color: #222;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #444;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 4px rgba(0,0,0,0.6);
    background-color: #333;
}

::-webkit-scrollbar-track:hover {
    background-color: #292929;
}
</style>
