<template>
  <div class="home">
    <!-- <Header /> -->
    <Navbar />
     <h1>Hello World!!</h1>
    <!-- <Sidebar>
      <template v-slot:append>
        <div class="pa-2 mx-auto">
         
        </div>
      </template>
    </Sidebar> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar";
// import Sidebar from "@/components/layout/Sidebar";
// import Header from "@/components/layout/Header"
// import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      users: [],
    };
  },
  components: {
    Navbar,
    // Sidebar
    // Header
  },
  mounted() {
    console.log("Mounted");
  },
  computed: {
   
  },
  methods: {
    
  },
  created() {
  },
};
</script>
